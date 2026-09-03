import { motion } from 'framer-motion'
import { Phone, Mail } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const leaders = [
  { name: 'Tanveer Ahmad', role: 'Business Director', phone: '+92 300 8576668', description: 'Business Director of IIT-Pak, leading the company\'s growth as a printing technology platform connecting international innovation with Pakistan\'s printing, garment and textile industries.', initials: 'TA', color: '#1E5BB5' },
  { name: 'Saadat Nazeer', role: 'CEO & Founder', phone: '+92 306 1176766', description: 'Founder and Chief Executive Officer of IIT-Pak, establishing the company\'s foundation in printing inks and accessories and building it into a technology platform for the Pakistani market.', initials: 'SN', color: '#14427A' },
]

export default function Leadership() {
  return (
    <Section id="leadership" style={{ background: '#FFFFFF' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="Our Leadership" title="Meet the" titleAccent="Team" description="Guided by experienced leaders who have built IIT-Pak into Pakistan's printing technology platform." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '32px', maxWidth: '56rem', margin: '0 auto' }}>
        {leaders.map((leader, i) => (
          <motion.div key={leader.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.15 }}>
            <div style={{ background: '#F5F7FA', borderRadius: '20px', padding: 'clamp(24px, 4vw, 36px)', height: '100%', border: '1px solid #E2E8F0', transition: 'all 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#1E5BB5' }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: leader.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '20px', color: 'white', flexShrink: 0 }}>
                  {leader.initials}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: '#1A1A2E' }}>{leader.name}</h3>
                  <span style={{ color: '#1E5BB5', fontWeight: 500, fontSize: '14px' }}>{leader.role}</span>
                </div>
              </div>
              <p style={{ color: '#5A6474', lineHeight: 1.7, marginBottom: '20px', fontSize: '14px' }}>{leader.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a href={`tel:${leader.phone.replace(/\s/g, '')}`} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '10px', fontSize: '14px', color: '#5A6474', textDecoration: 'none', transition: 'all 0.2s', background: 'white', border: '1px solid #E2E8F0' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1E5BB5' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0' }}
                >
                  <Phone size={14} style={{ color: '#1E5BB5' }} />{leader.phone}
                </a>
                <a href="mailto:info@iitpakistan.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '10px', fontSize: '14px', color: '#5A6474', textDecoration: 'none', transition: 'all 0.2s', background: 'white', border: '1px solid #E2E8F0' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1E5BB5' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0' }}
                >
                  <Mail size={14} style={{ color: '#1E5BB5' }} />Email
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
