import { motion } from 'framer-motion'
import { Globe2, Cpu, Users, HeadphonesIcon, BadgeDollarSign, Truck, ShieldCheck, Settings, Ship } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const reasons = [
  { icon: Globe2, title: 'International Standards', desc: 'Products meeting global quality benchmarks' },
  { icon: Cpu, title: 'Latest Technology', desc: 'Cutting-edge machinery and printing solutions' },
  { icon: Users, title: 'Experienced Team', desc: 'Industry experts with decades of experience' },
  { icon: HeadphonesIcon, title: 'Reliable Support', desc: 'Dedicated after-sales service' },
  { icon: BadgeDollarSign, title: 'Competitive Pricing', desc: 'Premium quality at best market prices' },
  { icon: Truck, title: 'Fast Delivery', desc: 'Efficient logistics on time, every time' },
  { icon: ShieldCheck, title: 'Quality Assurance', desc: 'Rigorous testing at every stage' },
  { icon: Settings, title: 'Customization', desc: 'Tailored solutions for your requirements' },
  { icon: Ship, title: 'Global Shipping', desc: 'Exporting to 30+ countries across 6 continents' },
]

export default function WhyChooseUs() {
  return (
    <Section>
      <SectionHeader tag="Why Choose Us" title="Built on" titleGradient="Excellence" description="A decade of trust, innovation, and commitment to delivering the best in textile manufacturing." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {reasons.map((reason, i) => (
          <motion.div key={reason.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -4 }}
            className="glass-card" style={{ borderRadius: '16px', padding: '28px', transition: 'all 0.3s' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,184,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <reason.icon size={24} style={{ color: '#00B8FF' }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '8px' }}>{reason.title}</h3>
            <p style={{ fontSize: '14px', color: '#C8D3E3' }}>{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
