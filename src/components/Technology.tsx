import { motion } from 'framer-motion'
import { Layers, Printer, Sparkles, Scissors, Flame, Wrench, Package, Droplets, Zap, Clock } from 'lucide-react'

const techs = [
  { icon: Layers, title: 'Sublimation Printing', desc: 'Industrial and commercial sublimation solutions for sportswear, garments, fashion and textile applications.', image: '/images/Sublimation Printer (1.7 and 3 Metre).jpg' },
  { icon: Sparkles, title: 'DTF Printing', desc: 'Complete DTF solutions including printing technology, powder application and related consumables.' },
  { icon: Printer, title: 'DTG — Direct-to-Garment', desc: 'Solutions for direct garment printing, particularly for fashion brands, custom apparel and short-run production.' },
  { icon: Zap, title: 'Direct Printing', desc: 'Digital direct-printing solutions designed around different production requirements and applications.', image: '/images/Eco Solvent Printer.jpg' },
  { icon: Flame, title: 'Roller Heat Transfer', desc: 'Heat-transfer equipment for garment and textile production environments.' },
  { icon: Wrench, title: 'Accessories', desc: 'Essential accessories and supporting equipment required to operate and maintain printing systems.' },
  { icon: Package, title: 'Spare Parts', desc: 'Reliable spare parts availability to reduce downtime and keep production running.' },
  { icon: Droplets, title: 'Consumables', desc: 'A complete range of inks, DTF powders, printing materials and other application-specific supplies.' },
  { icon: Scissors, title: 'Laser Machines', desc: 'Laser technology for applications relevant to the garment, textile and printing ecosystem.', image: '/images/Digital Laser DIe Cutter.png' },
  { icon: Clock, title: 'Upcoming: Heat Transfer Vinyl', desc: 'Heat Transfer Vinyl is coming to the IIT-Pak portfolio, expanding our offering for garment customization.' },
]

export default function Technology() {
  return (
    <section id="technology" style={{ background: '#F2F6FA', padding: '100px 0' }}>
      <div className="container-main">
        <div style={{ maxWidth: '640px', marginBottom: '56px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6FB0', display: 'block', marginBottom: '14px' }}>
            // Our Technology Portfolio
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: 1.15, color: '#0C2340', marginBottom: '14px' }}>
            Every printing requirement, one platform.
          </h2>
          <p style={{ color: '#4A5C6E', fontSize: '16px', lineHeight: 1.6 }}>
            We don't sell a single machine — we help you choose from a full portfolio of technologies, matched to your production volume, application and budget.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: '#D8E2EC', border: '1px solid #D8E2EC', borderRadius: '6px', overflow: 'hidden' }} className="tech-grid">
          {techs.map((tech, i) => (
            <motion.div key={tech.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
              style={{ background: '#ffffff', transition: 'background 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#F2F6FA' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#ffffff' }}
            >
              {tech.image && (
                <div style={{ width: '100%', height: '180px', overflow: 'hidden' }}>
                  <img src={tech.image} alt={tech.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
              )}
              <div style={{ padding: '28px' }}>
                {!tech.image && (
                  <div style={{ width: '40px', height: '40px', marginBottom: '20px' }}>
                    <tech.icon size={40} style={{ color: '#2D8FD1' }} />
                  </div>
                )}
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '17px', color: '#0C2340', marginBottom: '8px' }}>{tech.title}</h3>
                <p style={{ fontSize: '14px', color: '#5A6B7C', lineHeight: 1.6 }}>{tech.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .tech-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .tech-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
