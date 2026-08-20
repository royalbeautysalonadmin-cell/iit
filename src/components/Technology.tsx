import { motion } from 'framer-motion'
import { Layers, Printer, Sparkles, Sun, Scissors, Flame, Crosshair, Bot } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const techs = [
  { icon: Layers, title: 'Sublimation Printing', desc: 'Vibrant, permanent prints infused directly into fabric fibers.' },
  { icon: Printer, title: 'Digital Printing', desc: 'High-resolution inkjet technology for direct-to-fabric printing.' },
  { icon: Sparkles, title: 'DTF Printing', desc: 'Direct-to-Film technology for any fabric type.' },
  { icon: Sun, title: 'UV Printing', desc: 'Ultra-violet cured printing for vivid colors.' },
  { icon: Scissors, title: 'Laser Cutting', desc: 'Precision CNC laser systems for fabric cutting.' },
  { icon: Flame, title: 'Heat Transfer', desc: 'Professional heat press systems for garments.' },
  { icon: Crosshair, title: 'Embroidery', desc: 'Computerized multi-head embroidery machines.' },
  { icon: Bot, title: 'Automation', desc: 'Integrated Industry 4.0 solutions.' },
]

export default function Technology() {
  return (
    <Section id="technology">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'rgba(0,184,255,0.3)' }} />
      <SectionHeader tag="Technology" title="Advanced" titleGradient="Technologies" description="We leverage the latest innovations to deliver superior textile manufacturing solutions." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '24px' }}>
        {techs.map((tech, i) => (
          <motion.div key={tech.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -6 }}>
            <div className="glass-card" style={{ borderRadius: '16px', padding: '28px', height: '100%', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: '#00B8FF' }} />
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#00B8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <tech.icon size={24} style={{ color: 'white' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '8px' }}>{tech.title}</h3>
              <p style={{ fontSize: '14px', color: '#C8D3E3', lineHeight: 1.6 }}>{tech.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
