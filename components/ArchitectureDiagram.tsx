export default function ArchitectureDiagram() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1180 880"
      width="100%"
      style={{ fontFamily: "'Segoe UI', Arial, sans-serif", borderRadius: 8 }}
    >
      <defs>
        {/* Dim-gray arrow for most edges */}
        <marker id="mg" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6Z" fill="#484f58"/>
        </marker>
        {/* Dim blue for the main data path */}
        <marker id="mb" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6Z" fill="#388bfd"/>
        </marker>
        {/* Amber for S3 image flow */}
        <marker id="ma" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6Z" fill="#d29922"/>
        </marker>
        {/* Green for TLS / cert flow */}
        <marker id="mc" viewBox="0 0 8 6" markerWidth="7" markerHeight="5" refX="7" refY="3" orient="auto">
          <path d="M0,0 L8,3 L0,6Z" fill="#3a8c52"/>
        </marker>
      </defs>

      {/* ── Canvas ── */}
      <rect width="1180" height="880" fill="#0d1117" rx="8"/>

      {/* ── Lane separators ── */}
      <line x1="0" y1="108" x2="1180" y2="108" stroke="#21262d" strokeWidth="1"/>
      <line x1="0" y1="244" x2="1180" y2="244" stroke="#21262d" strokeWidth="1"/>
      <line x1="0" y1="370" x2="1180" y2="370" stroke="#21262d" strokeWidth="1"/>
      <line x1="0" y1="676" x2="1180" y2="676" stroke="#21262d" strokeWidth="1"/>
      <line x1="0" y1="826" x2="1180" y2="826" stroke="#21262d" strokeWidth="1"/>

      {/* ── Lane labels ── */}
      <rect x="0" y="12"  width="28" height="96"  rx="4" fill="#161b22"/>
      <rect x="0" y="110" width="28" height="134" rx="4" fill="#161b22"/>
      <rect x="0" y="246" width="28" height="124" rx="4" fill="#161b22"/>
      <rect x="0" y="372" width="28" height="304" rx="4" fill="#161b22"/>
      <rect x="0" y="678" width="28" height="148" rx="4" fill="#161b22"/>

      <text x="14" y="60"  textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,60)"  fontSize="9" fill="#484f58" letterSpacing="0.5">CLIENT</text>
      <text x="14" y="177" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,177)" fontSize="9" fill="#484f58" letterSpacing="0.5">SOURCE</text>
      <text x="14" y="308" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,308)" fontSize="9" fill="#484f58" letterSpacing="0.5">CI / CD</text>
      <text x="14" y="524" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,524)" fontSize="9" fill="#484f58" letterSpacing="0.5">RUNTIME · AWS</text>
      <text x="14" y="752" textAnchor="middle" dominantBaseline="middle" transform="rotate(-90,14,752)" fontSize="9" fill="#484f58" letterSpacing="0.5">DEPLOY</text>

      {/* ══════════════════════════════════════
          NODES
      ══════════════════════════════════════ */}

      {/* CLIENT */}
      <rect x="68"  y="28" width="152" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="144" y="50" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">User</text>
      <text x="144" y="68" textAnchor="middle" fontSize="10" fill="#6e7681">browser / mobile</text>

      <rect x="288" y="28" width="148" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="362" y="50" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">Dev</text>
      <text x="362" y="68" textAnchor="middle" fontSize="10" fill="#6e7681">local machine</text>

      {/* DNS */}
      <rect x="492" y="28" width="172" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="578" y="50" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">DNS · gotokart.xyz</text>
      <text x="578" y="68" textAnchor="middle" fontSize="10" fill="#6e7681">A → 52.90.87.237</text>

      {/* SOURCE — GitHub org dashed wrapper */}
      <rect x="46" y="122" width="982" height="108" rx="5" fill="none" stroke="#21262d" strokeWidth="1" strokeDasharray="5,4"/>
      <text x="60" y="139" fontSize="9" fill="#30363d" letterSpacing="0.4">GITHUB — GOTOKART ORG</text>

      <rect x="64"  y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="138" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">frontend</text>
      <text x="138" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">HTML / CSS / JS</text>

      <rect x="236" y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="310" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">backend</text>
      <text x="310" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">Spring Boot · AWS SDK v2</text>

      <rect x="408" y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="482" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">infra</text>
      <text x="482" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">compose · nginx · TLS</text>

      <rect x="580" y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="654" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">docs</text>
      <text x="654" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">Nextra / MDX</text>

      <rect x="752" y="146" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="826" y="168" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">.github</text>
      <text x="826" y="186" textAnchor="middle" fontSize="10" fill="#6e7681">shared workflows</text>

      {/* CI/CD */}
      <rect x="64"  y="266" width="152" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="140" y="289" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">build &amp; test</text>
      <text x="140" y="307" textAnchor="middle" fontSize="10" fill="#6e7681">compile · unit test</text>

      <rect x="252" y="266" width="148" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="326" y="289" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">deploy job</text>
      <text x="326" y="307" textAnchor="middle" fontSize="10" fill="#6e7681">OIDC → SSM</text>

      <rect x="440" y="266" width="172" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="526" y="289" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">SSM param store</text>
      <text x="526" y="307" textAnchor="middle" fontSize="10" fill="#6e7681">secrets injection</text>

      <rect x="640" y="266" width="172" height="60" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="726" y="289" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">GitHub Actions · docs</text>
      <text x="726" y="307" textAnchor="middle" fontSize="10" fill="#6e7681">build static site</text>

      {/* RUNTIME — EC2 dashed wrapper */}
      <rect x="46" y="384" width="730" height="282" rx="5" fill="none" stroke="#21262d" strokeWidth="1" strokeDasharray="5,4"/>
      <text x="60" y="400" fontSize="9" fill="#30363d" letterSpacing="0.4">AWS EC2 · t3.small · 52.90.87.237 · IAM role: ec2-role-iam</text>

      {/* nginx — entry point, blue accent */}
      <rect x="72"  y="412" width="200" height="64" rx="6" fill="#161b22" stroke="#388bfd" strokeWidth="1.5"/>
      <text x="172" y="437" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">nginx :443 / :80</text>
      <text x="172" y="456" textAnchor="middle" fontSize="10" fill="#6e7681">TLS · proxy · static</text>

      {/* Spring Boot */}
      <rect x="72"  y="522" width="200" height="64" rx="6" fill="#161b22" stroke="#388bfd" strokeWidth="1.5"/>
      <text x="172" y="547" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">Spring Boot :8080</text>
      <text x="172" y="566" textAnchor="middle" fontSize="10" fill="#6e7681">REST · JWT · S3 presign</text>

      {/* MariaDB cylinder */}
      <rect x="468" y="528" width="192" height="52" fill="#161b22" stroke="none"/>
      <line x1="468" y1="528" x2="468" y2="580" stroke="#3a8c52" strokeWidth="1.5"/>
      <line x1="660" y1="528" x2="660" y2="580" stroke="#3a8c52" strokeWidth="1.5"/>
      <ellipse cx="564" cy="580" rx="96" ry="13" fill="#161b22" stroke="#3a8c52" strokeWidth="1.5"/>
      <ellipse cx="564" cy="528" rx="96" ry="13" fill="#1c2128" stroke="#3a8c52" strokeWidth="1.5"/>
      <text x="564" y="552" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">MariaDB :3306</text>
      <text x="564" y="570" textAnchor="middle" fontSize="10" fill="#6e7681">persistent store</text>

      {/* certbot */}
      <rect x="320" y="412" width="180" height="64" rx="6" fill="#161b22" stroke="#3a8c52" strokeWidth="1.5"/>
      <text x="410" y="437" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">certbot</text>
      <text x="410" y="456" textAnchor="middle" fontSize="10" fill="#6e7681">systemd timer · webroot</text>

      {/* Let's Encrypt (external) */}
      <rect x="540" y="412" width="216" height="64" rx="6" fill="#161b22" stroke="#3a8c52" strokeWidth="1.5"/>
      <text x="648" y="437" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">Let's Encrypt</text>
      <text x="648" y="456" textAnchor="middle" fontSize="10" fill="#6e7681">ACME · ECDSA cert</text>

      {/* AWS managed lane (right column) */}
      <rect x="800" y="384" width="350" height="282" rx="5" fill="none" stroke="#21262d" strokeWidth="1" strokeDasharray="5,4"/>
      <text x="814" y="400" fontSize="9" fill="#30363d" letterSpacing="0.4">AWS MANAGED · us-east-1</text>

      {/* IAM role */}
      <rect x="820" y="412" width="170" height="64" rx="6" fill="#161b22" stroke="#d29922" strokeWidth="1.5"/>
      <text x="905" y="437" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">IAM instance role</text>
      <text x="905" y="456" textAnchor="middle" fontSize="10" fill="#6e7681">ec2-role-iam → S3</text>

      {/* S3 bucket */}
      <rect x="820" y="522" width="310" height="120" rx="6" fill="#161b22" stroke="#d29922" strokeWidth="1.5"/>
      <text x="975" y="548" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">S3 — product images</text>
      <text x="975" y="566" textAnchor="middle" fontSize="10" fill="#6e7681">gotokart-product-images-…</text>
      <text x="975" y="582" textAnchor="middle" fontSize="10" fill="#6e7681">prefix: products/  ·  public read</text>
      <text x="975" y="606" textAnchor="middle" fontSize="10" fill="#6e7681">CORS: gotokart.xyz · localhost</text>
      <text x="975" y="622" textAnchor="middle" fontSize="10" fill="#6e7681">presigned PUT · 5-min TTL</text>

      {/* DEPLOY */}
      <rect x="68"  y="700" width="206" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="171" y="723" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">GitHub Pages</text>
      <text x="171" y="742" textAnchor="middle" fontSize="10" fill="#6e7681">gotokart docs site</text>

      <rect x="320" y="700" width="206" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="423" y="723" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">EC2 · gotokart.xyz</text>
      <text x="423" y="742" textAnchor="middle" fontSize="10" fill="#6e7681">prod runtime</text>

      <rect x="572" y="700" width="206" height="56" rx="6" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="675" y="723" textAnchor="middle" fontSize="12" fontWeight="600" fill="#c9d1d9">S3 · public read</text>
      <text x="675" y="742" textAnchor="middle" fontSize="10" fill="#6e7681">product imagery</text>

      {/* ══════════════════════════════════════
          EDGES
      ══════════════════════════════════════ */}

      {/* User → DNS (lookup) */}
      <path d="M 220,56 L 492,56" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="4,3" markerEnd="url(#mg)"/>
      <text x="320" y="48" fontSize="9" fill="#484f58">DNS lookup</text>

      {/* User → nginx (HTTPS, curved) */}
      <path d="M 220,72 C 1100,72 1100,444 272,444" stroke="#388bfd" strokeWidth="1.6" fill="none" markerEnd="url(#mb)"/>
      <text x="1090" y="62" fontSize="9" fill="#388bfd">HTTPS :443</text>

      {/* User → S3 (image PUT and GET) */}
      <path d="M 200,84 C 1140,108 1140,580 1130,580" stroke="#d29922" strokeWidth="1.5" fill="none" strokeDasharray="6,3" markerEnd="url(#ma)"/>
      <text x="1052" y="100" fontSize="9" fill="#d29922">presigned PUT / GET image</text>

      {/* Dev → GitHub org */}
      <path d="M 362,84 L 362,122" stroke="#484f58" strokeWidth="1.5" fill="none" markerEnd="url(#mg)"/>
      <text x="368" y="108" fontSize="9" fill="#484f58">git push</text>

      {/* repo → CI nodes (dashed) */}
      <path d="M 138,206 L 138,244 L 140,244 L 140,266" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <text x="38" y="237" fontSize="9" fill="#484f58">push → Actions</text>

      <path d="M 310,206 C 310,237 140,241 140,266" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <path d="M 482,206 C 482,237 526,241 526,266" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <text x="490" y="237" fontSize="9" fill="#484f58">push → SSM</text>
      <path d="M 654,206 C 654,237 726,241 726,266" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <text x="660" y="237" fontSize="9" fill="#484f58">push → Pages</text>

      {/* build → deploy */}
      <path d="M 216,296 L 252,296" stroke="#484f58" strokeWidth="1.5" fill="none" markerEnd="url(#mg)"/>

      {/* deploy → nginx (compose up) */}
      <path d="M 326,326 L 326,370 L 172,370 L 172,412" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>
      <text x="180" y="364" fontSize="9" fill="#484f58">compose up --build</text>

      {/* SSM → Spring Boot (env secrets) */}
      <path d="M 526,326 C 526,448 270,448 270,522" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="4,3" markerEnd="url(#mg)"/>
      <text x="534" y="418" fontSize="9" fill="#484f58">env / db secrets</text>

      {/* docs CI → Pages */}
      <path d="M 726,326 C 726,560 171,560 171,700" stroke="#484f58" strokeWidth="1.3" fill="none" strokeDasharray="5,3" markerEnd="url(#mg)"/>

      {/* nginx → Spring Boot (proxy) */}
      <path d="M 172,476 L 172,522" stroke="#388bfd" strokeWidth="1.8" fill="none" markerEnd="url(#mb)"/>
      <text x="178" y="504" fontSize="9" fill="#388bfd">proxy /api/*</text>

      {/* Spring Boot → MariaDB */}
      <path d="M 272,554 L 468,554" stroke="#388bfd" strokeWidth="1.8" fill="none" markerEnd="url(#mb)"/>
      <text x="328" y="546" fontSize="9" fill="#388bfd">JPA / SQL</text>

      {/* Spring Boot → IAM (assume role / get creds) */}
      <path d="M 272,540 C 540,540 540,440 820,440" stroke="#d29922" strokeWidth="1.4" fill="none" strokeDasharray="6,3" markerEnd="url(#ma)"/>
      <text x="540" y="430" fontSize="9" fill="#d29922">creds via instance metadata</text>

      {/* IAM → S3 (allows presign + delete) */}
      <path d="M 905,476 L 905,522" stroke="#d29922" strokeWidth="1.4" fill="none" strokeDasharray="6,3" markerEnd="url(#ma)"/>
      <text x="912" y="504" fontSize="9" fill="#d29922">PutObject / DeleteObject</text>

      {/* certbot → Let's Encrypt */}
      <path d="M 500,444 L 540,444" stroke="#3a8c52" strokeWidth="1.5" fill="none" markerEnd="url(#mc)"/>
      <text x="496" y="436" fontSize="9" fill="#3a8c52">ACME</text>

      {/* certbot → nginx (drop cert + reload) */}
      <path d="M 410,476 C 410,500 272,500 272,476" stroke="#3a8c52" strokeWidth="1.4" fill="none" strokeDasharray="5,3" markerEnd="url(#mc)"/>
      <text x="278" y="498" fontSize="9" fill="#3a8c52">install cert · nginx -s reload</text>

      {/* nginx port-80 → certbot webroot (ACME challenge) */}
      <path d="M 272,460 L 320,460" stroke="#3a8c52" strokeWidth="1.3" fill="none" strokeDasharray="4,3" markerEnd="url(#mc)"/>
      <text x="276" y="453" fontSize="9" fill="#3a8c52">/.well-known</text>

      {/* ── Legend ── */}
      <rect x="46" y="842" width="1088" height="26" rx="4" fill="#161b22"/>
      <rect x="58"  y="850" width="10" height="10" rx="2" fill="#161b22" stroke="#30363d" strokeWidth="1.5"/>
      <text x="73"  y="860" fontSize="9" fill="#484f58">node</text>
      <rect x="118" y="850" width="10" height="10" rx="2" fill="#161b22" stroke="#388bfd" strokeWidth="1.5"/>
      <text x="133" y="860" fontSize="9" fill="#484f58">entry / data path</text>
      <rect x="244" y="850" width="10" height="10" rx="2" fill="#161b22" stroke="#3a8c52" strokeWidth="1.5"/>
      <text x="259" y="860" fontSize="9" fill="#484f58">database / TLS</text>
      <rect x="356" y="850" width="10" height="10" rx="2" fill="#161b22" stroke="#d29922" strokeWidth="1.5"/>
      <text x="371" y="860" fontSize="9" fill="#484f58">AWS managed (S3 / IAM)</text>
      <line x1="510" y1="855" x2="534" y2="855" stroke="#388bfd" strokeWidth="1.5"/>
      <text x="540" y="860" fontSize="9" fill="#484f58">HTTP / SQL</text>
      <line x1="612" y1="855" x2="636" y2="855" stroke="#d29922" strokeWidth="1.5" strokeDasharray="6,3"/>
      <text x="642" y="860" fontSize="9" fill="#484f58">S3 image flow</text>
      <line x1="734" y1="855" x2="758" y2="855" stroke="#3a8c52" strokeWidth="1.5" strokeDasharray="5,3"/>
      <text x="764" y="860" fontSize="9" fill="#484f58">cert renewal</text>
      <line x1="850" y1="855" x2="874" y2="855" stroke="#484f58" strokeWidth="1.3" strokeDasharray="5,2"/>
      <text x="880" y="860" fontSize="9" fill="#484f58">CI / CD</text>
    </svg>
  )
}
