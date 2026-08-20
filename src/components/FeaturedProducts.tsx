import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight, Shirt, Printer, Scissors, Zap, Users, Settings } from 'lucide-react'
// unused import removed

const products = [
  { icon: Shirt, title: 'Sportswear', desc: 'Premium custom sports apparel with sublimation printing', category: 'SW Athletic', gradient: 'rgba(0,184,255,0.2)' },
  { icon: Printer, title: 'Printing Machines', desc: 'Advanced digital and sublimation printing solutions', category: 'Leaf Pakistan', gradient: 'rgba(21,101,192,0.2)' },
  { icon: Scissors, title: 'Laser Machines', desc: 'Precision laser cutting systems for fabric and materials', category: 'Leaf Pakistan', gradient: 'rgba(0,184,255,0.15)' },
  { icon: Zap, title: 'Heat Press', desc: 'Professional heat transfer and sublimation press machines', category: 'Leaf Pakistan', gradient: 'rgba(0,184,255,0.2)' },
  { icon: Users, title: 'Custom Apparel', desc: 'Team uniforms, corporate wear, and custom garments', category: 'SW Athletic', gradient: 'rgba(21,101,192,0.2)' },
  { icon: Settings, title: 'Industrial Equipment', desc: 'Complete textile manufacturing machinery solutions', category: 'Leaf Pakistan', gradient: 'rgba(0,184,255,0.15)' },
]

export default function FeaturedProducts() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' })
  const [selected, setSelected] = useState(0)
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelected(emblaApi.selectedScrollSnap())
    emblaApi.on('select', onSelect)
    return () => { emblaApi.off('select', onSelect) }
  }, [emblaApi])

  return (
    <section id="products" className="section-block" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container-main" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', gap: '24px' }}>
          <div style={{ textAlign: 'center' }} className="products-header-text">
            <span className="glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', color: '#00B8FF', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', background: '#00B8FF', borderRadius: '50%' }} />Featured Products
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white' }}>
              Our <span className="text-gradient">Products</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={scrollPrev} className="glass-card" style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><ChevronLeft size={20} /></button>
            <button onClick={scrollNext} className="glass-card" style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><ChevronRight size={20} /></button>
          </div>
        </div>
        <div style={{ overflow: 'hidden' }} ref={emblaRef}>
          <div style={{ display: 'flex', gap: '20px' }}>
            {products.map((product, i) => (
              <motion.div key={product.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ flex: '0 0 min(280px, 80vw)' }}>
                <div className="glass-card glow-hover" style={{ borderRadius: '16px', padding: '28px', height: '100%', borderColor: selected === i ? 'rgba(0,184,255,0.3)' : undefined, transition: 'all 0.3s' }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: product.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                    <product.icon size={28} style={{ color: '#00B8FF' }} />
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 500, color: 'rgba(0,184,255,0.7)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{product.category}</span>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.125rem', color: 'white', marginTop: '4px', marginBottom: '8px' }}>{product.title}</h3>
                  <p style={{ fontSize: '14px', color: '#C8D3E3' }}>{product.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          {products.map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)} style={{ height: '6px', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'all 0.3s', width: selected === i ? '24px' : '6px', background: selected === i ? '#00B8FF' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
      </div>
      <style>{`.products-header-text { text-align: left !important; } @media (max-width: 640px) { .products-header-text { text-align: center !important; } }`}</style>
    </section>
  )
}
