import { motion } from 'framer-motion'
import { Phone, Wrench, Package, Droplets, Cpu, Users } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const points = [
  { icon: Phone, title: 'One-Call After-Sales Support', desc: 'Your machine is not the end of our service — it is the beginning.' },
  { icon: Wrench, title: 'Engineering at Your Doorstep', desc: 'Technical assistance where you need it.' },
  { icon: Package, title: 'Genuine Spare Parts', desc: 'Helping reduce production downtime.' },
  { icon: Droplets, title: 'Reliable Consumables', desc: 'Inks, powders and other essential printing supplies.' },
  { icon: Cpu, title: 'Technology Selection', desc: 'Helping customers select the right technology according to production requirements and budget.' },
  { icon: Users, title: 'Long-Term Partnership', desc: 'Our objective is not a one-time machine sale. It is a long-term relationship with the customer.' },
]

export default function Excellence() {
  return (
    <Section style={{ background: '#1E5BB5' }}>
      <SectionHeader tag="Excellence Beyond the Machine" title="Excellence" titleAccent="Beyond the Machine" description="Every step of the customer's journey is customer service." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {points.map((point, i) => (
          <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
            style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '16px', padding: '28px', border: '1px solid rgba(255,255,255,0.15)', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <point.icon size={24} style={{ color: 'white' }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '8px' }}>{point.title}</h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{point.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
