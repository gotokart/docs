import React from 'react'
import activity from '../generated/activity.json'
import styles from './ActivityTimeline.module.css'

type Commit = {
  hash: string
  shortHash: string
  subject: string
  author: string
  iso: string
}

type Day = {
  date: string
  commits: Commit[]
}

type ActivityData = {
  generatedAt: string
  days: Day[]
}

const data = activity as ActivityData

function formatDisplayDate(isoDate: string) {
  if (isoDate === 'unknown') return 'Unknown date'
  try {
    const d = new Date(isoDate + 'T12:00:00')
    return d.toLocaleDateString(undefined, {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  } catch {
    return isoDate
  }
}

export default function ActivityTimeline() {
  const { days, generatedAt } = data
  const allCommits = days.flatMap((day) => day.commits)

  if (!days.length) {
    return (
      <div className={styles.empty}>
        <p className={styles.emptyTitle}>No commit history yet</p>
        <p className={styles.emptyHint}>
          After you push commits to this repository, run <code>npm run build</code> or{' '}
          <code>npm run dev</code> to regenerate this timeline from git.
        </p>
      </div>
    )
  }

  return (
    <div className={styles.wrap}>
      <p className={styles.meta}>
        Last generated:{' '}
        <time dateTime={generatedAt}>{new Date(generatedAt).toLocaleString()}</time>
      </p>
      <div className={styles.actions}>
        <a
          className={styles.fullHistory}
          href="https://github.com/gotokart/docs/commits/main/"
          target="_blank"
          rel="noreferrer"
        >
          See full commit history on GitHub →
        </a>
      </div>
      <div className={styles.timeline}>
        {days.map((day) => (
          <section key={day.date} className={styles.dayBlock}>
            <header className={styles.dayHeader}>
              <span className={styles.dayBadge}>{day.date}</span>
              <h3 className={styles.dayTitle}>{formatDisplayDate(day.date)}</h3>
              <span className={styles.dayCount}>
                {day.commits.length} commit{day.commits.length === 1 ? '' : 's'}
              </span>
            </header>
            <ul className={styles.commitList}>
              {day.commits.map((c) => (
                <li key={c.hash} className={styles.commitCard}>
                  <div className={styles.commitTop}>
                    <code className={styles.hash}>{c.shortHash}</code>
                    <span className={styles.author}>{c.author}</span>
                  </div>
                  <p className={styles.subject}>{c.subject}</p>
                  <a
                    className={styles.githubLink}
                    href={`https://github.com/gotokart/docs/commit/${c.hash}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub →
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <details className={styles.fullListWrap}>
        <summary className={styles.fullListSummary}>See full commit list (oldest to newest grouping preserved)</summary>
        <ol className={styles.fullList}>
          {allCommits.map((c) => (
            <li key={`full-${c.hash}`}>
              <a
                className={styles.githubLink}
                href={`https://github.com/gotokart/docs/commit/${c.hash}`}
                target="_blank"
                rel="noreferrer"
              >
                {c.shortHash}
              </a>{' '}
              - {c.subject} <span className={styles.author}>({c.author})</span>
            </li>
          ))}
        </ol>
      </details>
    </div>
  )
}
