import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { name: 'Technologies', href: '#technology' },
    { name: 'Principals', href: '#principals' },
    { name: 'Services', href: '#solutions' },
    { name: 'Industries', href: '#industries' },
    { name: 'Reach', href: '#reach' },
    { name: 'Contact', href: '#contact' },
  ],
  'Technologies': [
    { name: 'Sublimation Printing', href: '#technology' },
    { name: 'DTF Printing', href: '#technology' },
    { name: 'DTG Printing', href: '#technology' },
    { name: 'Direct Printing', href: '#technology' },
    { name: 'Laser Machines', href: '#technology' },
    { name: 'Consumables', href: '#technology' },
  ],
  'Support': [
    { name: 'After-Sales Service', href: '#solutions' },
    { name: 'Spare Parts', href: '#solutions' },
    { name: 'Technical Support', href: '#solutions' },
    { name: 'Engineering Services', href: '#solutions' },
    { name: 'Industry Insights', href: '#insights' },
    { name: 'FAQ', href: '#faq' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ position: 'relative', background: '#1A1A2E', paddingTop: '64px', paddingBottom: '32px' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          <div style={{ gridColumn: 'span 1' }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '20px' }}>
              <img src="/logo-full.svg" alt="IIT-PAK — Innovative Technology" style={{ height: '32px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </a>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '20px' }}>A local Pakistani concern growing into a global platform for printing technology. Connecting international innovation with Pakistan's printing, garment and textile industries.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ marginBottom: '8px' }}>
                <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', marginBottom: '2px' }}>Business Director</p>
                <p style={{ fontSize: '14px', color: 'white', fontWeight: 600 }}>Tanveer Ahmad</p>
              </div>
              <a href="tel:+923008576668" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}><Phone size={14} />+92 300 8576668</a>
              <a href="mailto:info@iitpakistan.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}><Mail size={14} />info@iitpakistan.com</a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}><MapPin size={14} />Lahore, Punjab, Pakistan</div>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'white', fontSize: '14px', marginBottom: '20px' }}>{title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(link => <li key={link.name}><a href={link.href} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#60A5FA' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.6)' }}
                >{link.name}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>&copy; {new Date().getFullYear()} IIT-Pak. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map(s => <a key={s} href="#" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#60A5FA' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
            >{s}</a>)}
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(255,255,255,0.1)', border: 'none', color: 'white', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
          >
            <ArrowUp size={16} />
          </button>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '20px' }}>
          <a href="https://www.orbitrixsolutions.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.8' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1' }}
          >
            <div style={{ width: '28px', height: '28px', borderRadius: '6px', background: '#2D8FD1', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '14px', color: 'white', flexShrink: 0 }}>O</div>
            <div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.4)' }}>Developed by </span>
              <span style={{ fontSize: '12px', color: '#7FC1EA', fontWeight: 600 }}>OrbitrixSolutions</span>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
}
