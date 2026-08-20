import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Companies', href: '#companies' },
  { name: 'Industries', href: '#industries' },
  { name: 'Products', href: '#products' },
  { name: 'Technology', href: '#technology' },
  { name: 'Gallery', href: '#gallery' },
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
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.5s',
        background: scrolled || mobileOpen ? 'rgba(8,22,46,0.95)' : 'transparent',
        backdropFilter: scrolled || mobileOpen ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled || mobileOpen ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,184,255,0.15)' : 'none',
      }}
    >
      <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/logo.svg" alt="IIT" style={{ height: '40px', width: 'auto' }} />
          <div className="nav-brand-text">
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '17px', color: 'white', display: 'block', lineHeight: 1.2 }}>IIT Pakistan</span>
            <span style={{ fontSize: '9px', color: '#C8D3E3', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Industrial Innovation & Technology</span>
          </div>
        </a>

        <div className="nav-desktop-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ padding: '8px 14px', fontSize: '13px', fontWeight: 500, color: '#C8D3E3', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.3s', whiteSpace: 'nowrap' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#00B8FF'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#C8D3E3'; e.currentTarget.style.background = 'transparent' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', margin: '0 8px', flexShrink: 0 }} />
          <a
            href="#contact"
            style={{ padding: '10px 20px', background: '#00B8FF', color: 'white', fontWeight: 600, fontSize: '13px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s', whiteSpace: 'nowrap' }}
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="nav-hamburger"
          aria-label="Toggle menu"
          style={{ padding: '8px', color: 'white', background: 'none', border: 'none', cursor: 'pointer', lineHeight: 0 }}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-menu"
          >
            <div style={{ padding: '16px 24px 32px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', padding: '14px 16px', fontSize: '16px', fontWeight: 500, color: '#C8D3E3', textDecoration: 'none', borderRadius: '10px', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#00B8FF'; e.currentTarget.style.background = 'rgba(0,184,255,0.08)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#C8D3E3'; e.currentTarget.style.background = 'transparent' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', marginTop: '12px', padding: '14px 24px', background: '#00B8FF', color: 'white', fontWeight: 600, fontSize: '15px', textAlign: 'center', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s' }}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .nav-brand-text { display: none; }
        .nav-desktop-links { display: none; }
        .nav-hamburger { display: block; }

        @media (min-width: 640px) {
          .nav-brand-text { display: block; }
        }

        @media (min-width: 1024px) {
          .nav-desktop-links { display: flex !important; align-items: center; }
          .nav-hamburger { display: none !important; }
          .nav-mobile-menu { display: none !important; }
        }
      `}</style>
    </motion.nav>
  )
}
