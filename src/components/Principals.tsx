import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const partners = [
  { name: 'Grando', type: 'Sublimation & Digital Printing', image: '/images/Sublimation Printer (1.7 and 3 Metre).jpg' },
  { name: 'LEAF Pakistan', type: 'Industrial Printing Machinery', image: '/images/Eco Solvent Printer.jpg' },
  { name: 'GBOS', type: 'Laser Cutting Systems', image: '/images/Dual Head Asynchronous High Efficiency Laser Cutter.png' },
  { name: 'Visionscan', type: 'Smart Inspection Technology', image: '/images/UV roll to roll printer.jpg' },
]

export default function Principals() {
  return (
    <section id="principals" style={{ background: '#0C2340', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Decorative radial */}
      <div style={{ position: 'absolute', right: '-80px', top: '-80px', width: '360px', height: '360px', background: 'radial-gradient(circle, rgba(45,143,209,0.35), transparent 70%)', pointerEvents: 'none' }} />

      <div className="container-main" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '56px', alignItems: 'center' }} className="principals-grid">
          <div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7FC1EA', display: 'block', marginBottom: '14px' }}>
              // International Technology. Local Reach.
            </span>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(26px, 3vw, 34px)', lineHeight: 1.15, color: '#ffffff', marginBottom: '18px' }}>
              A platform for global printing brands to enter Pakistan.
            </h2>
            <p style={{ color: '#B9C8DA', fontSize: '15.5px', lineHeight: 1.7, marginBottom: '28px', maxWidth: '460px' }}>
              IIT-Pak works as a platform for innovative international printing technology — connecting global manufacturers and principals with customers across Pakistan. We provide the local infrastructure, market knowledge, technical support and distribution capability required to build a strong presence here.
            </p>
            <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', background: '#2D8FD1', color: 'white', fontWeight: 500, borderRadius: '3px', textDecoration: 'none', transition: 'all 0.2s', fontSize: '15px', fontFamily: "'Inter', sans-serif" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1A6FB0'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#2D8FD1'; e.currentTarget.style.transform = 'none' }}
            >
              Partner With IIT-Pak <ArrowRight size={16} />
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {partners.map((partner, i) => (
              <motion.div key={partner.name} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '16px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.15)', padding: '12px 16px', borderRadius: '4px', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)' }}
              >
                <div style={{ width: '56px', height: '56px', borderRadius: '4px', overflow: 'hidden', flexShrink: 0, background: 'rgba(255,255,255,0.1)' }}>
                  <img src={partner.image} alt={partner.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div>
                  <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '15px', color: '#ffffff' }}>{partner.name}</p>
                  <p style={{ fontSize: '12px', color: '#8A97A6', marginTop: '2px' }}>{partner.type}</p>
                </div>
              </motion.div>
            ))}
            <div style={{ textAlign: 'center', background: '#2D8FD1', borderRadius: '4px', padding: '14px', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '14px', letterSpacing: '0.02em', color: 'white' }}>
              IIT-PAK PLATFORM → PAKISTANI MARKET
            </div>
          </div>
        </div>

        <div style={{ marginTop: '48px', textAlign: 'center', padding: '28px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '6px' }}>
          <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '17px', color: 'white', marginBottom: '6px' }}>Looking to Enter the Pakistani Market?</p>
          <p style={{ fontSize: '14px', color: '#B9C8DA' }}>Partner with IIT-Pak and reach customers across all four provinces.</p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .principals-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
