import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const faqs = [
  { q: 'What is IIT Pakistan?', a: 'IIT Pakistan is a diversified industrial conglomerate operating SW Athletic sportswear and Leaf Pakistan industrial printing solutions under one umbrella.' },
  { q: 'What products does SW Athletic offer?', a: 'Premium custom sports apparel including football kits, cricket uniforms, basketball jerseys, rugby kits, gym wear, hoodies, jackets, tracksuits, swimwear, and more.' },
  { q: 'What machines does Leaf Pakistan sell?', a: 'DTF machines, sublimation printers, UV printers, eco-solvent printers, laser cutting machines, fabric cutting machines, heat press machines, and more.' },
  { q: 'Do you ship internationally?', a: 'Yes, we export to over 30 countries across 6 continents with safe and timely delivery.' },
  { q: 'What is sublimation printing?', a: 'A digital printing technology that uses heat to transfer dye onto fabric, creating vibrant permanent prints.' },
  { q: 'What is DTF printing?', a: 'Direct-to-Film technology that prints on PET film then transfers to any fabric including cotton, polyester, and blends.' },
  { q: 'Can I get custom sportswear for my team?', a: 'Absolutely! Send us your logo, colors, and requirements and we will create a free mockup for your approval.' },
  { q: 'Do you provide machine installation?', a: 'Yes, complete installation, setup, calibration, operator training, and ongoing technical support.' },
  { q: 'What is your minimum order quantity?', a: 'For sportswear, typically 10-20 pieces per design. For machines, there is no MOQ.' },
  { q: 'Do you offer warranty on machines?', a: 'Yes, all machines come with manufacturer warranty. Extended packages available.' },
  { q: 'How long does sportswear production take?', a: '2-3 weeks after design approval. Express 1-week production available.' },
  { q: 'What payment methods do you accept?', a: 'Bank transfers, Letters of Credit, Western Union, and local cash/bank transfers.' },
  { q: 'Can I become a distributor?', a: 'Yes! Contact us with your company details and market information.' },
  { q: 'What file formats do you accept?', a: 'AI, PSD, PDF, SVG, PNG (high-res), and JPEG. Our team can also create designs.' },
  { q: 'Do you offer training on machines?', a: 'Yes, comprehensive operator training included with every machine purchase.' },
  { q: 'What fabrics do you work with?', a: 'Polyester, nylon, spandex, cotton, mesh, microfiber, and sublimation-compatible fabrics.' },
  { q: 'Can I visit your factory?', a: 'Yes, please schedule an appointment in advance for a comprehensive tour.' },
  { q: 'Do you provide after-sales support?', a: 'Yes, technical assistance, spare parts, maintenance, and remote troubleshooting.' },
  { q: 'What makes IIT Pakistan different?', a: 'Being both a sportswear manufacturer and machinery supplier gives us unique end-to-end expertise.' },
  { q: 'How can I request a quotation?', a: 'Through our Contact page, WhatsApp, email, or phone. Response within 24 hours.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)
  return (
    <Section id="faq">
      <SectionHeader tag="FAQ" title="Frequently Asked" titleGradient="Questions" description="Find answers to common questions about our products and services." />
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {faqs.map((faq, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.02 }}>
            <button onClick={() => setOpen(open === i ? null : i)}
              className="glass-card" style={{ width: '100%', borderRadius: '12px', padding: '20px', textAlign: 'left', border: open === i ? '1px solid rgba(0,184,255,0.2)' : '1px solid rgba(0,184,255,0.15)', background: open === i ? 'rgba(255,255,255,0.05)' : 'rgba(17,40,74,0.6)', cursor: 'pointer', transition: 'all 0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, color: 'white', fontSize: '14px' }}>{faq.q}</h4>
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: open === i ? 'rgba(0,184,255,0.2)' : 'rgba(255,255,255,0.05)', color: open === i ? '#00B8FF' : '#C8D3E3', transition: 'all 0.3s' }}>
                  {open === i ? <Minus size={14} /> : <Plus size={14} />}
                </div>
              </div>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} style={{ overflow: 'hidden' }}>
                    <p style={{ fontSize: '14px', color: '#C8D3E3', lineHeight: 1.7, marginTop: '12px', paddingRight: '32px' }}>{faq.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
