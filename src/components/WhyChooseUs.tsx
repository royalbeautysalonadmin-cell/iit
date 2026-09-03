import { motion } from 'framer-motion'
import { Cpu, MapPin, Wrench, HeadphonesIcon, Package, Users } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const reasons = [
  { icon: Cpu, title: 'Technology Selection', desc: 'Helping customers select the right technology according to production requirements and budget.' },
  { icon: MapPin, title: 'Nationwide Distribution', desc: 'One of Pakistan\'s larger distribution and support networks within the printing technology segment.' },
  { icon: Wrench, title: 'Engineering at Your Doorstep', desc: 'Technical and engineering support provided at the customer\'s doorstep, wherever possible.' },
  { icon: HeadphonesIcon, title: 'After-Sales Service', desc: 'One call. One support network. Technical assistance, troubleshooting, maintenance and operational support.' },
  { icon: Package, title: 'Spare Parts & Consumables', desc: 'Availability and supply of essential spare parts and a complete range of printing consumables.' },
  { icon: Users, title: 'Long-Term Partnership', desc: 'Our objective is not a one-time machine sale. It is a long-term relationship with the customer.' },
]

export default function WhyChooseUs() {
  return (
    <Section>
      <SectionHeader tag="Why IIT-Pak" title="Built on" titleAccent="Trust & Technology" description="Whatever your printing requirement, we help you find the right technology for your application, production volume and budget." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {reasons.map((reason, i) => (
          <motion.div key={reason.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -4 }}
            style={{ background: 'white', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#1E5BB5' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <reason.icon size={24} style={{ color: '#1E5BB5' }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#1A1A2E', marginBottom: '8px' }}>{reason.title}</h3>
            <p style={{ fontSize: '14px', color: '#5A6474', lineHeight: 1.6 }}>{reason.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
