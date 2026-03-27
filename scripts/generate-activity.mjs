/**
 * Reads git history and writes generated/activity.json for the Activity timeline page.
 * Run automatically before dev/build via predev/prebuild.
 */
import { execSync } from 'node:child_process'
import { mkdirSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const outFile = join(root, 'generated', 'activity.json')

function runGitLog() {
  try {
    return execSync(
      'git log -800 --no-merges --pretty=format:%H%x09%s%x09%an%x09%ai',
      { cwd: root, encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 }
    )
  } catch {
    return ''
  }
}

function parseLog(raw) {
  if (!raw.trim()) {
    return { generatedAt: new Date().toISOString(), days: [] }
  }

  const lines = raw.trim().split('\n')
  /** @type {Map<string, Array<{hash: string, shortHash: string, subject: string, author: string, iso: string}>>} */
  const byDay = new Map()

  for (const line of lines) {
    const [hash, subject, author, iso] = line.split('\t')
    if (!hash || !subject) continue
    const date = iso ? iso.slice(0, 10) : 'unknown'
    const entry = {
      hash,
      shortHash: hash.slice(0, 7),
      subject: subject.trim(),
      author: author?.trim() || 'Unknown',
      iso: iso?.trim() || '',
    }
    if (!byDay.has(date)) byDay.set(date, [])
    byDay.get(date).push(entry)
  }

  const days = [...byDay.entries()]
    .sort((a, b) => (a[0] < b[0] ? 1 : a[0] > b[0] ? -1 : 0))
    .map(([date, commits]) => ({ date, commits }))

  return {
    generatedAt: new Date().toISOString(),
    days,
  }
}

mkdirSync(dirname(outFile), { recursive: true })
const raw = runGitLog()
const data = parseLog(raw)
writeFileSync(outFile, JSON.stringify(data, null, 2), 'utf8')
console.log(`[generate-activity] wrote ${data.days.length} day(s) to generated/activity.json`)
