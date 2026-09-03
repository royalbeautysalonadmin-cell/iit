import { motion } from 'framer-motion'
import { Shirt, Printer, Factory, Scissors, Tag, Sparkles, Zap, Monitor, Layers } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const industries = [
  { icon: Shirt, name: 'Garment Industry' },
  { icon: Scissors, name: 'Sportswear Industry' },
  { icon: Factory, name: 'Textile Mills' },
  { icon: Layers, name: 'Fashion Brands' },
  { icon: Tag, name: 'Labeling Industry' },
  { icon: Sparkles, name: 'DTF Printing Businesses' },
  { icon: Zap, name: 'Direct Printing Businesses' },
  { icon: Printer, name: 'Sublimation Businesses' },
  { icon: Monitor, name: 'Digital Printing Businesses' },
]

export default function Industries() {
  return (
    <Section id="industries" style={{ background: '#F5F7FA' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="Industries We Serve" title="Powering" titleAccent="Pakistan's Printing Industries" description="Our solutions cater to the specific requirements of Pakistan's growing printing, garment and textile industries." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
        {industries.map((industry, i) => (
          <motion.div key={industry.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} whileHover={{ y: -4 }}
            style={{ background: 'white', borderRadius: '16px', padding: '24px', textAlign: 'center', cursor: 'default', border: '1px solid #E2E8F0', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#1E5BB5' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
          >
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <industry.icon size={28} style={{ color: '#1E5BB5' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px', color: '#1A1A2E' }}>{industry.name}</h4>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
