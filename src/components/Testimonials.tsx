import { useState, useCallback, useEffect } from 'react'
import { motion } from 'framer-motion'
import useEmblaCarousel from 'embla-carousel-react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  { name: 'Ahmad Khan', company: 'Karachi Sports Club', role: 'Procurement Manager', text: 'SW Athletic delivered 500 custom football kits for our club in just 3 weeks. The sublimation quality is outstanding.', rating: 5 },
  { name: 'Sarah Mitchell', company: 'EuroText GmbH', role: 'Operations Director', text: 'We purchased 3 DTF machines from Leaf Pakistan. The installation support and training were exceptional.', rating: 5 },
  { name: 'Muhammad Ali', company: 'Punjab Textile Mills', role: 'CEO', text: 'IIT Pakistan has been our machinery partner for over 5 years. Every machine has exceeded our expectations.', rating: 5 },
  { name: 'James Rodriguez', company: 'SportsWorld USA', role: 'Brand Manager', text: 'The custom basketball jerseys SW Athletic produced were phenomenal. Players love the fit and designs.', rating: 5 },
  { name: 'Fatima Zahra', company: 'Lahore Academy', role: 'Sports Coordinator', text: 'From cricket uniforms to tracksuits, SW Athletic has been our go-to supplier for 3 years.', rating: 5 },
]

export default function Testimonials() {
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
    <section className="section-block" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="container-main" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '48px', gap: '24px' }}>
          <div>
            <span className="glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', color: '#00B8FF', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', background: '#00B8FF', borderRadius: '50%' }} />Testimonials
            </span>
            <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white' }}>
              What Clients <span className="text-gradient">Say</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button onClick={scrollPrev} className="glass-card" style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><ChevronLeft size={20} /></button>
            <button onClick={scrollNext} className="glass-card" style={{ width: '44px', height: '44px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}><ChevronRight size={20} /></button>
          </div>
        </div>
        <div style={{ overflow: 'hidden' }} ref={emblaRef}>
          <div style={{ display: 'flex', gap: '20px' }}>
            {testimonials.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ flex: '0 0 min(340px, 85vw)' }}>
                <div className="glass-card" style={{ borderRadius: '16px', padding: '28px', height: '100%' }}>
                  <Quote size={28} style={{ color: 'rgba(0,184,255,0.3)', marginBottom: '12px' }} />
                  <p style={{ color: '#C8D3E3', lineHeight: 1.7, marginBottom: '20px', fontSize: '14px' }}>"{t.text}"</p>
                  <div style={{ display: 'flex', gap: '2px', marginBottom: '16px' }}>
                    {Array.from({ length: t.rating }).map((_, si) => <Star key={si} size={14} style={{ fill: '#FACC15', color: '#FACC15' }} />)}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: '#00B8FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '12px', color: 'white', flexShrink: 0 }}>
                      {t.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'white', fontSize: '14px' }}>{t.name}</h4>
                      <p style={{ fontSize: '12px', color: '#C8D3E3' }}>{t.role} — {t.company}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '32px' }}>
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => emblaApi?.scrollTo(i)} style={{ height: '6px', borderRadius: '9999px', border: 'none', cursor: 'pointer', transition: 'all 0.3s', width: selected === i ? '24px' : '6px', background: selected === i ? '#00B8FF' : 'rgba(255,255,255,0.2)' }} />
          ))}
        </div>
      </div>
    </section>
  )
}
