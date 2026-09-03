import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Technologies', href: '#technology' },
  { name: 'Principals', href: '#principals' },
  { name: 'Services', href: '#solutions' },
  { name: 'Industries', href: '#industries' },
  { name: 'Reach', href: '#reach' },
  { name: 'Insights', href: '#insights' },
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s',
        background: scrolled || mobileOpen ? 'rgba(255,255,255,0.98)' : 'rgba(255,255,255,0.95)',
        backdropFilter: scrolled || mobileOpen ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(12px)' : 'none',
        borderBottom: '1px solid',
        borderColor: scrolled ? '#E2E8F0' : 'transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.05)' : 'none',
      }}
    >
      <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/logo-full.svg" alt="IIT-PAK — Innovative Technology" style={{ height: '36px', width: 'auto' }} />
        </a>

        <div className="nav-desktop-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ padding: '8px 14px', fontSize: '13px', fontWeight: 500, color: '#5A6474', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#1E5BB5'; e.currentTarget.style.background = '#F5F7FA' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#5A6474'; e.currentTarget.style.background = 'transparent' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ width: '1px', height: '24px', background: '#E2E8F0', margin: '0 8px', flexShrink: 0 }} />
          <a
            href="#contact"
            style={{ padding: '10px 20px', background: '#1E5BB5', color: 'white', fontWeight: 600, fontSize: '13px', borderRadius: '10px', textDecoration: 'none', transition: 'all 0.2s', whiteSpace: 'nowrap' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#14427A' }}
            onMouseLeave={(e) => { e.currentTarget.style.background = '#1E5BB5' }}
          >
            Talk to Our Experts
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{ padding: '8px', color: '#1A1A2E', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 0 }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="nav-mobile-menu">
          <div style={{ padding: '16px 24px 32px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', padding: '14px 16px', fontSize: '16px', fontWeight: 500, color: '#5A6474', textDecoration: 'none', borderRadius: '10px', transition: 'all 0.2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = '#1E5BB5'; e.currentTarget.style.background = '#F5F7FA' }}
                onMouseLeave={(e) => { e.currentTarget.style.color = '#5A6474'; e.currentTarget.style.background = 'transparent' }}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', marginTop: '12px', padding: '14px 24px', background: '#1E5BB5', color: 'white', fontWeight: 600, fontSize: '15px', textAlign: 'center', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s' }}
            >
              Talk to Our Experts
            </a>
          </div>
        </div>
      )}

      <style>{`
        .nav-desktop-links { display: none; }
        .nav-hamburger { display: block; }

        @media (min-width: 1024px) {
          .nav-desktop-links { display: flex !important; align-items: center; }
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </nav>
  )
}
