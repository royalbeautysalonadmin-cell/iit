import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const items = [
  { title: 'Manufacturing Facility', category: 'Factory', img: '/images/gallery-1.jpg', gradient: 'rgba(0,184,255,0.3)' },
  { title: 'Digital Printing Line', category: 'Machines', img: '/images/gallery-2.jpg', gradient: 'rgba(21,101,192,0.3)' },
  { title: 'Laser Cutting Station', category: 'Machines', img: '/images/gallery-3.jpg', gradient: 'rgba(0,184,255,0.25)' },
  { title: 'Sportswear Production', category: 'Production', img: '/images/gallery-4.jpg', gradient: 'rgba(0,184,255,0.2)' },
  { title: 'Quality Control Lab', category: 'Quality', img: '/images/gallery-5.jpg', gradient: 'rgba(21,101,192,0.2)' },
  { title: 'Finished Products', category: 'Products', img: '/images/gallery-6.jpg', gradient: 'rgba(0,184,255,0.15)' },
  { title: 'Warehouse', category: 'Warehouse', img: '/images/gallery-7.jpg', gradient: 'rgba(0,184,255,0.2)' },
  { title: 'Corporate Office', category: 'Office', img: '/images/gallery-8.jpg', gradient: 'rgba(21,101,192,0.3)' },
]

const cats = ['All', 'Factory', 'Machines', 'Production', 'Quality', 'Products', 'Warehouse', 'Office']

function GalleryImage({ item }: { item: typeof items[0] }) {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  if (error) {
    return (
      <div style={{ width: '100%', height: '100%', background: item.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <ZoomIn size={24} style={{ color: 'rgba(255,255,255,0.3)' }} />
      </div>
    )
  }

  return (
    <img
      src={item.img}
      alt={item.title}
      loading="lazy"
      onLoad={() => setLoaded(true)}
      onError={() => setError(true)}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: loaded ? 'block' : 'none',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    />
  )
}

function LightboxImage({ item }: { item: typeof items[0] }) {
  const [error, setError] = useState(false)
  if (error) {
    return (
      <div style={{ width: '100%', height: '100%', background: item.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center' }}><h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: 'white', marginBottom: '8px' }}>{item.title}</h3><span style={{ color: '#00B8FF', fontSize: '14px' }}>{item.category}</span></div>
      </div>
    )
  }
  return (
    <img
      src={item.img}
      alt={item.title}
      onError={() => setError(true)}
      style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '24px' }}
    />
  )
}

export default function Gallery() {
  const [cat, setCat] = useState('All')
  const [sel, setSel] = useState<number | null>(null)
  const filtered = cat === 'All' ? items : items.filter(i => i.category === cat)

  return (
    <Section id="gallery">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'rgba(0,184,255,0.3)' }} />
      <SectionHeader tag="Gallery" title="Our" titleGradient="Facilities" description="A glimpse into our world-class manufacturing facilities and operations." />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '12px', marginBottom: '48px' }}>
        {cats.map(c => (
          <button key={c} onClick={() => setCat(c)} style={{ padding: '8px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: 500, border: 'none', cursor: 'pointer', transition: 'all 0.3s', background: cat === c ? '#00B8FF' : 'rgba(17,40,74,0.6)', color: cat === c ? 'white' : '#C8D3E3', backdropFilter: 'blur(20px)' }}>{c}</button>
        ))}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        <AnimatePresence>
          {filtered.map((item, i) => (
            <motion.div key={item.title} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3, delay: i * 0.04 }}
              style={{ cursor: 'pointer' }} onClick={() => setSel(i)}>
              <div style={{ aspectRatio: '1', borderRadius: '16px', background: item.gradient, position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}>
                <GalleryImage item={item} />
                <div style={{ position: 'absolute', inset: 0, background: 'rgba(8,22,46,0.6)', opacity: 0, transition: 'opacity 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')} onMouseLeave={(e) => (e.currentTarget.style.opacity = '0')}>
                  <ZoomIn size={28} style={{ color: '#00B8FF', marginBottom: '8px' }} />
                  <span style={{ color: 'white', fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px' }}>{item.title}</span>
                  <span style={{ color: '#C8D3E3', fontSize: '12px' }}>{item.category}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      <AnimatePresence>
        {sel !== null && filtered[sel] && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', inset: 0, zIndex: 100, background: 'rgba(8,22,46,0.9)', backdropFilter: 'blur(20px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
            onClick={() => setSel(null)}>
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.8, opacity: 0 }}
              style={{ position: 'relative', maxWidth: '700px', width: '100%' }} onClick={e => e.stopPropagation()}>
              <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
                <LightboxImage item={filtered[sel]} />
              </div>
              <button onClick={() => setSel(null)} style={{ position: 'absolute', top: '-12px', right: '-12px', width: '40px', height: '40px', borderRadius: '50%', background: 'rgba(17,40,74,0.8)', border: '1px solid rgba(0,184,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', cursor: 'pointer' }}><X size={20} /></button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  )
}
