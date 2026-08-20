import { motion } from 'framer-motion'
import { Target, Eye, Lightbulb, Award, Globe, HeartHandshake, TrendingUp } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'Pioneering new technologies for the textile industry' },
  { icon: Award, title: 'Quality', desc: 'Exceeding international standards consistently' },
  { icon: HeartHandshake, title: 'Integrity', desc: 'Building trust through transparency' },
  { icon: Globe, title: 'Customer Success', desc: 'Empowering businesses with real results' },
  { icon: TrendingUp, title: 'Global Growth', desc: 'Serving clients across 30+ countries' },
]

const timeline = [
  { year: '2003', title: 'Founded', desc: 'IIT Pakistan established with a vision for industrial excellence' },
  { year: '2008', title: 'Expansion', desc: 'Expanded into sportswear manufacturing with SW Athletic' },
  { year: '2013', title: 'Global Reach', desc: 'Started exporting to international markets across 15+ countries' },
  { year: '2018', title: 'Leaf Pakistan', desc: 'Launched Leaf Pakistan for industrial printing machinery' },
  { year: '2023', title: 'Innovation Hub', desc: 'Established state-of-the-art R&D facility' },
  { year: '2026', title: 'Global Leader', desc: 'Serving 500+ clients across 30+ countries' },
]

export default function About() {
  return (
    <Section id="about">
      <SectionHeader tag="About IIT Pakistan" title="One Group." titleGradient="Many Solutions." description="IIT Pakistan is a diversified industrial conglomerate operating multiple specialized businesses under one umbrella. From custom sportswear to industrial printing machinery, we deliver complete textile manufacturing solutions worldwide." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', marginBottom: '6rem' }}>
        <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
          className="glass-card glow-hover" style={{ borderRadius: '24px', padding: 'clamp(24px, 4vw, 40px)' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(0,184,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <Target size={28} style={{ color: '#00B8FF' }} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'white', marginBottom: '16px' }}>Our Mission</h3>
          <p style={{ color: '#C8D3E3', lineHeight: 1.7 }}>To empower businesses worldwide with cutting-edge textile manufacturing solutions, innovative printing technologies, and premium custom sportswear — driving industrial growth and customer success.</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card glow-hover" style={{ borderRadius: '24px', padding: 'clamp(24px, 4vw, 40px)' }}>
          <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(0,184,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
            <Eye size={28} style={{ color: '#00B8FF' }} />
          </div>
          <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'white', marginBottom: '16px' }}>Our Vision</h3>
          <p style={{ color: '#C8D3E3', lineHeight: 1.7 }}>To be recognized as the world's most trusted industrial group in textile manufacturing solutions — bridging innovation, quality, and sustainability to shape the future of the global textile industry.</p>
        </motion.div>
      </div>

      <div style={{ marginBottom: '6rem' }}>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.875rem', color: 'white', textAlign: 'center', marginBottom: '48px' }}>Core Values</h3>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '24px' }}>
          {values.map((val, i) => (
            <motion.div key={val.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card" style={{ borderRadius: '16px', padding: '24px', textAlign: 'center', transition: 'all 0.3s' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,184,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <val.icon size={24} style={{ color: '#00B8FF' }} />
              </div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'white', fontSize: '14px', marginBottom: '8px' }}>{val.title}</h4>
              <p style={{ fontSize: '12px', color: '#C8D3E3', lineHeight: 1.5 }}>{val.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.875rem', color: 'white', textAlign: 'center', marginBottom: '48px' }}>Our Journey</h3>
        <div style={{ position: 'relative', maxWidth: '56rem', margin: '0 auto' }}>
          <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '1px', background: '#00B8FF' }} className="timeline-line" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
            {timeline.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '24px', flexDirection: i % 2 === 0 ? 'row' : 'row-reverse' }} className="timeline-item">
                <div style={{ flex: 1, textAlign: i % 2 === 0 ? 'right' : 'left' }} className="timeline-content">
                  <div className="glass-card" style={{ borderRadius: '16px', padding: '20px', display: 'inline-block', textAlign: 'left' }}>
                    <span style={{ color: '#00B8FF', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem' }}>{item.year}</span>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'white', marginTop: '4px' }}>{item.title}</h4>
                    <p style={{ fontSize: '14px', color: '#C8D3E3', marginTop: '4px' }}>{item.desc}</p>
                  </div>
                </div>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#00B8FF', boxShadow: '0 0 20px rgba(0,184,255,0.3)', flexShrink: 0, zIndex: 10 }} className="timeline-dot" />
                <div style={{ flex: 1 }} className="timeline-spacer" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-line { display: none !important; }
          .timeline-dot { display: none !important; }
          .timeline-spacer { display: none !important; }
          .timeline-item { flex-direction: column !important; }
          .timeline-content { text-align: left !important; }
        }
      `}</style>
    </Section>
  )
}
