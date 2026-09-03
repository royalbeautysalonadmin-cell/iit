import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Layout'

const customers = [
  { name: 'Sadaqat Textiles', industry: 'Textile Mills' },
  { name: 'Klash Textiles', industry: 'Textile Mills' },
  { name: 'Mughal Sublimation', industry: 'Sublimation', location: 'Sialkot' },
  { name: 'Tri Arrow Exports', industry: 'Sportswear', location: 'Sialkot' },
  { name: 'Selberian Sports', industry: 'Sportswear' },
]

export default function TrustedBy() {
  return (
    <Section style={{ background: '#F5F7FA' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="Our Customers" title="Trusted by" titleAccent="Businesses Across Pakistan" description="We have built lasting relationships with businesses across Pakistan's textile, sportswear and printing industries." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px', maxWidth: '64rem', margin: '0 auto' }}>
        {customers.map((customer, i) => (
          <motion.div key={customer.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', border: '1px solid #E2E8F0', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#1E5BB5' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#1E5BB5' }}>
              {customer.name.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px', color: '#1A1A2E', marginBottom: '4px' }}>{customer.name}</h4>
            <p style={{ fontSize: '12px', color: '#5A6474' }}>{customer.industry}{customer.location ? ` — ${customer.location}` : ''}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
