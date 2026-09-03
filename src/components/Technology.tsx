import { motion } from 'framer-motion'
import { Layers, Printer, Sparkles, Scissors, Flame, Wrench, Package, Droplets, Zap, Clock } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const techs = [
  { icon: Layers, title: 'Sublimation Printing', desc: 'Industrial and commercial sublimation solutions for sportswear, garments, fashion and textile applications.' },
  { icon: Sparkles, title: 'DTF Printing', desc: 'Complete DTF solutions including printing technology, powder application and related consumables.' },
  { icon: Printer, title: 'DTG — Direct-to-Garment', desc: 'Solutions for direct garment printing, particularly for fashion brands, custom apparel and short-run production.' },
  { icon: Zap, title: 'Direct Printing', desc: 'Digital direct-printing solutions designed around different production requirements and applications.' },
  { icon: Flame, title: 'Roller Heat Transfer', desc: 'Heat-transfer equipment for garment and textile production environments.' },
  { icon: Wrench, title: 'Accessories', desc: 'Essential accessories and supporting equipment required to operate and maintain printing systems.' },
  { icon: Package, title: 'Spare Parts', desc: 'Reliable spare parts availability to reduce downtime and keep production running.' },
  { icon: Droplets, title: 'Consumables', desc: 'A complete range of inks, DTF powders, printing materials and other application-specific supplies.' },
  { icon: Scissors, title: 'Laser Machines', desc: 'Laser technology for applications relevant to the garment, textile and printing ecosystem.' },
  { icon: Clock, title: 'Upcoming: Heat Transfer Vinyl', desc: 'Heat Transfer Vinyl is coming to the IIT-Pak portfolio, expanding our offering for garment customization.' },
]

export default function Technology() {
  return (
    <Section id="technology" style={{ background: '#F5F7FA' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="Our Technology Portfolio" title="Complete Printing" titleAccent="Technology" description="One platform for complete printing requirements — from machinery to consumables and spare parts." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {techs.map((tech, i) => (
          <motion.div key={tech.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.05 }} whileHover={{ y: -4 }}>
            <div style={{ background: 'white', borderRadius: '16px', padding: '28px', height: '100%', border: '1px solid #E2E8F0', transition: 'all 0.2s', borderTop: '3px solid #1E5BB5' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#1E5BB5' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2E8F0'; e.currentTarget.style.borderTopColor = '#1E5BB5' }}
            >
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <tech.icon size={24} style={{ color: '#1E5BB5' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#1A1A2E', marginBottom: '8px' }}>{tech.title}</h3>
              <p style={{ fontSize: '14px', color: '#5A6474', lineHeight: 1.6 }}>{tech.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
