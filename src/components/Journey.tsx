import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Layout'

const timeline = [
  { year: '2013', title: 'Where It Started', desc: 'IIT-Pak began by supplying printing inks and accessories, building its foundation through direct interaction with customers and understanding their practical printing requirements.' },
  { year: '2017-18', title: 'Introducing Chinese Printing Technology', desc: 'When established brands such as Mimaki and Roland dominated the market, IIT-Pak took a different approach. We introduced the Grando machinery platform in Sialkot and helped customers explore Chinese printing technology at a time when the market was hesitant to adopt it.' },
  { year: '2023', title: 'Expanding the Machine Portfolio', desc: 'IIT-Pak introduced LEAF Pakistan as another brand platform for industrial printing machinery, expanding its capabilities and product portfolio.' },
  { year: '2025-26', title: 'From Local Concern to Industry Platform', desc: 'The business has evolved beyond individual machine sales. IIT-Pak is developing into a platform for multiple sublimation, DTF, DTG and digital printing brands, giving international technology companies an opportunity to establish themselves within the Pakistani market.' },
]

export default function Journey() {
  return (
    <Section id="journey" style={{ background: '#FFFFFF' }}>
      <SectionHeader tag="Our Journey" title="From Inks to a" titleAccent="Technology Platform" description="From selling inks and accessories to building a platform for international printing technology in Pakistan — IIT-Pak continues to move forward." />

      <div style={{ position: 'relative', maxWidth: '56rem', margin: '0 auto' }}>
        <div style={{ position: 'absolute', left: '32px', top: 0, bottom: 0, width: '2px', background: '#E2E8F0' }} className="journey-line" />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {timeline.map((item, i) => (
            <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ display: 'flex', gap: '24px', position: 'relative' }}>
              <div style={{ width: '64px', flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#1E5BB5', border: '3px solid #E8F0FE', flexShrink: 0, zIndex: 2 }} />
              </div>
              <div style={{ flex: 1, paddingBottom: '8px' }}>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '14px', color: '#1E5BB5', background: '#E8F0FE', padding: '4px 12px', borderRadius: '6px', display: 'inline-block', marginBottom: '12px' }}>{item.year}</span>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: '#1A1A2E', marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ fontSize: '15px', color: '#5A6474', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .journey-line { left: 16px !important; }
        }
      `}</style>
    </Section>
  )
}
