export default function ArchitectureDiagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1100 850"
      width="100%"
      style={{ fontFamily: "'Segoe UI', Arial, sans-serif", borderRadius: 10 }}
    >
      <defs>
        <marker id="ap" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#9B8EFF"/></marker>
        <marker id="ar" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#F07450"/></marker>
        <marker id="ab" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#5FA8F5"/></marker>
        <marker id="ag" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#5AB870"/></marker>
        <marker id="as" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#9B9890"/></marker>
        <marker id="ao" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#E8A840"/></marker>
      </defs>

      {/* ── Background ── */}
      <rect width="1100" height="850" fill="#0d1117" rx="10"/>

      {/* ── Lane backgrounds ── */}
      <rect x="0" y="12"  width="1100" height="96"  rx="6" fill="#120d2e" stroke="#3d3080" strokeWidth="1"/>
      <rect x="0" y="110" width="1100" height="135" rx="6" fill="#071810" stroke="#145038" strokeWidth="1"/>
      <rect x="0" y="247" width="1100" height="124" rx="6" fill="#1a0c06" stroke="#6a2a10" strokeWidth="1"/>
      <rect x="0" y="373" width="1100" height="300" rx="6" fill="#060e1e" stroke="#0e3060" strokeWidth="1"/>
      <rect x="0" y="675" width="1100" height="100" rx="6" fill="#111110" stroke="#3a3930" strokeWidth="1"/>

      {/* ── Lane label strips ── */}
      <rect x="0" y="12"  width="36" height="96"  rx="5" fill="#2a1f60" stroke="#7F77DD" strokeWidth="1.5"/>
      <text x="18" y="60"  textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,60)"  fontSize="10" fontWeight="bold" fill="#c4beff">client</text>

      <rect x="0" y="110" width="36" height="135" rx="5" fill="#0a3025" stroke="#1D9E75" strokeWidth="1.5"/>
      <text x="18" y="177" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,177)" fontSize="10" fontWeight="bold" fill="#7de8c8">source (GitHub)</text>

      <rect x="0" y="247" width="36" height="124" rx="5" fill="#3d1508" stroke="#D85A30" strokeWidth="1.5"/>
      <text x="18" y="309" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,309)" fontSize="10" fontWeight="bold" fill="#f0997b">CI / CD</text>

      <rect x="0" y="373" width="36" height="300" rx="5" fill="#082040" stroke="#185FA5" strokeWidth="1.5"/>
      <text x="18" y="523" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,523)" fontSize="10" fontWeight="bold" fill="#b5d4f4">runtime (AWS EC2)</text>

      <rect x="0" y="675" width="36" height="100" rx="5" fill="#252520" stroke="#888780" strokeWidth="1.5"/>
      <text x="18" y="725" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,725)" fontSize="10" fontWeight="bold" fill="#c5c4be">deploy targets</text>

      {/* ── CLIENT nodes ── */}
      <rect x="78" y="28" width="155" height="58" rx="9" fill="#2a1f60" stroke="#7F77DD" strokeWidth="2"/>
      <text x="155" y="51" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#e0dcff">User</text>
      <text x="155" y="71" textAnchor="middle" fontSize="10" fill="#9B8EFF">browser / mobile</text>

      <rect x="305" y="28" width="150" height="58" rx="9" fill="#2a2921" stroke="#888780" strokeWidth="2"/>
      <text x="380" y="51" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#e0dfd8">Dev</text>
      <text x="380" y="71" textAnchor="middle" fontSize="10" fill="#9B9890">local machine</text>

      {/* ── SOURCE nodes ── */}
      <rect x="50" y="124" width="890" height="110" rx="7" fill="none" stroke="#1D9E75" strokeWidth="1.5" strokeDasharray="7,4"/>
      <text x="66" y="143" fontSize="10" fontWeight="bold" fill="#1D9E75">GitHub — gotokart org</text>

      <rect x="68"  y="148" width="150" height="62" rx="9" fill="#0a3025" stroke="#1D9E75" strokeWidth="2"/>
      <text x="143" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#a3f0d8">frontend</text>
      <text x="143" y="191" textAnchor="middle" fontSize="10" fill="#5dc9a5">HTML / CSS / JS</text>

      <rect x="245" y="148" width="150" height="62" rx="9" fill="#0a3025" stroke="#1D9E75" strokeWidth="2"/>
      <text x="320" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#a3f0d8">backend</text>
      <text x="320" y="191" textAnchor="middle" fontSize="10" fill="#5dc9a5">Spring Boot</text>

      <rect x="422" y="148" width="150" height="62" rx="9" fill="#2c1505" stroke="#D85A30" strokeWidth="2"/>
      <text x="497" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffc09e">infra</text>
      <text x="497" y="191" textAnchor="middle" fontSize="10" fill="#e8835a">Docker / SSM</text>

      <rect x="599" y="148" width="150" height="62" rx="9" fill="#1e1e1c" stroke="#6b6a64" strokeWidth="2"/>
      <text x="674" y="171" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#d4d3cc">docs</text>
      <text x="674" y="191" textAnchor="middle" fontSize="10" fill="#9B9890">Nextra / MDX</text>

      {/* ── CI/CD nodes ── */}
      <rect x="68"  y="271" width="160" height="62" rx="9" fill="#3d1508" stroke="#D85A30" strokeWidth="2"/>
      <text x="148" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffb49a">build &amp; test</text>
      <text x="148" y="314" textAnchor="middle" fontSize="10" fill="#e8835a">compile · unit test</text>

      <rect x="265" y="271" width="150" height="62" rx="9" fill="#3d1508" stroke="#D85A30" strokeWidth="2"/>
      <text x="340" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffb49a">deploy job</text>
      <text x="340" y="314" textAnchor="middle" fontSize="10" fill="#e8835a">SSH to EC2</text>

      <rect x="462" y="271" width="178" height="62" rx="9" fill="#2a1808" stroke="#E8A840" strokeWidth="2"/>
      <text x="551" y="295" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#ffd890">SSM param store</text>
      <text x="551" y="314" textAnchor="middle" fontSize="10" fill="#E8A840">secrets injection</text>

      {/* ── RUNTIME nodes ── */}
      {/* EC2 container */}
      <rect x="50" y="388" width="910" height="272" rx="7" fill="none" stroke="#1A5FA5" strokeWidth="1.5" strokeDasharray="7,4"/>
      <text x="66" y="407" fontSize="10" fontWeight="bold" fill="#5B9EDE">AWS EC2 · m7i-flex.large · 34.227.190.40</text>

      <rect x="78" y="420" width="175" height="68" rx="9" fill="#0c2d4a" stroke="#3B8FE8" strokeWidth="2"/>
      <text x="165" y="447" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c8e4ff">Nginx :80</text>
      <text x="165" y="466" textAnchor="middle" fontSize="10" fill="#7ab8f5">reverse proxy</text>

      <rect x="78" y="535" width="195" height="68" rx="9" fill="#0c2d4a" stroke="#3B8FE8" strokeWidth="2"/>
      <text x="175" y="562" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#c8e4ff">Spring Boot :8080</text>
      <text x="175" y="581" textAnchor="middle" fontSize="10" fill="#7ab8f5">REST API · JWT · BCrypt</text>

      {/* MariaDB cylinder */}
      <rect x="490" y="540" width="195" height="58" fill="#122906" stroke="none"/>
      <line x1="490" y1="540" x2="490" y2="598" stroke="#5AB870" strokeWidth="2"/>
      <line x1="685" y1="540" x2="685" y2="598" stroke="#5AB870" strokeWidth="2"/>
      <ellipse cx="587" cy="598" rx="97" ry="15" fill="#1c3d0c" stroke="#5AB870" strokeWidth="2"/>
      <ellipse cx="587" cy="540" rx="97" ry="15" fill="#2b5a14" stroke="#5AB870" strokeWidth="2"/>
      <text x="587" y="564" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#b8e890">MariaDB :3306</text>
      <text x="587" y="582" textAnchor="middle" fontSize="10" fill="#5AB870">persistent store</text>

      {/* ── DEPLOY nodes ── */}
      <rect x="78" y="694" width="210" height="58" rx="9" fill="#1e1e1c" stroke="#6b6a64" strokeWidth="2"/>
      <text x="183" y="718" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#d4d3cc">GitHub Pages</text>
      <text x="183" y="737" textAnchor="middle" fontSize="10" fill="#9B9890">gotokart.github.io/docs</text>

      {/* ══ EDGES ══ */}

      {/* User → Nginx  (HTTP :80 — purple curved) */}
      <path d="M 233,57 C 1070,57 1070,454 253,454" stroke="#9B8EFF" strokeWidth="2" fill="none" markerEnd="url(#ap)"/>
      <text x="1030" y="48" fontSize="10" fontWeight="bold" fill="#9B8EFF">HTTP :80</text>

      {/* Dev → GitHub org  (git push — gray) */}
      <path d="M 380,86 L 380,124" stroke="#9B9890" strokeWidth="1.5" fill="none" markerEnd="url(#as)"/>
      <text x="387" y="110" fontSize="10" fill="#9B9890">git push</text>

      {/* frontend → build & test  (push → Actions — orange dashed) */}
      <path d="M 143,210 L 143,247 L 148,247 L 148,271" stroke="#F07450" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ar)"/>
      <text x="40" y="242" fontSize="9" fill="#F07450">push → Actions</text>

      {/* backend → build & test */}
      <path d="M 320,210 C 320,240 148,245 148,271" stroke="#F07450" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ar)"/>

      {/* infra → SSM param store  (amber dashed) */}
      <path d="M 497,210 C 497,242 551,246 551,271" stroke="#E8A840" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ao)"/>
      <text x="508" y="242" fontSize="9" fill="#E8A840">push → SSM</text>

      {/* build → deploy  (solid orange) */}
      <path d="M 228,302 L 265,302" stroke="#F07450" strokeWidth="2" fill="none" markerEnd="url(#ar)"/>

      {/* deploy → Nginx  (red dashed — docker compose up) */}
      <path d="M 340,333 L 340,373 L 165,373 L 165,420" stroke="#F07450" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ar)"/>
      <text x="172" y="368" fontSize="9" fill="#F07450">docker compose up --build</text>

      {/* SSM → Spring Boot  (amber dashed — env secrets) */}
      <path d="M 551,333 C 551,460 273,460 273,535" stroke="#E8A840" strokeWidth="1.5" fill="none" strokeDasharray="4,3" markerEnd="url(#ao)"/>
      <text x="558" y="430" fontSize="9" fill="#E8A840">env secrets</text>

      {/* Nginx → Spring Boot  (blue — proxy /api/*) */}
      <path d="M 165,488 L 165,535" stroke="#5FA8F5" strokeWidth="2" fill="none" markerEnd="url(#ab)"/>
      <text x="172" y="516" fontSize="10" fill="#5FA8F5">proxy /api/*</text>

      {/* Spring Boot → MariaDB  (green — JPA/SQL) */}
      <path d="M 273,569 L 490,569" stroke="#5AB870" strokeWidth="2" fill="none" markerEnd="url(#ag)"/>
      <text x="345" y="561" fontSize="10" fill="#5AB870">JPA / SQL</text>

      {/* docs → GitHub Pages  (gray dashed — push → Actions) */}
      <path d="M 674,210 C 674,570 183,570 183,694" stroke="#9B9890" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#as)"/>
      <text x="700" y="510" fontSize="9" fill="#9B9890">push → Actions</text>

      {/* ── Legend ── */}
      <rect x="50" y="790" width="1000" height="24" rx="5" fill="#161616"/>
      <text x="62" y="806" fontSize="10" fontWeight="bold" fill="#777">Legend:</text>
      <rect x="112" y="796" width="11" height="11" rx="2" fill="#2a1f60" stroke="#7F77DD" strokeWidth="1"/>
      <text x="128" y="806" fontSize="10" fill="#777">users/actors</text>
      <rect x="224" y="796" width="11" height="11" rx="2" fill="#0a3025" stroke="#1D9E75" strokeWidth="1"/>
      <text x="240" y="806" fontSize="10" fill="#777">source repos</text>
      <rect x="336" y="796" width="11" height="11" rx="2" fill="#3d1508" stroke="#D85A30" strokeWidth="1"/>
      <text x="352" y="806" fontSize="10" fill="#777">CI/CD</text>
      <rect x="392" y="796" width="11" height="11" rx="2" fill="#0c2d4a" stroke="#3B8FE8" strokeWidth="1"/>
      <text x="408" y="806" fontSize="10" fill="#777">runtime services</text>
      <rect x="520" y="796" width="11" height="11" rx="2" fill="#122906" stroke="#5AB870" strokeWidth="1"/>
      <text x="536" y="806" fontSize="10" fill="#777">database</text>
      <rect x="596" y="796" width="11" height="11" rx="2" fill="#2a1808" stroke="#E8A840" strokeWidth="1"/>
      <text x="612" y="806" fontSize="10" fill="#777">secrets store</text>
      <line x1="690" y1="801" x2="716" y2="801" stroke="#9B9890" strokeWidth="1.5" strokeDasharray="5,2"/>
      <text x="722" y="806" fontSize="10" fill="#777">CI/CD flow</text>
      <line x1="786" y1="801" x2="812" y2="801" stroke="#9B8EFF" strokeWidth="1.5"/>
      <text x="818" y="806" fontSize="10" fill="#777">HTTP / data</text>
    </svg>
  )
}
