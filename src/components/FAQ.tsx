import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const faqs = [
  { q: 'What printing technologies does IIT-Pak offer?', a: 'IIT-Pak provides sublimation, DTF, DTG, direct printing, digital printing, roller heat transfer, laser machines, accessories, spare parts and consumables.' },
  { q: 'Do you provide after-sales support?', a: 'Yes. Our relationship does not end when a machine is installed. We provide one-call after-sales support including technical assistance, troubleshooting, maintenance and operational support.' },
  { q: 'Which industries do you serve?', a: 'We serve the garment industry, sportswear industry, textile mills, fashion brands, labeling industry, DTF printing businesses, direct printing businesses, sublimation businesses and digital printing businesses across Pakistan.' },
  { q: 'Do you supply spare parts and consumables?', a: 'Yes. We maintain availability of genuine spare parts and a complete range of consumables including inks, DTF powders, printing materials and other application-specific supplies.' },
  { q: 'Can international printing technology companies partner with IIT-Pak?', a: 'Absolutely. IIT-Pak acts as a platform for international technology brands to enter, establish and grow within the Pakistani market. We provide local infrastructure, market knowledge, technical support and distribution capabilities.' },
  { q: 'What is your coverage area within Pakistan?', a: 'We have served 500+ customers across all four provinces — Punjab, Sindh, Khyber Pakhtunkhwa and Balochistan — including major cities like Lahore, Faisalabad, Multan, Sialkot, Gujrat, Gujranwala, Karachi, Peshawar and Quetta.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <Section id="faq" style={{ background: '#F5F7FA' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="FAQ" title="Frequently" titleAccent="Asked Questions" description="Answers to common questions about our technology, services and coverage." />

      <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
        {faqs.map((faq, i) => (
          <div key={i} style={{ borderBottom: '1px solid #E2E8F0' }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 0', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
            >
              <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '16px', color: '#1A1A2E', paddingRight: '16px' }}>{faq.q}</span>
              <span style={{ flexShrink: 0, width: '32px', height: '32px', borderRadius: '8px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {open === i ? <Minus size={16} style={{ color: '#1E5BB5' }} /> : <Plus size={16} style={{ color: '#1E5BB5' }} />}
              </span>
            </button>
            <AnimatePresence>
              {open === i && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}
                  style={{ overflow: 'hidden' }}
                >
                  <p style={{ fontSize: '15px', color: '#5A6474', lineHeight: 1.7, paddingBottom: '20px' }}>{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  )
}
