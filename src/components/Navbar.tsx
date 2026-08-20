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
        background: scrolled ? 'rgba(8,22,46,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,184,255,0.15)' : 'none',
      }}
    >
      <div className="container-main" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <a href="#home" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
          <img src="/logo.svg" alt="IIT" style={{ width: '44px', height: '44px', borderRadius: '12px' }} />
          <div style={{ display: 'none' }} className="sm-block">
            <span style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '17px', color: 'white', display: 'block', lineHeight: 1.2 }}>IIT Pakistan</span>
            <span style={{ fontSize: '9px', color: '#C8D3E3', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Industrial Innovation & Technology</span>
          </div>
        </a>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }} className="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              style={{ padding: '8px 16px', fontSize: '13px', fontWeight: 500, color: '#C8D3E3', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#00B8FF'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = '#C8D3E3'; e.currentTarget.style.background = 'transparent' }}
            >
              {link.name}
            </a>
          ))}
          <div style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.1)', margin: '0 8px' }} />
          <a
            href="#contact"
            style={{ padding: '10px 20px', background: '#00B8FF', color: 'white', fontWeight: 600, fontSize: '13px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s' }}
          >
            Get a Quote
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{ display: 'none', padding: '8px', color: 'white', background: 'none', border: 'none', cursor: 'pointer' }}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ background: 'rgba(8,22,46,0.97)', backdropFilter: 'blur(20px)', borderTop: '1px solid rgba(0,184,255,0.15)', overflow: 'hidden' }}
          >
            <div style={{ padding: '24px' }}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  style={{ display: 'block', padding: '12px 16px', fontSize: '16px', fontWeight: 500, color: '#C8D3E3', textDecoration: 'none', borderRadius: '8px', transition: 'all 0.3s' }}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                style={{ display: 'block', marginTop: '16px', padding: '12px 24px', background: '#00B8FF', color: 'white', fontWeight: 600, textAlign: 'center', borderRadius: '12px', textDecoration: 'none' }}
              >
                Get a Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .sm-block { display: none; }
        @media (min-width: 640px) { .sm-block { display: block !important; } }
        .nav-desktop { display: none; }
        @media (min-width: 1024px) { .nav-desktop { display: flex !important; } }
        .mobile-menu-btn { display: block !important; }
        @media (min-width: 1024px) { .mobile-menu-btn { display: none !important; } }
      `}</style>
    </motion.nav>
  )
}
