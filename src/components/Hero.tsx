import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(180deg, #ffffff 0%, #F2F6FA 100%)' }}>
      {/* Decorative lines */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9 }} viewBox="0 0 1180 520" preserveAspectRatio="none">
        <path d="M700 -20 L1220 500" stroke="#2D8FD1" strokeWidth="2" opacity="0.15"/>
        <path d="M760 -20 Q980 180 1220 420" stroke="#2D8FD1" strokeWidth="2" fill="none" opacity="0.18"/>
        <path d="M820 -20 Q1000 220 1220 480" stroke="#8A97A6" strokeWidth="2" fill="none" opacity="0.15"/>
        <path d="M880 -20 Q1040 260 1220 520" stroke="#8A97A6" strokeWidth="2" fill="none" opacity="0.12"/>
      </svg>

      <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
        <div className="container-main" style={{ paddingTop: 'clamp(100px, 18vw, 140px)', paddingBottom: 'clamp(60px, 12vw, 90px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} className="hero-grid">
            <div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '12.5px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1A6FB0', background: 'rgba(45,143,209,0.08)', border: '1px solid rgba(45,143,209,0.25)', padding: '6px 14px', borderRadius: '20px', marginBottom: '26px' }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2D8FD1', animation: 'pulse 2s infinite' }} />
                ONE PLATFORM · MULTIPLE TECHNOLOGIES
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
                style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(36px, 5.2vw, 60px)', lineHeight: 1.06, marginBottom: '22px', color: '#0C2340', maxWidth: '620px' }}
              >
                Innovative printing technology. <span style={{ color: '#2D8FD1' }}>Built for Pakistan.</span>
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
                style={{ fontSize: '18px', color: '#3E5064', maxWidth: '520px', marginBottom: '36px', lineHeight: 1.6 }}
              >
                From sublimation and DTF to DTG, direct printing and advanced digital printing — IIT-Pak provides machinery, consumables, spare parts and technical support tailored to Pakistan's garment, sportswear and textile industries.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
                style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', alignItems: 'center' }}
              >
                <a href="#technology" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', background: '#2D8FD1', color: 'white', fontWeight: 500, borderRadius: '3px', textDecoration: 'none', transition: 'all 0.2s', fontSize: '15px', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = '#1A6FB0'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = '#2D8FD1'; e.currentTarget.style.transform = 'none' }}
                >
                  Explore Our Solutions <ArrowRight size={16} />
                </a>
                <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 26px', background: 'transparent', color: '#0C2340', fontWeight: 500, borderRadius: '3px', textDecoration: 'none', transition: 'all 0.2s', fontSize: '15px', border: '1.5px solid #D8E2EC', fontFamily: "'Inter', sans-serif" }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#2D8FD1'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#D8E2EC'; e.currentTarget.style.transform = 'none' }}
                >
                  Talk to Our Experts
                </a>
                <a href="#principals" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#1A6FB0', fontWeight: 500, fontSize: '14.5px', padding: '14px 6px', textDecoration: 'none' }}
                  onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline' }}
                  onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none' }}
                >
                  Become a Principal / Partner →
                </a>
              </motion.div>
            </div>

            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-image-wrap"
            >
              <img src="/images/Sublimation Printer (1.7 and 3 Metre).jpg" alt="IIT-Pak Printing Technology" style={{ width: '100%', borderRadius: '6px', boxShadow: '0 20px 60px -20px rgba(12,35,64,0.3)' }} />
            </motion.div>
          </div>

          {/* Glance strip */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}
            style={{ marginTop: 'clamp(40px, 6vw, 64px)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid #D8E2EC', borderRadius: '6px', background: 'white', boxShadow: '0 20px 50px -25px rgba(12,35,64,0.25)' }}
            className="glance-strip"
          >
            {[
              { num: '500+', label: 'Customers served across Pakistan' },
              { num: '4', label: 'Provinces reached' },
              { num: '9+', label: 'Major cities supported' },
              { num: '2013', label: "Building Pakistan's printing sector since" },
            ].map((stat, i) => (
              <div key={stat.label} style={{ padding: '26px 24px', borderRight: i < 3 ? '1px solid #D8E2EC' : 'none' }} className="glance-stat">
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '30px', fontWeight: 700, color: '#0C2340' }}>{stat.num.includes('+') ? <>{stat.num.replace('+', '')}<span style={{ color: '#2D8FD1' }}>+</span></> : stat.num === '4' ? <span style={{ color: '#2D8FD1' }}>{stat.num}</span> : stat.num === '2013' ? <span style={{ color: '#2D8FD1' }}>{stat.num}</span> : stat.num}</div>
                <div style={{ fontSize: '13px', color: '#8A97A6', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-image-wrap { display: none; }
          .glance-strip { grid-template-columns: repeat(2, 1fr) !important; }
          .glance-stat:nth-child(2) { border-right: none !important; }
        }
      `}</style>
    </section>
  )
}
