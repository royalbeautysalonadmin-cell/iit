import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react'

const footerLinks = {
  'Quick Links': [
    { name: 'About Us', href: '#about' }, { name: 'Our Companies', href: '#companies' }, { name: 'Products', href: '#products' },
    { name: 'Industries', href: '#industries' }, { name: 'Gallery', href: '#gallery' }, { name: 'Contact', href: '#contact' },
  ],
  'SW Athletic': [
    { name: 'Football Kits', href: '#companies' }, { name: 'Cricket Uniforms', href: '#companies' }, { name: 'Basketball Jerseys', href: '#companies' },
    { name: 'Custom Teamwear', href: '#companies' }, { name: 'Gym Wear', href: '#companies' }, { name: 'Track Suits', href: '#companies' },
  ],
  'Leaf Pakistan': [
    { name: 'DTF Machines', href: '#companies' }, { name: 'Sublimation Printers', href: '#companies' }, { name: 'Laser Cutting', href: '#companies' },
    { name: 'Heat Press Machines', href: '#companies' }, { name: 'UV Printers', href: '#companies' }, { name: 'Maintenance', href: '#companies' },
  ],
}

export default function Footer() {
  return (
    <footer style={{ position: 'relative', paddingTop: '80px', paddingBottom: '32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'rgba(0,184,255,0.3)' }} />
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '40px', marginBottom: '64px' }}>
          <div style={{ gridColumn: 'span 1' }}>
            <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '20px' }}>
              <img src="/logo.svg" alt="IIT" style={{ width: '44px', height: '44px', borderRadius: '12px' }} />
              <div>
                <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '15px', color: 'white', display: 'block', lineHeight: 1.2 }}>IIT Pakistan</span>
                <span style={{ fontSize: '9px', color: '#C8D3E3', letterSpacing: '0.15em', textTransform: 'uppercase' as const }}>Industrial Innovation & Technology</span>
              </div>
            </a>
            <p style={{ fontSize: '14px', color: '#C8D3E3', lineHeight: 1.7, marginBottom: '20px' }}>A leading industrial group delivering world-class textile machinery, custom sportswear, and printing technologies to businesses worldwide.</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a href="tel:+923061176766" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#C8D3E3', textDecoration: 'none' }}><Phone size={14} />+92 306-1176766</a>
              <a href="mailto:info@iitpakistan.com" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#C8D3E3', textDecoration: 'none' }}><Mail size={14} />info@iitpakistan.com</a>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#C8D3E3' }}><MapPin size={14} />Lahore, Punjab, Pakistan</div>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'white', fontSize: '14px', marginBottom: '20px' }}>{title}</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {links.map(link => <li key={link.name}><a href={link.href} style={{ fontSize: '14px', color: '#C8D3E3', textDecoration: 'none', transition: 'color 0.3s' }}>{link.name}</a></li>)}
              </ul>
            </div>
          ))}
        </div>

        <div className="glass-card" style={{ borderRadius: '16px', padding: '28px', marginBottom: '56px' }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '20px' }}>
            <div><h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, color: 'white', fontSize: '16px', marginBottom: '4px' }}>Stay Updated</h4><p style={{ fontSize: '14px', color: '#C8D3E3' }}>Subscribe for the latest industry insights.</p></div>
            <div style={{ display: 'flex', width: '100%', maxWidth: '400px' }}>
              <input type="email" placeholder="Your email address" style={{ flex: 1, padding: '10px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRight: 'none', borderRadius: '12px 0 0 12px', color: 'white', fontSize: '14px', outline: 'none' }} />
              <button style={{ padding: '10px 20px', background: '#00B8FF', color: 'white', fontWeight: 600, fontSize: '14px', borderRadius: '0 12px 12px 0', border: 'none', cursor: 'pointer' }}>Subscribe</button>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '40px' }}>
          <a href="/IIT-Logo.pdf" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '8px 20px', borderRadius: '12px', fontSize: '12px', color: '#C8D3E3', textDecoration: 'none' }}>Download Company Logo</a>
          <a href="/GBOS-Brochure.pdf" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '8px 20px', borderRadius: '12px', fontSize: '12px', color: '#C8D3E3', textDecoration: 'none' }}>GBOS Machine Brochure</a>
          <a href="/Smart-Visionscan.pdf" target="_blank" rel="noopener noreferrer" className="glass-card" style={{ padding: '8px 20px', borderRadius: '12px', fontSize: '12px', color: '#C8D3E3', textDecoration: 'none' }}>Smart Visionscan Brief</a>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p style={{ fontSize: '12px', color: '#C8D3E3' }}>&copy; {new Date().getFullYear()} IIT Pakistan. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '16px' }}>
            {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map(s => <a key={s} href="#" style={{ fontSize: '12px', color: '#C8D3E3', textDecoration: 'none' }}>{s}</a>)}
          </div>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ width: '36px', height: '36px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(17,40,74,0.6)', border: '1px solid rgba(0,184,255,0.15)', color: 'white', cursor: 'pointer' }}>
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  )
}
