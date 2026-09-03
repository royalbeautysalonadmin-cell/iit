import { motion } from 'framer-motion'

const timeline = [
  { year: '2013', title: 'Where it started', desc: 'IIT-Pak began by supplying printing inks and accessories, building its foundation through direct interaction with customers and their practical requirements.' },
  { year: '2017–18', title: 'Introducing Chinese printing technology', desc: 'While established brands dominated the market, IIT-Pak introduced the Grando machinery platform in Sialkot — helping customers explore Chinese printing technology when the market was still hesitant, and bringing accessible technology to the sportswear industry.' },
  { year: '2023', title: 'Expanding the machine portfolio', desc: 'IIT-Pak introduced LEAF Pakistan as another brand/platform for industrial printing machinery, expanding its capabilities and product range.' },
  { year: '2025–26', title: 'From local concern to industry platform', desc: 'Now developing into a platform for multiple sublimation, DTF, DTG and digital printing brands — from 2-head machines to 32-head industrial systems — giving international technology companies a way into the Pakistani market.' },
  { year: 'Next', title: 'Expanding further', desc: 'Growing into digital printing and additional international technology partnerships.', future: true },
]

export default function Journey() {
  return (
    <section id="journey" style={{ background: '#F2F6FA', padding: '100px 0' }}>
      <div className="container-main">
        <div style={{ maxWidth: '640px', marginBottom: '56px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6FB0', display: 'block', marginBottom: '14px' }}>
            // Our Journey
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: 1.15, color: '#0C2340', marginBottom: '14px' }}>
            From selling inks to building a platform.
          </h2>
          <p style={{ color: '#4A5C6E', fontSize: '16px', lineHeight: 1.6 }}>
            A local Pakistani concern growing into a national platform for international printing technology.
          </p>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <div className="journey-line" style={{ position: 'absolute', left: '130px', top: '10px', bottom: '10px', width: '2px', background: '#D8E2EC' }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '130px 1fr',
                  gap: '40px',
                  paddingBottom: i < timeline.length - 1 ? '52px' : '0',
                  position: 'relative',
                }}
                className="journey-item"
              >
                {/* Year */}
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: '15px', color: item.future ? '#C7D1DB' : '#1A6FB0', textAlign: 'right', paddingTop: '2px' }}>
                  {item.year}
                </div>

                {/* Dot on the line */}
                <div className="journey-dot" style={{
                  position: 'absolute',
                  left: '124px',
                  top: '6px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: item.future ? '#F2F6FA' : '#ffffff',
                  border: `3px solid ${item.future ? '#C7D1DB' : '#2D8FD1'}`,
                  zIndex: 2,
                }} />

                {/* Content */}
                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '18px', color: '#0C2340', marginBottom: '8px' }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: '14.5px', color: '#4A5C6E', lineHeight: 1.6, maxWidth: '640px' }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .journey-line { left: 20px !important; }
          .journey-item { grid-template-columns: 1fr !important; padding-left: 40px !important; }
          .journey-dot { left: 14px !important; }
          .journey-item > div:first-child { text-align: left !important; }
        }
      `}</style>
    </section>
  )
}
