import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

const stats = [
  { label: 'Years Experience', value: 20, suffix: '+' },
  { label: 'Clients Worldwide', value: 500, suffix: '+' },
  { label: 'Countries Served', value: 30, suffix: '+' },
  { label: 'Products Delivered', value: 10000, suffix: '+' },
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
    <section id="home" style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        <div style={{ position: 'absolute', inset: 0, background: '#08162E', zIndex: 10 }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.3 }}>
          <div style={{ position: 'absolute', top: '25%', left: '25%', width: '384px', height: '384px', background: 'rgba(0,184,255,0.1)', borderRadius: '50%', filter: 'blur(120px)', animation: 'float 6s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: '25%', right: '25%', width: '320px', height: '320px', background: 'rgba(11,61,145,0.2)', borderRadius: '50%', filter: 'blur(100px)', animation: 'float 6s ease-in-out infinite 3s' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 0v60M0 0h60' stroke='%2300B8FF' stroke-width='0.5'/%3E%3C/svg%3E")`, backgroundSize: '60px 60px' }} />
      </div>

      <div style={{ position: 'relative', zIndex: 20, width: '100%' }}>
        <div className="container-main" style={{ paddingTop: '128px', paddingBottom: '96px' }}>
          <div style={{ textAlign: 'center', maxWidth: '48rem', margin: '0 auto' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', borderRadius: '9999px', fontSize: '14px', color: '#00B8FF', marginBottom: '32px' }}
            >
              <span style={{ width: '8px', height: '8px', background: '#00B8FF', borderRadius: '50%', animation: 'glow-pulse 3s ease-in-out infinite' }} />
              Building the Future of Textile Manufacturing
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }}
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(3rem, 7vw, 5.5rem)', lineHeight: 1.0, letterSpacing: '-0.02em', marginBottom: '32px' }}
            >
              <span style={{ color: 'white' }}>Industrial Innovation</span>
              <br />
              <span className="text-gradient">& Technology</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.7 }}
              style={{ fontSize: '18px', color: '#C8D3E3', maxWidth: '40rem', margin: '0 auto 48px', lineHeight: 1.7 }}
            >
              IIT Pakistan is a leading industrial group delivering world-class textile machinery, custom sportswear manufacturing, sublimation solutions, and innovative printing technologies to businesses worldwide.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.9 }}
              style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}
            >
              <a href="#companies" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#00B8FF', color: 'white', fontWeight: 600, borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s' }}>
                Explore Companies <ArrowRight size={18} />
              </a>
              <a href="#contact" className="glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', color: 'white', fontWeight: 600, borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s' }}>
                <Play size={18} style={{ color: '#00B8FF' }} /> Contact Us
              </a>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 1.2 }}
            style={{ marginTop: '80px', maxWidth: '56rem', marginLeft: 'auto', marginRight: 'auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '20px' }}
          >
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card glow-hover" style={{ borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(1.5rem, 3vw, 2rem)' }} className="text-gradient">
                  <CountUp end={stat.value} suffix={stat.suffix} />
                </div>
                <div style={{ fontSize: '13px', color: '#C8D3E3', marginTop: '4px' }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
