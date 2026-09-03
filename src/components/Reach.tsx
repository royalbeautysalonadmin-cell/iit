import { motion } from 'framer-motion'

const cities = [
  { name: 'Peshawar', x: 250, y: 130 },
  { name: 'Quetta', x: 120, y: 330 },
  { name: 'Lahore', x: 290, y: 230 },
  { name: 'Gujranwala', x: 275, y: 200 },
  { name: 'Gujrat', x: 265, y: 185 },
  { name: 'Sialkot', x: 295, y: 195 },
  { name: 'Faisalabad', x: 260, y: 245 },
  { name: 'Multan', x: 230, y: 290 },
  { name: 'Karachi', x: 200, y: 420 },
]

const provinces = ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan']

export default function Reach() {
  return (
    <section id="reach" style={{ background: '#F2F6FA', padding: '100px 0' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
          {/* Left: text + stats */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6FB0', display: 'block', marginBottom: '14px' }}>
              // Nationwide Reach
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(26px, 3vw, 34px)', lineHeight: 1.15, color: '#0C2340', marginBottom: '14px' }}>
              Nationwide reach. Local support.
            </h2>
            <p style={{ color: '#4A5C6E', fontSize: '15.5px', lineHeight: 1.6, marginBottom: '30px' }}>
              One of Pakistan's larger distribution and support networks within its segment — reaching customers across all four provinces.
            </p>

            <div style={{ marginBottom: '26px' }}>
              <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '34px', fontWeight: 700, color: '#0C2340' }}>500<span style={{ color: '#2D8FD1' }}>+</span></div>
              <div style={{ fontSize: '14px', color: '#8A97A6' }}>Customers served across Pakistan</div>
            </div>

            <div>
              <div style={{ fontSize: '12px', color: '#8A97A6', marginBottom: '8px', fontFamily: "'JetBrains Mono', monospace", letterSpacing: '0.05em', textTransform: 'uppercase' }}>Provinces Covered</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {provinces.map((p) => (
                  <span key={p} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', background: '#E7EFF6', padding: '6px 12px', borderRadius: '4px', color: '#173A5E' }}>{p}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Pakistan map */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div style={{ background: 'white', borderRadius: '10px', padding: '24px', border: '1px solid #E2E8F0' }}>
              <svg viewBox="0 0 420 500" style={{ width: '100%', maxWidth: '420px', margin: '0 auto', display: 'block' }}>
                {/* Pakistan outline - recognizable shape */}
                <path
                  d="M240,30 L260,35 L275,55 L295,65 L310,55 L325,60 L335,80 L340,100 L335,120 L345,135 L340,155 L330,170 L340,185 L335,205 L320,215 L315,235 L305,250 L310,270 L300,285 L290,300 L285,320 L275,340 L265,360 L250,380 L240,400 L225,420 L210,440 L195,450 L175,455 L160,445 L145,430 L130,410 L115,385 L105,360 L95,335 L85,310 L80,285 L75,260 L70,240 L65,220 L60,200 L55,180 L60,160 L70,140 L85,120 L100,105 L120,90 L140,80 L155,70 L170,55 L190,45 L210,38 L230,32 Z"
                  fill="#DCE7F2"
                  stroke="#B9C8DA"
                  strokeWidth="2"
                />

                {/* City dots with labels */}
                {cities.map((city) => (
                  <g key={city.name}>
                    <circle cx={city.x} cy={city.y} r="5" fill="#2D8FD1" className="map-city" />
                    <text
                      x={city.x + 10}
                      y={city.y + 3}
                      className="map-city-label"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', fill: '#173A5E' }}
                    >
                      {city.name}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
