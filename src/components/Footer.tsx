import { Phone, Mail, MapPin } from 'lucide-react'

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
    <footer style={{ position: 'relative', background: '#0C2340', paddingTop: '50px', paddingBottom: '30px', fontSize: '13.5px', color: '#9FB3C8' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '40px', paddingBottom: '36px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: '20px' }} className="footer-grid">
          <div>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: '14px' }}>
              <img src="/logo-full.svg" alt="IIT-PAK" style={{ height: '28px', width: 'auto', filter: 'brightness(0) invert(1)' }} />
            </a>
            <p style={{ maxWidth: '260px', color: '#8FA4BA', lineHeight: 1.6, marginBottom: '20px' }}>A Pakistani printing-technology platform connecting international innovation with the country's garment, sportswear and textile industries.</p>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '13px', color: 'white', fontWeight: 600, marginBottom: '2px' }}>Saadat Nazeer</p>
              <p style={{ fontSize: '12px', color: '#8FA4BA', marginBottom: '6px' }}>CEO & Founder</p>
              <a href="tel:+923061176766" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#9FB3C8', textDecoration: 'none' }}><Phone size={12} />0306-1176766</a>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p style={{ fontSize: '13px', color: 'white', fontWeight: 600, marginBottom: '2px' }}>Tanveer Ahmad</p>
              <p style={{ fontSize: '12px', color: '#8FA4BA', marginBottom: '6px' }}>Business Director</p>
              <a href="tel:+923008576668" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#9FB3C8', textDecoration: 'none' }}><Phone size={12} />+92 300 8576668</a>
            </div>

            <a href="mailto:info@iitpakistan.com" style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#9FB3C8', textDecoration: 'none', marginBottom: '6px' }}><Mail size={12} />info@iitpakistan.com</a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#9FB3C8' }}><MapPin size={12} />Lahore, Punjab, Pakistan</div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ color: 'white', fontSize: '13px', letterSpacing: '0.05em', textTransform: 'uppercase', marginBottom: '16px', fontFamily: "'JetBrains Mono', monospace", fontWeight: 500 }}>{title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(link => <li key={link.name}><a href={link.href} style={{ fontSize: '13.5px', color: '#9FB3C8', textDecoration: 'none', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'white' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#9FB3C8' }}
                >{link.name}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <span>&copy; {new Date().getFullYear()} IIT-Pak. All rights reserved.</span>
          <span>Lahore · Karachi · Sialkot · Faisalabad · Peshawar · Quetta</span>
        </div>

        <div style={{ textAlign: 'center', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)', marginTop: '16px' }}>
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

      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  )
}
