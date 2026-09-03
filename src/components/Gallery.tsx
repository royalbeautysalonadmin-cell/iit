import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const categories = ['All', 'Machines', 'Products', 'Events']

const items = [
  { id: 1, category: 'Machines', title: 'Sublimation Printer', color: '#E8F0FE' },
  { id: 2, category: 'Machines', title: 'DTF Printing System', color: '#F0F4FF' },
  { id: 3, category: 'Products', title: 'Printing Consumables', color: '#E8F0FE' },
  { id: 4, category: 'Machines', title: 'Laser Cutting Machine', color: '#F0F4FF' },
  { id: 5, category: 'Events', title: 'Industry Exhibition', color: '#E8F0FE' },
  { id: 6, category: 'Products', title: 'Spare Parts Range', color: '#F0F4FF' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<number | null>(null)
  const filtered = active === 'All' ? items : items.filter(i => i.category === active)

  return (
    <Section id="gallery" style={{ background: '#FFFFFF' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="Gallery" title="Our" titleAccent="Gallery" description="A look at our technology, products and industry presence." />

      <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActive(cat)}
            style={{ padding: '8px 20px', borderRadius: '9999px', fontSize: '13px', fontWeight: 500, border: '1px solid', cursor: 'pointer', transition: 'all 0.2s',
              background: active === cat ? '#1E5BB5' : 'white',
              color: active === cat ? 'white' : '#5A6474',
              borderColor: active === cat ? '#1E5BB5' : '#E2E8F0',
            }}
          >{cat}</button>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
        <AnimatePresence mode="wait">
          {filtered.map((item) => (
            <motion.div key={item.id} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}
              onClick={() => setSelected(item.id)}
              style={{ background: item.color, borderRadius: '16px', height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', border: '1px solid #E2E8F0', position: 'relative', overflow: 'hidden', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none' }}
            >
              <div style={{ textAlign: 'center', color: '#5A6474' }}>
                <ZoomIn size={24} style={{ marginBottom: '8px', opacity: 0.5 }} />
                <p style={{ fontSize: '14px', fontWeight: 500 }}>{item.title}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '24px' }}
          >
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'white', borderRadius: '16px', padding: '48px', maxWidth: '480px', width: '100%', textAlign: 'center', position: 'relative' }}
            >
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '16px', right: '16px', background: 'none', border: 'none', cursor: 'pointer', color: '#5A6474' }}><X size={20} /></button>
              <div style={{ width: '80px', height: '80px', borderRadius: '16px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <ZoomIn size={32} style={{ color: '#1E5BB5' }} />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: '#1A1A2E' }}>{items.find(i => i.id === selected)?.title}</h3>
              <p style={{ fontSize: '14px', color: '#5A6474', marginTop: '8px' }}>Gallery images coming soon.</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
