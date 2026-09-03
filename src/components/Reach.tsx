import { motion } from 'framer-motion'

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
              <img src="/images/pakistan-map.svg" alt="Pakistan Map" style={{ width: '100%', maxWidth: '420px', margin: '0 auto', display: 'block' }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
