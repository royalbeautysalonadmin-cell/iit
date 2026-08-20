import { motion } from 'framer-motion'
import { Phone, Mail, ExternalLink } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const leaders = [
  { name: 'Saadat Nazeer', role: 'CEO & Founder', phone: '0306-1176766', description: 'Founder and Chief Executive Officer of IIT Pakistan, leading the company\'s vision of becoming a global leader in textile manufacturing solutions, industrial printing technologies, and custom sportswear production.', initials: 'SN', gradient: '#00B8FF' },
  { name: 'Muhammad Wasea', role: 'Director', phone: '0314-1850051', description: 'Director of IIT Pakistan, responsible for operations, strategic partnerships, business development, and customer success. He oversees the growth of all subsidiary companies.', initials: 'MW', gradient: '#1565C0' },
]

export default function Leadership() {
  return (
    <Section id="leadership" style={{ position: 'relative' }}>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'rgba(11,61,145,0.2)', borderRadius: '50%', filter: 'blur(200px)' }} />
      <SectionHeader tag="Our Leadership" title="Meet the" titleGradient="Visionaries" description="Guided by experienced leaders who have built IIT Pakistan into a global industrial powerhouse." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '32px', maxWidth: '64rem', margin: '0 auto' }}>
        {leaders.map((leader, i) => (
          <motion.div key={leader.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: i * 0.2 }}>
            <div className="glass-card glow-hover" style={{ borderRadius: '24px', padding: 'clamp(24px, 4vw, 40px)', height: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '24px' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: leader.gradient, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '20px', color: 'white', flexShrink: 0 }}>
                  {leader.initials}
                </div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'white' }}>{leader.name}</h3>
                  <span style={{ color: '#00B8FF', fontWeight: 500, fontSize: '14px' }}>{leader.role}</span>
                </div>
              </div>
              <p style={{ color: '#C8D3E3', lineHeight: 1.7, marginBottom: '24px', fontSize: '14px' }}>{leader.description}</p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
                <a href={`tel:${leader.phone.replace(/-/g, '')}`} className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '12px', fontSize: '14px', color: '#C8D3E3', textDecoration: 'none', transition: 'all 0.3s' }}>
                  <Phone size={16} />{leader.phone}
                </a>
                <a href="mailto:info@iitpakistan.com" className="glass-card" style={{ padding: '8px', borderRadius: '12px', color: '#C8D3E3', textDecoration: 'none', transition: 'all 0.3s' }}>
                  <Mail size={16} />
                </a>
                <a href="#" className="glass-card" style={{ padding: '8px', borderRadius: '12px', color: '#C8D3E3', textDecoration: 'none', transition: 'all 0.3s' }}>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
