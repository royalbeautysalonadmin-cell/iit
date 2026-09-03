import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'

const categories = ['All', 'Machines', 'Printers']

const items = [
  { id: 1, category: 'Machines', title: 'Digital Laser Die Cutter', image: '/images/Digital Laser DIe Cutter.png' },
  { id: 2, category: 'Machines', title: 'Dual Head Laser Cutter', image: '/images/Dual Head Asynchronous High Efficiency Laser Cutter.png' },
  { id: 3, category: 'Machines', title: 'Sliding Table Laser Cutter', image: '/images/Sliding Table Lazer Cutting Machine.png' },
  { id: 4, category: 'Printers', title: 'Sublimation Printer', image: '/images/Sublimation Printer (1.7 and 3 Metre).jpg' },
  { id: 5, category: 'Printers', title: 'Eco Solvent Printer', image: '/images/Eco Solvent Printer.jpg' },
  { id: 6, category: 'Printers', title: 'UV Roll to Roll Printer', image: '/images/UV roll to roll printer.jpg' },
]

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [selected, setSelected] = useState<number | null>(null)
  const filtered = active === 'All' ? items : items.filter(i => i.category === active)
  const selectedItem = items.find(i => i.id === selected)

  return (
    <section id="gallery" style={{ background: '#F2F6FA', padding: '100px 0' }}>
      <div className="container-main">
        <div style={{ maxWidth: '640px', marginBottom: '40px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#1A6FB0', display: 'block', marginBottom: '14px' }}>
            // Gallery
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: 1.15, color: '#0C2340', marginBottom: '14px' }}>
            Our equipment.
          </h2>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '40px', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActive(cat)}
              style={{ padding: '8px 20px', borderRadius: '3px', fontSize: '13px', fontWeight: 500, border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s', fontFamily: "'Inter', sans-serif",
                background: active === cat ? '#0C2340' : 'transparent',
                color: active === cat ? '#ffffff' : '#173A5E',
                borderColor: active === cat ? '#0C2340' : '#D8E2EC',
              }}
            >{cat}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '20px' }}>
          {filtered.map((item) => (
            <motion.div key={item.id} layout initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3 }}
              onClick={() => setSelected(item.id)}
              style={{ borderRadius: '6px', overflow: 'hidden', cursor: 'pointer', border: '1px solid #E2E8F0', background: 'white', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 20px 40px -28px rgba(12,35,64,0.35)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none' }}
            >
              <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(12,35,64,0)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                  className="gallery-overlay"
                >
                  <ZoomIn size={28} style={{ color: 'white', opacity: 0, transition: 'opacity 0.2s' }} className="gallery-icon" />
                </div>
              </div>
              <div style={{ padding: '16px 20px' }}>
                <p style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '15px', color: '#0C2340' }}>{item.title}</p>
                <p style={{ fontSize: '12px', color: '#8A97A6', marginTop: '2px' }}>{item.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{ position: 'fixed', inset: 0, background: 'rgba(12,35,64,0.85)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', padding: '24px' }}
          >
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
              onClick={(e) => e.stopPropagation()}
              style={{ background: 'white', borderRadius: '10px', maxWidth: '720px', width: '100%', overflow: 'hidden', position: 'relative' }}
            >
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(12,35,64,0.7)', border: 'none', cursor: 'pointer', color: 'white', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}><X size={18} /></button>
              <img src={selectedItem.image} alt={selectedItem.title} style={{ width: '100%', maxHeight: '70vh', objectFit: 'contain', display: 'block', background: '#F2F6FA' }} />
              <div style={{ padding: '20px 24px' }}>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '18px', color: '#0C2340' }}>{selectedItem.title}</h3>
                <p style={{ fontSize: '13px', color: '#8A97A6', marginTop: '4px' }}>{selectedItem.category}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-overlay:hover { background: rgba(12,35,64,0.4) !important; }
        .gallery-overlay:hover .gallery-icon { opacity: 1 !important; }
      `}</style>
    </section>
  )
}
