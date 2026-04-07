export default function ArchitectureDiagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1100 680" width="100%" style={{ fontFamily: "'Segoe UI', Arial, sans-serif", background: '#fff', borderRadius: 10 }}>

      <defs>
        <marker id="ap" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#7E57C2"/></marker>
        <marker id="ar" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#C62828"/></marker>
        <marker id="ab" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#1565C0"/></marker>
        <marker id="ag" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#2E7D32"/></marker>
        <marker id="as" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#607D8B"/></marker>
        <marker id="ao" viewBox="0 0 8 6" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><path d="M0,0 L8,3 L0,6Z" fill="#E65100"/></marker>
      </defs>

      {/* Background */}
      <rect width="1100" height="680" fill="#f8f9fa" rx="10" stroke="#dee2e6" strokeWidth="1.5"/>

      {/* ── Lane backgrounds ── */}
      <rect x="0" y="15"  width="1100" height="100" rx="6" fill="#f5f0ff" stroke="#9370DB" strokeWidth="1.5"/>
      <rect x="0" y="117" width="1100" height="140" rx="6" fill="#e6f4ea" stroke="#34A853" strokeWidth="1.5"/>
      <rect x="0" y="259" width="1100" height="276" rx="6" fill="#e8f4fd" stroke="#1A73E8" strokeWidth="1.5"/>
      <rect x="0" y="537" width="1100" height="110" rx="6" fill="#fff8e1" stroke="#F9AB00" strokeWidth="1.5"/>

      {/* ── Lane label strips ── */}
      <rect x="0" y="15"  width="36" height="100" rx="6" fill="#EDE7F6" stroke="#9370DB" strokeWidth="1.5"/>
      <text x="18" y="65"  textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,65)"  fontSize="11" fontWeight="bold" fill="#4527A0">client</text>

      <rect x="0" y="117" width="36" height="140" rx="6" fill="#C8E6C9" stroke="#34A853" strokeWidth="1.5"/>
      <text x="18" y="187" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,187)" fontSize="11" fontWeight="bold" fill="#1B5E20">source (GitHub)</text>

      <rect x="0" y="259" width="36" height="276" rx="6" fill="#BBDEFB" stroke="#1A73E8" strokeWidth="1.5"/>
      <text x="18" y="397" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,397)" fontSize="11" fontWeight="bold" fill="#0D47A1">runtime (AWS EC2)</text>

      <rect x="0" y="537" width="36" height="110" rx="6" fill="#FFF9C4" stroke="#F9AB00" strokeWidth="1.5"/>
      <text x="18" y="592" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,18,592)" fontSize="11" fontWeight="bold" fill="#E65100">deploy targets</text>

      {/* ── CLIENT nodes ── */}
      <rect x="78"  y="32" width="155" height="58" rx="9" fill="#EDE7F6" stroke="#7E57C2" strokeWidth="2"/>
      <text x="155" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#4527A0">User</text>
      <text x="155" y="75" textAnchor="middle" fontSize="11" fill="#5E35B1">browser / mobile</text>

      <rect x="308" y="32" width="150" height="58" rx="9" fill="#EDE7F6" stroke="#7E57C2" strokeWidth="2"/>
      <text x="383" y="55" textAnchor="middle" fontSize="13" fontWeight="bold" fill="#4527A0">Dev</text>
      <text x="383" y="75" textAnchor="middle" fontSize="11" fill="#5E35B1">local machine</text>

      {/* ── SOURCE nodes ── */}
      <rect x="50" y="130" width="922" height="114" rx="7" fill="#F1F8E9" stroke="#558B2F" strokeWidth="1.5" strokeDasharray="7,3"/>
      <text x="66" y="150" fontSize="11" fontWeight="bold" fill="#558B2F">GitHub — gotokart org</text>

      <rect x="68"  y="153" width="155" height="62" rx="9" fill="#C8E6C9" stroke="#2E7D32" strokeWidth="2"/>
      <text x="145" y="176" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1B5E20">frontend</text>
      <text x="145" y="196" textAnchor="middle" fontSize="10" fill="#2E7D32">HTML / CSS / JS</text>

      <rect x="248" y="153" width="155" height="62" rx="9" fill="#C8E6C9" stroke="#2E7D32" strokeWidth="2"/>
      <text x="325" y="176" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1B5E20">backend</text>
      <text x="325" y="196" textAnchor="middle" fontSize="10" fill="#2E7D32">Spring Boot</text>

      <rect x="428" y="153" width="155" height="62" rx="9" fill="#FFF9C4" stroke="#F9A825" strokeWidth="2"/>
      <text x="505" y="176" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E65100">infra</text>
      <text x="505" y="196" textAnchor="middle" fontSize="10" fill="#F57F17">Docker / SSM</text>

      <rect x="608" y="153" width="155" height="62" rx="9" fill="#ECEFF1" stroke="#607D8B" strokeWidth="2"/>
      <text x="685" y="176" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#37474F">docs</text>
      <text x="685" y="196" textAnchor="middle" fontSize="10" fill="#607D8B">Nextra / MDX</text>

      {/* ── RUNTIME nodes ── */}
      <rect x="50"  y="274" width="308" height="130" rx="7" fill="#FFEBEE" stroke="#C62828" strokeWidth="1.5" strokeDasharray="7,3"/>
      <text x="66"  y="294" fontSize="11" fontWeight="bold" fill="#C62828">GitHub Actions (CI/CD)</text>

      <rect x="68"  y="302" width="122" height="50" rx="9" fill="#FFCDD2" stroke="#B71C1C" strokeWidth="2"/>
      <text x="129" y="323" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B71C1C">build &amp; test</text>
      <text x="129" y="340" textAnchor="middle" fontSize="10" fill="#C62828">compile / unit test</text>

      <rect x="218" y="302" width="118" height="50" rx="9" fill="#FFCDD2" stroke="#B71C1C" strokeWidth="2"/>
      <text x="277" y="327" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#B71C1C">deploy job</text>

      <rect x="396" y="267" width="652" height="252" rx="7" fill="#E3F2FD" stroke="#0D47A1" strokeWidth="1.5" strokeDasharray="7,3"/>
      <text x="414" y="287" fontSize="11" fontWeight="bold" fill="#0D47A1">AWS EC2 · m7i-flex.large · 34.227.190.40</text>

      <rect x="424" y="296" width="162" height="62" rx="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
      <text x="505" y="319" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0D47A1">Nginx :80</text>
      <text x="505" y="338" textAnchor="middle" fontSize="10" fill="#1565C0">reverse proxy</text>

      <rect x="424" y="398" width="178" height="62" rx="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
      <text x="513" y="421" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#0D47A1">Spring Boot :8080</text>
      <text x="513" y="441" textAnchor="middle" fontSize="10" fill="#1565C0">REST API · JWT · BCrypt</text>

      {/* MariaDB cylinder */}
      <rect x="762" y="410" width="162" height="52" fill="#C8E6C9" stroke="none"/>
      <line x1="762" y1="410" x2="762" y2="462" stroke="#2E7D32" strokeWidth="2"/>
      <line x1="924" y1="410" x2="924" y2="462" stroke="#2E7D32" strokeWidth="2"/>
      <ellipse cx="843" cy="462" rx="81" ry="13" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="2"/>
      <ellipse cx="843" cy="410" rx="81" ry="13" fill="#81C784" stroke="#2E7D32" strokeWidth="2"/>
      <text x="843" y="434" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#1B5E20">MariaDB :3306</text>
      <text x="843" y="452" textAnchor="middle" fontSize="10" fill="#2E7D32">persistent store</text>

      {/* ── DEPLOY nodes ── */}
      <rect x="78"  y="558" width="205" height="62" rx="9" fill="#FFF8E1" stroke="#F57F17" strokeWidth="2"/>
      <text x="180" y="581" textAnchor="middle" fontSize="12" fontWeight="bold" fill="#E65100">GitHub Pages</text>
      <text x="180" y="601" textAnchor="middle" fontSize="10" fill="#F57F17">gotokart.github.io/docs</text>

      {/* ── EDGES ── */}

      {/* Dev → GitHub org */}
      <path d="M 383,90 L 383,130" stroke="#607D8B" strokeWidth="1.5" fill="none" markerEnd="url(#as)"/>
      <text x="390" y="114" fontSize="10" fill="#607D8B">git push</text>

      {/* User → Nginx (HTTP, curved right) */}
      <path d="M 233,61 C 1065,61 1065,327 586,327" stroke="#7E57C2" strokeWidth="1.8" fill="none" markerEnd="url(#ap)"/>
      <text x="1020" y="52" fontSize="10" fontWeight="bold" fill="#7E57C2">HTTP :80</text>

      {/* frontend → GA */}
      <path d="M 145,215 L 145,259 L 129,259 L 129,274" stroke="#C62828" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ar)"/>
      <text x="50" y="250" fontSize="9" fill="#C62828">push → Actions</text>

      {/* backend → GA */}
      <path d="M 325,215 C 325,250 215,255 215,274" stroke="#C62828" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ar)"/>

      {/* infra → GA */}
      <path d="M 505,215 L 505,259 L 204,259 L 204,274" stroke="#E65100" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ao)"/>
      <text x="310" y="253" fontSize="9" fill="#E65100">push → SSM params</text>

      {/* build → deploy */}
      <path d="M 190,327 L 218,327" stroke="#B71C1C" strokeWidth="1.5" fill="none" markerEnd="url(#ar)"/>

      {/* GA deploy → Nginx */}
      <path d="M 336,327 L 424,327" stroke="#C62828" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#ar)"/>
      <text x="338" y="319" fontSize="9" fill="#C62828">docker compose up --build</text>

      {/* Nginx → Spring Boot */}
      <path d="M 505,358 L 505,398" stroke="#1565C0" strokeWidth="1.5" fill="none" markerEnd="url(#ab)"/>
      <text x="514" y="382" fontSize="10" fill="#1565C0">proxy /api/*</text>

      {/* Spring Boot → MariaDB */}
      <path d="M 602,429 L 762,429" stroke="#2E7D32" strokeWidth="1.5" fill="none" markerEnd="url(#ag)"/>
      <text x="658" y="422" fontSize="10" fill="#2E7D32">JPA / SQL</text>

      {/* docs → GitHub Pages */}
      <path d="M 685,215 C 685,500 183,500 183,558" stroke="#607D8B" strokeWidth="1.5" fill="none" strokeDasharray="5,3" markerEnd="url(#as)"/>
      <text x="700" y="470" fontSize="9" fill="#607D8B">push → Actions</text>

      {/* ── LEGEND ── */}
      <rect x="50" y="655" width="1000" height="22" rx="4" fill="#f1f3f5"/>
      <text x="60"  y="670" fontSize="10" fontWeight="bold" fill="#555">Legend:</text>
      <rect x="110" y="660" width="11" height="11" rx="2" fill="#EDE7F6" stroke="#7E57C2" strokeWidth="1"/>
      <text x="126" y="670" fontSize="10" fill="#555">users / actors</text>
      <rect x="218" y="660" width="11" height="11" rx="2" fill="#C8E6C9" stroke="#2E7D32" strokeWidth="1"/>
      <text x="234" y="670" fontSize="10" fill="#555">source repos</text>
      <rect x="322" y="660" width="11" height="11" rx="2" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1"/>
      <text x="338" y="670" fontSize="10" fill="#555">runtime services</text>
      <rect x="446" y="660" width="11" height="11" rx="2" fill="#FFCDD2" stroke="#B71C1C" strokeWidth="1"/>
      <text x="462" y="670" fontSize="10" fill="#555">CI/CD</text>
      <rect x="506" y="660" width="11" height="11" rx="2" fill="#C8E6C9" stroke="#2E7D32" strokeWidth="1"/>
      <text x="522" y="670" fontSize="10" fill="#555">database</text>
      <line x1="582" y1="665" x2="608" y2="665" stroke="#607D8B" strokeWidth="1.5" strokeDasharray="5,2"/>
      <text x="614" y="670" fontSize="10" fill="#555">CI/CD flow</text>
      <line x1="680" y1="665" x2="706" y2="665" stroke="#7E57C2" strokeWidth="1.5"/>
      <text x="712" y="670" fontSize="10" fill="#555">HTTP / data flow</text>

    </svg>
  )
}
