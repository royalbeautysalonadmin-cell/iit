import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Shirt, Printer, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const companies = [
  { id: 'sw-athletic', icon: Shirt, name: 'SW Athletic', tagline: 'Sports Teamwear', color: '#00B8FF', description: 'SW Athletic Sports Teamwear is Pakistan\'s leading manufacturer of premium custom sports apparel specializing in sublimation printing technology.', products: ['Football Kits', 'Cricket Uniforms', 'Basketball Jerseys', 'Rugby Kits', 'Gym Wear', 'Hoodies', 'Jackets', 'Tracksuits', 'Swimwear', 'Compression Wear', 'Cycling Wear', 'Custom Team Uniforms'], features: ['Premium Fabric', 'Unlimited Customization', 'Sublimation Printing', 'Worldwide Shipping', 'Bulk Orders', 'Fast Production'] },
  { id: 'leaf-pakistan', icon: Printer, name: 'Leaf Pakistan', tagline: 'Industrial Printing Solutions', color: '#1565C0', description: 'Leaf Pakistan provides complete industrial textile printing solutions, offering advanced digital printing machines, laser cutting systems, heat transfer equipment, and more.', products: ['DTF Machines', 'Sublimation Printers', 'UV Printers', 'Eco Solvent Printers', 'Laser Cutting Machines', 'Fabric Cutting Machines', 'Heat Press Machines', 'Digital Textile Printers', 'Industrial Plotters', 'Printing Inks', 'Accessories', 'Maintenance Services'], features: ['Machine Installation', 'Training', 'After Sales Support', 'Spare Parts', 'Technical Support', 'Warranty'] },
]

export default function Companies() {
  const [active, setActive] = useState(0)
  const current = companies[active]

  return (
    <Section id="companies">
      <SectionHeader tag="Our Companies" title="Diverse" titleGradient="Businesses" description="Two specialized companies delivering excellence in their respective industries." />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}>
        {companies.map((company, i) => (
          <button key={company.id} onClick={() => setActive(i)}
            className={active === i ? '' : 'glass-card'}
            style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '12px', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px', border: active === i ? '1px solid rgba(0,184,255,0.3)' : '1px solid transparent', background: active === i ? 'rgba(0,184,255,0.15)' : undefined, color: active === i ? '#00B8FF' : '#C8D3E3', cursor: 'pointer', transition: 'all 0.3s' }}>
            <company.icon size={18} />{company.name}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={current.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}
          className="glass-card glow-hover" style={{ borderRadius: '24px', padding: 'clamp(24px, 4vw, 48px)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px' }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '12px', background: current.color, marginBottom: '20px' }}>
                <current.icon size={16} style={{ color: 'white' }} />
                <span style={{ color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '13px' }}>{current.tagline}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: 'white', marginBottom: '16px' }}>{current.name}</h3>
              <p style={{ color: '#C8D3E3', lineHeight: 1.7, marginBottom: '24px' }}>{current.description}</p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '12px', marginBottom: '32px' }}>
                {current.features.map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#C8D3E3' }}>
                    <CheckCircle2 size={16} style={{ color: '#00B8FF', flexShrink: 0 }} />{f}
                  </div>
                ))}
              </div>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '12px 24px', background: '#00B8FF', color: 'white', fontWeight: 600, borderRadius: '12px', textDecoration: 'none', fontSize: '14px', transition: 'all 0.3s' }}>
                Inquire Now <ArrowRight size={16} />
              </a>
            </div>
            <div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem', color: 'white', marginBottom: '20px' }}>Products & Services</h4>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '12px' }}>
                {current.products.map((product, pi) => (
                  <motion.div key={product} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: pi * 0.04 }}
                    className="glass-card" style={{ borderRadius: '12px', padding: '12px', textAlign: 'center', fontSize: '13px', color: '#C8D3E3', cursor: 'default', transition: 'all 0.3s' }}>
                    {product}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Section>
  )
}
