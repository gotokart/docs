// Accent palette (one per lane, used for borders, strips, and arrows only)
// Client: violet · Source: emerald · CI/CD: orange · Runtime: blue · Deploy: gray

export default function ArchitectureDiagram() {
  // Shared node style — all nodes get the same dark fill; only border changes
  const node = (accent: string) => ({
    fill: '#161b22',
    stroke: accent,
    strokeWidth: 1.8,
    rx: 8,
  } as React.SVGProps<SVGRectElement>)

  const labelPrimary = '#e6edf3'
  const labelSecondary = '#8b949e'

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1100 840"
      width="100%"
      style={{ fontFamily: "'Segoe UI', Arial, sans-serif", borderRadius: 10 }}
    >
      <defs>
        <marker id="mv" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#7c6fe0"/></marker>
        <marker id="mo" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#e06b3a"/></marker>
        <marker id="mb" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#3676c4"/></marker>
        <marker id="mg" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#3a8c52"/></marker>
        <marker id="ms" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#4a4a46"/></marker>
        <marker id="ma" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#c48a1a"/></marker>
      </defs>

      {/* Background */}
      <rect width="1100" height="840" fill="#0d1117" rx="10"/>

      {/* ── Lane fills (very subtle) ── */}
      <rect x="0" y="12"  width="1100" height="96"  rx="6" fill="#0f0e18" stroke="#2a2460" strokeWidth="1"/>
      <rect x="0" y="110" width="1100" height="135" rx="6" fill="#0d1410" stroke="#143528" strokeWidth="1"/>
      <rect x="0" y="247" width="1100" height="124" rx="6" fill="#140d07" stroke="#3a2010" strokeWidth="1"/>
      <rect x="0" y="373" width="1100" height="300" rx="6" fill="#080e18" stroke="#102240" strokeWidth="1"/>
      <rect x="0" y="675" width="1100" height="100" rx="6" fill="#0f0f0e" stroke="#2a2a28" strokeWidth="1"/>

      {/* ── Lane label strips (30px) ── */}
      <rect x="0" y="12"  width="30" height="96"  rx="5" fill="#1a1630" stroke="#7c6fe0" strokeWidth="1.5"/>
      <text x="15" y="60"  textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,15,60)"  fontSize="10" fontWeight="bold" fill="#7c6fe0">client</text>

      <rect x="0" y="110" width="30" height="135" rx="5" fill="#0d2018" stroke="#2ea87e" strokeWidth="1.5"/>
      <text x="15" y="177" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,15,177)" fontSize="10" fontWeight="bold" fill="#2ea87e">source (GitHub)</text>

      <rect x="0" y="247" width="30" height="124" rx="5" fill="#1e1008" stroke="#e06b3a" strokeWidth="1.5"/>
      <text x="15" y="309" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,15,309)" fontSize="10" fontWeight="bold" fill="#e06b3a">CI / CD</text>

      <rect x="0" y="373" width="30" height="300" rx="5" fill="#081428" stroke="#3676c4" strokeWidth="1.5"/>
      <text x="15" y="523" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,15,523)" fontSize="10" fontWeight="bold" fill="#3676c4">runtime (AWS EC2)</text>

      <rect x="0" y="675" width="30" height="100" rx="5" fill="#161614" stroke="#4a4a46" strokeWidth="1.5"/>
      <text x="15" y="725" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,15,725)" fontSize="10" fontWeight="bold" fill="#4a4a46">deploy targets</text>

      {/* ── CLIENT nodes ── */}
      <rect x="72" y="28" {...node('#7c6fe0')} width="155" height="58"/>
      <text x="149" y="51" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>User</text>
      <text x="149" y="70" textAnchor="middle" fontSize="10" fill={labelSecondary}>browser / mobile</text>

      <rect x="298" y="28" {...node('#4a4a46')} width="150" height="58"/>
      <text x="373" y="51" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>Dev</text>
      <text x="373" y="70" textAnchor="middle" fontSize="10" fill={labelSecondary}>local machine</text>

      {/* ── SOURCE nodes ── */}
      <rect x="48" y="124" width="900" height="110" rx="6" fill="none" stroke="#1e5e44" strokeWidth="1" strokeDasharray="6,4"/>
      <text x="62" y="143" fontSize="10" fill="#2ea87e" fontWeight="bold">GitHub — gotokart org</text>

      <rect x="66"  y="148" {...node('#2ea87e')} width="150" height="62"/>
      <text x="141" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>frontend</text>
      <text x="141" y="190" textAnchor="middle" fontSize="10" fill={labelSecondary}>HTML / CSS / JS</text>

      <rect x="242" y="148" {...node('#2ea87e')} width="150" height="62"/>
      <text x="317" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>backend</text>
      <text x="317" y="190" textAnchor="middle" fontSize="10" fill={labelSecondary}>Spring Boot</text>

      <rect x="418" y="148" {...node('#e06b3a')} width="150" height="62"/>
      <text x="493" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>infra</text>
      <text x="493" y="190" textAnchor="middle" fontSize="10" fill={labelSecondary}>Docker / SSM</text>

      <rect x="594" y="148" {...node('#4a4a46')} width="150" height="62"/>
      <text x="669" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>docs</text>
      <text x="669" y="190" textAnchor="middle" fontSize="10" fill={labelSecondary}>Nextra / MDX</text>

      {/* ── CI/CD nodes ── */}
      <rect x="66"  y="271" {...node('#e06b3a')} width="158" height="62"/>
      <text x="145" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>build &amp; test</text>
      <text x="145" y="314" textAnchor="middle" fontSize="10" fill={labelSecondary}>compile · unit test</text>

      <rect x="262" y="271" {...node('#e06b3a')} width="150" height="62"/>
      <text x="337" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>deploy job</text>
      <text x="337" y="314" textAnchor="middle" fontSize="10" fill={labelSecondary}>SSH to EC2</text>

      <rect x="456" y="271" {...node('#c48a1a')} width="178" height="62"/>
      <text x="545" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>SSM param store</text>
      <text x="545" y="314" textAnchor="middle" fontSize="10" fill={labelSecondary}>secrets injection</text>

      {/* ── RUNTIME nodes ── */}
      <rect x="48" y="388" width="920" height="272" rx="6" fill="none" stroke="#1a3a6a" strokeWidth="1" strokeDasharray="6,4"/>
      <text x="62" y="406" fontSize="10" fill="#3676c4" fontWeight="bold">AWS EC2 · m7i-flex.large · 34.227.190.40</text>

      <rect x="75"  y="418" {...node('#3676c4')} width="175" height="68"/>
      <text x="162" y="445" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>Nginx :80</text>
      <text x="162" y="464" textAnchor="middle" fontSize="10" fill={labelSecondary}>reverse proxy</text>

      <rect x="75"  y="530" {...node('#3676c4')} width="195" height="68"/>
      <text x="172" y="557" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>Spring Boot :8080</text>
      <text x="172" y="576" textAnchor="middle" fontSize="10" fill={labelSecondary}>REST API · JWT · BCrypt</text>

      {/* MariaDB cylinder */}
      <rect x="488" y="536" width="194" height="56" fill="#161b22" stroke="none"/>
      <line x1="488" y1="536" x2="488" y2="592" stroke="#3a8c52" strokeWidth="1.8"/>
      <line x1="682" y1="536" x2="682" y2="592" stroke="#3a8c52" strokeWidth="1.8"/>
      <ellipse cx="585" cy="592" rx="97" ry="14" fill="#101e14" stroke="#3a8c52" strokeWidth="1.8"/>
      <ellipse cx="585" cy="536" rx="97" ry="14" fill="#162b1e" stroke="#3a8c52" strokeWidth="1.8"/>
      <text x="585" y="560" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>MariaDB :3306</text>
      <text x="585" y="578" textAnchor="middle" fontSize="10" fill={labelSecondary}>persistent store</text>

      {/* ── DEPLOY nodes ── */}
      <rect x="72" y="692" {...node('#4a4a46')} width="210" height="58"/>
      <text x="177" y="716" textAnchor="middle" fontSize="12" fontWeight="bold" fill={labelPrimary}>GitHub Pages</text>
      <text x="177" y="735" textAnchor="middle" fontSize="10" fill={labelSecondary}>gotokart.github.io/docs</text>

      {/* ══ EDGES ══ */}

      {/* User → Nginx  (HTTP :80) */}
      <path d="M 227,57 C 1068,57 1068,452 250,452" stroke="#7c6fe0" strokeWidth="1.8" fill="none" markerEnd="url(#mv)"/>
      <text x="1022" y="48" fontSize="10" fontWeight="bold" fill="#7c6fe0">HTTP :80</text>

      {/* Dev → GitHub org  (git push) */}
      <path d="M 373,86 L 373,124" stroke="#4a4a46" strokeWidth="1.5" fill="none" markerEnd="url(#ms)"/>
      <text x="380" y="110" fontSize="10" fill="#4a4a46">git push</text>

      {/* frontend → build & test */}
      <path d="M 141,210 L 141,247 L 145,247 L 145,271" stroke="#e06b3a" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#mo)"/>
      <text x="40" y="241" fontSize="9" fill="#e06b3a">push → Actions</text>

      {/* backend → build & test */}
      <path d="M 317,210 C 317,240 145,244 145,271" stroke="#e06b3a" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#mo)"/>

      {/* infra → SSM */}
      <path d="M 493,210 C 493,240 545,244 545,271" stroke="#c48a1a" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ma)"/>
      <text x="502" y="240" fontSize="9" fill="#c48a1a">push → SSM</text>

      {/* build → deploy */}
      <path d="M 224,302 L 262,302" stroke="#e06b3a" strokeWidth="1.8" fill="none" markerEnd="url(#mo)"/>

      {/* deploy → Nginx */}
      <path d="M 337,333 L 337,373 L 162,373 L 162,418" stroke="#e06b3a" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#mo)"/>
      <text x="168" y="367" fontSize="9" fill="#e06b3a">docker compose up --build</text>

      {/* SSM → Spring Boot */}
      <path d="M 545,333 C 545,455 270,455 270,530" stroke="#c48a1a" strokeWidth="1.5" fill="none" strokeDasharray="4,3" markerEnd="url(#ma)"/>
      <text x="553" y="425" fontSize="9" fill="#c48a1a">env secrets</text>

      {/* Nginx → Spring Boot */}
      <path d="M 162,486 L 162,530" stroke="#3676c4" strokeWidth="1.8" fill="none" markerEnd="url(#mb)"/>
      <text x="170" y="513" fontSize="10" fill="#3676c4">proxy /api/*</text>

      {/* Spring Boot → MariaDB */}
      <path d="M 270,564 L 488,564" stroke="#3a8c52" strokeWidth="1.8" fill="none" markerEnd="url(#mg)"/>
      <text x="342" y="556" fontSize="10" fill="#3a8c52">JPA / SQL</text>

      {/* docs → GitHub Pages */}
      <path d="M 669,210 C 669,565 177,565 177,692" stroke="#4a4a46" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ms)"/>
      <text x="695" y="500" fontSize="9" fill="#4a4a46">push → Actions</text>

      {/* ── Legend ── */}
      <rect x="48" y="788" width="1004" height="24" rx="5" fill="#111418"/>
      <text x="60" y="804" fontSize="10" fontWeight="bold" fill="#555">Legend:</text>
      <rect x="108" y="794" width="10" height="10" rx="2" fill="#161b22" stroke="#7c6fe0" strokeWidth="1.5"/>
      <text x="123" y="804" fontSize="10" fill="#555">actors</text>
      <rect x="172" y="794" width="10" height="10" rx="2" fill="#161b22" stroke="#2ea87e" strokeWidth="1.5"/>
      <text x="187" y="804" fontSize="10" fill="#555">source repos</text>
      <rect x="278" y="794" width="10" height="10" rx="2" fill="#161b22" stroke="#e06b3a" strokeWidth="1.5"/>
      <text x="293" y="804" fontSize="10" fill="#555">CI/CD</text>
      <rect x="334" y="794" width="10" height="10" rx="2" fill="#161b22" stroke="#3676c4" strokeWidth="1.5"/>
      <text x="349" y="804" fontSize="10" fill="#555">runtime</text>
      <rect x="402" y="794" width="10" height="10" rx="2" fill="#161b22" stroke="#3a8c52" strokeWidth="1.5"/>
      <text x="417" y="804" fontSize="10" fill="#555">database</text>
      <rect x="480" y="794" width="10" height="10" rx="2" fill="#161b22" stroke="#c48a1a" strokeWidth="1.5"/>
      <text x="495" y="804" fontSize="10" fill="#555">secrets</text>
      <line x1="548" y1="799" x2="572" y2="799" stroke="#555" strokeWidth="1.5" strokeDasharray="5,2"/>
      <text x="577" y="804" fontSize="10" fill="#555">CI/CD flow</text>
      <line x1="646" y1="799" x2="670" y2="799" stroke="#7c6fe0" strokeWidth="1.5"/>
      <text x="675" y="804" fontSize="10" fill="#555">HTTP / data</text>
    </svg>
  )
}
