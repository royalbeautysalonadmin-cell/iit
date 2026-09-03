import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Phone } from 'lucide-react'

const stats = [
  { label: 'Customers Served', value: 500, suffix: '+' },
  { label: 'Provinces Covered', value: 4, suffix: '' },
  { label: 'Major Cities', value: 9, suffix: '+' },
  { label: 'Technology Platforms', value: 6, suffix: '+' },
]

function CountUp({ end, suffix }: { end: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true) }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [started])
  useEffect(() => {
    if (!started) return
    let t: number
    const anim = (now: number) => { if (!t) t = now; const p = Math.min((now - t) / 2000, 1); setCount(Math.floor((1 - Math.pow(1 - p, 3)) * end)); if (p < 1) requestAnimationFrame(anim) }
    requestAnimationFrame(anim)
  }, [started, end])
  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>
}

export default function Hero() {
  return (
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: 'linear-gradient(135deg, #F8FAFF 0%, #FFFFFF 50%, #F0F4FF 100%)' }}>
      <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', background: 'rgba(30,91,181,0.04)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-150px', left: '-150px', width: '500px', height: '500px', background: 'rgba(30,91,181,0.03)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 10, width: '100%' }}>
        <div className="container-main" style={{ paddingTop: 'clamp(100px, 18vw, 160px)', paddingBottom: 'clamp(60px, 12vw, 100px)' }}>
          <div style={{ maxWidth: '48rem' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: 500, color: '#1E5BB5', background: '#E8F0FE', marginBottom: '24px' }}
            >
              <span style={{ width: '6px', height: '6px', background: '#1E5BB5', borderRadius: '50%' }} />
              Printing Technology Platform for Pakistan
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', lineHeight: 1.05, letterSpacing: '-0.02em', marginBottom: '24px', color: '#1A1A2E' }}
            >
              Innovative Printing Technology.
              <br />
              <span style={{ color: '#1E5BB5' }}>Built for Pakistan.</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: '#5A6474', maxWidth: '40rem', marginBottom: '40px', lineHeight: 1.7 }}
            >
              From sublimation and DTF to DTG, direct printing and advanced digital printing technologies, IIT-Pak provides machinery, consumables, spare parts and technical support tailored to the requirements of Pakistan's growing printing, garment and textile industries.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}
            >
              <a href="#solutions" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#1E5BB5', color: 'white', fontWeight: 600, borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s', fontSize: '15px' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#14427A' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = '#1E5BB5' }}
              >
                Explore Our Solutions <ArrowRight size={18} />
              </a>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: 'white', color: '#1E5BB5', fontWeight: 600, borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s', fontSize: '15px', border: '1px solid #E2E8F0' }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1E5BB5' }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0' }}
              >
                <Phone size={18} /> Talk to Our Experts
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.0 }}
            style={{ marginTop: 'clamp(48px, 8vw, 80px)', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', maxWidth: '56rem' }}
            className="hero-stats-grid"
          >
            {stats.map((stat) => (
              <div key={stat.label} style={{ borderRadius: '16px', padding: '24px', textAlign: 'center', background: 'white', border: '1px solid #E2E8F0', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#1E5BB5' }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
              >
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: '#1E5BB5' }}>
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: '13px', color: '#5A6474', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .hero-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
