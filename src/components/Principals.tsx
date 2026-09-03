import { Globe2, ArrowRight } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

export default function Principals() {
  return (
    <Section id="principals" style={{ background: '#FFFFFF' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="International Partners" title="International Technology." titleAccent="Local Reach" description="IIT-Pak works as a platform for innovative international printing technology, connecting global manufacturers and principals with customers across Pakistan." />

      <div style={{ background: '#F5F7FA', borderRadius: '24px', padding: 'clamp(32px, 5vw, 56px)', border: '1px solid #E2E8F0', textAlign: 'center', marginBottom: '40px' }}>
        <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
          <Globe2 size={32} style={{ color: '#1E5BB5' }} />
        </div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.5rem', color: '#1A1A2E', marginBottom: '16px' }}>We Provide International Technology Brands a Platform to Enter, Establish and Grow Within the Pakistani Market</h3>
        <p style={{ fontSize: '16px', color: '#5A6474', lineHeight: 1.7, maxWidth: '40rem', margin: '0 auto 32px' }}>
          We provide the local infrastructure, market knowledge, technical support and distribution capabilities required to build a strong presence in Pakistan.
        </p>
        <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '14px 28px', background: '#1E5BB5', color: 'white', fontWeight: 600, borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s', fontSize: '15px' }}
          onMouseEnter={(e) => { e.currentTarget.style.background = '#14427A' }}
          onMouseLeave={(e) => { e.currentTarget.style.background = '#1E5BB5' }}
        >
          Partner with IIT-Pak <ArrowRight size={18} />
        </a>
      </div>

      <div style={{ textAlign: 'center', padding: '32px', background: '#E8F0FE', borderRadius: '16px' }}>
        <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '18px', color: '#1A1A2E', marginBottom: '8px' }}>Looking to Enter the Pakistani Market?</p>
        <p style={{ fontSize: '15px', color: '#5A6474' }}>Partner with IIT-Pak and reach customers across all four provinces.</p>
      </div>
    </Section>
  )
}
