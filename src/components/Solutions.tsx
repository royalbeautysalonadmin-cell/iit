import { motion } from 'framer-motion'
import { HeadphonesIcon, Wrench, Package, Droplets, Settings, HeartHandshake } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const services = [
  { icon: HeadphonesIcon, title: 'After-Sales Service', desc: 'One call. One support network. Customers should be able to contact IIT-Pak for technical assistance, troubleshooting, maintenance and operational support.' },
  { icon: Wrench, title: 'Engineering Services', desc: 'Technical and engineering support provided at the customer\'s doorstep, wherever possible.' },
  { icon: Package, title: 'Spare Parts', desc: 'Availability and supply of essential spare parts to minimize downtime and keep production running.' },
  { icon: Droplets, title: 'Consumables', desc: 'Continuous supply of required consumables such as inks, powders and other printing materials.' },
  { icon: Settings, title: 'Technical Support', desc: 'Assistance with machine operation, troubleshooting, optimization and printing requirements.' },
  { icon: HeartHandshake, title: 'Customer Service', desc: 'Every step of the customer\'s journey is customer service. From selecting the right technology to installation, operation, troubleshooting, spare parts and consumables.' },
]

export default function Solutions() {
  return (
    <Section id="solutions" style={{ background: '#FFFFFF' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="Our Solutions" title="Complete Support" titleAccent="Beyond the Machine" description="Our relationship with a customer does not end when a machine is installed. The customer should know that IIT-Pak remains involved." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {services.map((service, i) => (
          <motion.div key={service.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -4 }}
            style={{ background: '#F5F7FA', borderRadius: '16px', padding: '28px', border: '1px solid #E2E8F0', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#1E5BB5' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
              <service.icon size={24} style={{ color: '#1E5BB5' }} />
            </div>
            <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#1A1A2E', marginBottom: '8px' }}>{service.title}</h3>
            <p style={{ fontSize: '14px', color: '#5A6474', lineHeight: 1.6 }}>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
