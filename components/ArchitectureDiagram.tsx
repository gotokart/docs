export default function ArchitectureDiagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1080 820"
      width="100%"
      style={{ fontFamily: "'Segoe UI', Arial, sans-serif", borderRadius: 8 }}
    >
      <defs>
        {/* Single dim-gray arrow for most edges */}
        <marker id="mg" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6Z" fill="#484f58"/>
        </marker>
        {/* Dim blue for the main data path */}
        <marker id="mb" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6Z" fill="#388bfd"/>
        </marker>
      </defs>

      {/* ── Canvas ── */}
      <rect width="1080" height="820" fill="#0d1117" rx="8"/>

      {/* ── Thin lane separators ── */}
      <line x1="0" y1="108" x2="1080" y2="108" stroke="#21262d" strokeWidth="1"/>
      <line x1="0" y1="244" x2="1080" y2="244" stroke="#21262d" strokeWidth="1"/>
      <line x1="0" y1="370" x2="1080" y2="370" stroke="#21262d" strokeWidth="1"/>
      <line x1="0" y1="666" x2="1080" y2="666" stroke="#21262d" strokeWidth="1"/>
      <line x1="0" y1="768" x2="1080" y2="768" stroke="#21262d" strokeWidth="1"/>

      {/* ── Lane labels (small, muted, left side) ── */}
      {/* Lane label backgrounds */}
      <rect x="0" y="12"  width="28" height="96"  rx="4" fill="#161b22"/>
      <rect x="0" y="110" width="28" height="134" rx="4" fill="#161b22"/>
      <rect x="0" y="246" width="28" height="124" rx="4" fill="#161b22"/>
      <rect x="0" y="372" width="28" height="294" rx="4" fill="#161b22"/>
      <rect x="0" y="668" width="28" height="100" rx="4" fill="#161b22"/>

      <text x="14" y="60"  textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,60)"  fontSize="9" fill="#484f58" letterSpacing="0.5">CLIENT</text>
      <text x="14" y="177" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,177)" fontSize="9" fill="#484f58" letterSpacing="0.5">SOURCE</text>
      <text x="14" y="308" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,308)" fontSize="9" fill="#484f58" letterSpacing="0.5">CI / CD</text>
      <text x="14" y="519" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,519)" fontSize="9" fill="#484f58" letterSpacing="0.5">RUNTIME</text>
      <text x="14" y="718" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,718)" fontSize="9" fill="#484f58" letterSpacing="0.5">DEPLOY</text>

      {/* ══════════════════════════════════════
          NODES  — all same style:
          fill #161b22, border #30363d, radius 6
          title #c9d1d9, subtitle #6e7681
      ══════════════════════════════════════ */}

      {/* CLIENT */}
      <rect x="68"  y="28" width="152" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="144" y="50" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">User</text>
      <text x="144" y="68" textAnchor="middle" fontSize="10" fill="#6e7681">browser / mobile</text>

      <rect x="288" y="28" width="148" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="362" y="50" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">Dev</text>
      <text x="362" y="68" textAnchor="middle" fontSize="10" fill="#6e7681">local machine</text>

      {/* SOURCE — GitHub org dashed wrapper */}
      <rect x="46" y="122" width="882" height="108" rx="5" fill="none" stroke="#21262d" strokeWidth="1" strokeDasharray="5,4"/>
      <text x="60" y="139" fontSize="9" fill="#30363d" letterSpacing="0.4">GITHUB — GOTOKART ORG</text>

      <rect x="64"  y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="138" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">frontend</text>
      <text x="138" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">HTML / CSS / JS</text>

      <rect x="236" y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="310" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">backend</text>
      <text x="310" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">Spring Boot</text>

      <rect x="408" y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="482" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">infra</text>
      <text x="482" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">Docker / SSM</text>

      <rect x="580" y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="654" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">docs</text>
      <text x="654" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">Nextra / MDX</text>

      {/* CI/CD */}
      <rect x="64"  y="266" width="152" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="140" y="289" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">build &amp; test</text>
      <text x="140" y="307" textAnchor="middle" fontSize="10" fill="#6e7681">compile · unit test</text>

      <rect x="252" y="266" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="326" y="289" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">deploy job</text>
      <text x="326" y="307" textAnchor="middle" fontSize="10" fill="#6e7681">SSH to EC2</text>

      <rect x="440" y="266" width="172" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="526" y="289" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">SSM param store</text>
      <text x="526" y="307" textAnchor="middle" fontSize="10" fill="#6e7681">secrets injection</text>

      {/* RUNTIME — EC2 dashed wrapper */}
      <rect x="46" y="384" width="882" height="268" rx="5" fill="none" stroke="#21262d" strokeWidth="1" strokeDasharray="5,4"/>
      <text x="60" y="400" fontSize="9" fill="#30363d" letterSpacing="0.4">AWS EC2 · t3.small · 34.229.50.171</text>

      {/* Nginx — highlighted with blue border (it's the entry point) */}
      <rect x="72"  y="412" width="170" height="64" rx="6" fill="#161b22" stroke="#388bfd" strokeWidth="1.5"/>
      <text x="157" y="437" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">Nginx :80</text>
      <text x="157" y="456" textAnchor="middle" fontSize="10" fill="#6e7681">reverse proxy</text>

      <rect x="72"  y="522" width="188" height="64" rx="6" fill="#161b22" stroke="#388bfd" strokeWidth="1.5"/>
      <text x="166" y="547" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">Spring Boot :8080</text>
      <text x="166" y="566" textAnchor="middle" fontSize="10" fill="#6e7681">REST API · JWT · BCrypt</text>

      {/* MariaDB cylinder — same dark fill, green border only */}
      <rect x="470" y="528" width="192" height="52" fill="#161b22" stroke="none"/>
      <line x1="470" y1="528" x2="470" y2="580" stroke="#3a8c52" strokeWidth="1.5"/>
      <line x1="662" y1="528" x2="662" y2="580" stroke="#3a8c52" strokeWidth="1.5"/>
      <ellipse cx="566" cy="580" rx="96" ry="13" fill="#161b22" stroke="#3a8c52" strokeWidth="1.5"/>
      <ellipse cx="566" cy="528" rx="96" ry="13" fill="#1c2128" stroke="#3a8c52" strokeWidth="1.5"/>
      <text x="566" y="552" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">MariaDB :3306</text>
      <text x="566" y="570" textAnchor="middle" fontSize="10" fill="#6e7681">persistent store</text>

      {/* DEPLOY */}
      <rect x="68"  y="686" width="206" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="171" y="709" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">GitHub Pages</text>
      <text x="171" y="728" textAnchor="middle" fontSize="10" fill="#6e7681">gotokart.github.io/docs</text>

      {/* ══════════════════════════════════════
          EDGES — all #484f58 except blue data path
      ══════════════════════════════════════ */}

      {/* User → Nginx  (HTTP, curved — dim violet hint) */}
      <path d="M 220,56 C 1052,56 1052,444 242,444" stroke="#484f58" strokeWidth="1.5" fill="none" markerEnd="url(#mg)"/>
      <text x="1010" y="47" fontSize="9" fill="#484f58">HTTP :80</text>

      {/* Dev → GitHub org */}
      <path d="M 362,84 L 362,122" stroke="#484f58" strokeWidth="1.5" fill="none" markerEnd="url(#mg)"/>
      <text x="368" y="108" fontSize="9" fill="#484f58">git push</text>

      {/* frontend → build & test */}
      <path d="M 138,206 L 138,244 L 140,244 L 140,266" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <text x="38" y="237" fontSize="9" fill="#484f58">push → Actions</text>

      {/* backend → build & test */}
      <path d="M 310,206 C 310,237 140,241 140,266" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>

      {/* infra → SSM */}
      <path d="M 482,206 C 482,237 526,241 526,266" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <text x="490" y="237" fontSize="9" fill="#484f58">push → SSM</text>

      {/* build → deploy */}
      <path d="M 216,296 L 252,296" stroke="#484f58" strokeWidth="1.5" fill="none" markerEnd="url(#mg)"/>

      {/* deploy → Nginx */}
      <path d="M 326,326 L 326,370 L 157,370 L 157,412" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <text x="165" y="364" fontSize="9" fill="#484f58">compose up --build</text>

      {/* SSM → Spring Boot */}
      <path d="M 526,326 C 526,448 260,448 260,522" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="4,3" markerEnd="url(#mg)"/>
      <text x="534" y="418" fontSize="9" fill="#484f58">env secrets</text>

      {/* Nginx → Spring Boot  (blue — main data path) */}
      <path d="M 157,476 L 157,522" stroke="#388bfd" strokeWidth="1.8" fill="none" markerEnd="url(#mb)"/>
      <text x="164" y="504" fontSize="9" fill="#388bfd">proxy /api/*</text>

      {/* Spring Boot → MariaDB  (blue — main data path) */}
      <path d="M 260,554 L 470,554" stroke="#388bfd" strokeWidth="1.8" fill="none" markerEnd="url(#mb)"/>
      <text x="328" y="546" fontSize="9" fill="#388bfd">JPA / SQL</text>

      {/* docs → GitHub Pages */}
      <path d="M 654,206 C 654,560 171,560 171,686" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <text x="680" y="480" fontSize="9" fill="#484f58">push → Actions</text>

      {/* ── Legend ── */}
      <rect x="46" y="782" width="988" height="24" rx="4" fill="#161b22"/>
      <rect x="58"  y="789" width="10" height="10" rx="2" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="73"  y="799" fontSize="9" fill="#484f58">nodes (dark)</text>
      <rect x="148" y="789" width="10" height="10" rx="2" fill="#161b22" stroke="#388bfd" strokeWidth="1.5"/>
      <text x="163" y="799" fontSize="9" fill="#484f58">entry / data path</text>
      <rect x="272" y="789" width="10" height="10" rx="2" fill="#161b22" stroke="#3a8c52" strokeWidth="1.5"/>
      <text x="287" y="799" fontSize="9" fill="#484f58">database</text>
      <line x1="352" y1="794" x2="376" y2="794" stroke="#388bfd" strokeWidth="1.5"/>
      <text x="381" y="799" fontSize="9" fill="#484f58">HTTP / SQL</text>
      <line x1="452" y1="794" x2="476" y2="794" stroke="#484f58" strokeWidth="1.3" strokeDasharray="5,2"/>
      <text x="481" y="799" fontSize="9" fill="#484f58">CI/CD flow</text>
    </svg>
  )
}
