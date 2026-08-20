import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, MessageCircle, Clock, Globe2 } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '', type: 'general' })
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); setTimeout(() => setSent(false), 5000); setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '', type: 'general' }) }
  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: 'white', fontSize: '14px', outline: 'none', transition: 'all 0.3s' }
  const labelStyle: React.CSSProperties = { fontSize: '11px', color: '#C8D3E3', textTransform: 'uppercase' as const, letterSpacing: '0.1em', marginBottom: '6px', display: 'block' }

  const items = [
    { icon: Phone, label: 'Phone', value: '+92 306-1176766', href: 'tel:+923061176766' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+92 306-1176766', href: 'https://wa.me/923061176766' },
    { icon: Mail, label: 'Email', value: 'info@iitpakistan.com', href: 'mailto:info@iitpakistan.com' },
    { icon: MapPin, label: 'Office', value: 'Lahore, Punjab, Pakistan', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9AM - 6PM', href: '#' },
    { icon: Globe2, label: 'Website', value: 'www.iitpakistan.com', href: '#' },
  ]

  return (
    <Section id="contact">
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '800px', height: '800px', background: 'rgba(11,61,145,0.2)', borderRadius: '50%', filter: 'blur(200px)' }} />
      <SectionHeader tag="Contact Us" title="Get in" titleGradient="Touch" description="Ready to start your project? Contact us for inquiries, quotations, or partnership opportunities." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {items.map((item, i) => (
            <motion.a key={item.label} href={item.href} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              className="glass-card" style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', borderRadius: '16px', textDecoration: 'none', transition: 'all 0.3s' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(0,184,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <item.icon size={18} style={{ color: '#00B8FF' }} />
              </div>
              <div>
                <span style={{ ...labelStyle }}>{item.label}</span>
                <p style={{ color: 'white', fontWeight: 500, fontSize: '14px', marginTop: '2px' }}>{item.value}</p>
              </div>
            </motion.a>
          ))}
          <div style={{ display: 'flex', gap: '8px', paddingTop: '8px' }}>
            {['Facebook', 'Instagram', 'LinkedIn', 'YouTube'].map(s => (
              <a key={s} href="#" style={{ padding: '6px 12px', borderRadius: '8px', fontSize: '12px', color: '#C8D3E3', textDecoration: 'none', transition: 'all 0.3s', background: 'rgba(17,40,74,0.6)', border: '1px solid rgba(0,184,255,0.15)' }}>{s}</a>
            ))}
          </div>
        </div>
        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div className="glass-card" style={{ borderRadius: '24px', padding: 'clamp(24px, 4vw, 40px)' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(0,184,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}><Send size={28} style={{ color: '#00B8FF' }} /></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: 'white', marginBottom: '8px' }}>Message Sent!</h3>
                <p style={{ color: '#C8D3E3', fontSize: '14px' }}>We will respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                  <div><label style={labelStyle}>Full Name *</label><input required value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} placeholder="Your name" /></div>
                  <div><label style={labelStyle}>Email *</label><input type="email" required value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} placeholder="your@email.com" /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                  <div><label style={labelStyle}>Phone</label><input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle} placeholder="+92 xxx-xxxxxxx" /></div>
                  <div><label style={labelStyle}>Company</label><input value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} style={inputStyle} placeholder="Company name" /></div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-grid">
                  <div><label style={labelStyle}>Inquiry Type</label>
                    <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={{ ...inputStyle, appearance: 'auto' as any }}>
                      <option value="general" className="bg-dark-bg">General Inquiry</option>
                      <option value="sportswear" className="bg-dark-bg">Sportswear Order</option>
                      <option value="machine" className="bg-dark-bg">Machine Purchase</option>
                      <option value="dealer" className="bg-dark-bg">Become a Dealer</option>
                      <option value="support" className="bg-dark-bg">Technical Support</option>
                    </select>
                  </div>
                  <div><label style={labelStyle}>Subject *</label><input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={inputStyle} placeholder="Subject" /></div>
                </div>
                <div><label style={labelStyle}>Message *</label><textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'none' as const }} placeholder="Tell us about your project..." /></div>
                <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 32px', background: '#00B8FF', color: 'white', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '14px', transition: 'all 0.3s', alignSelf: 'flex-start' }}>
                  <Send size={16} /> Send Message
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
      <style>{`@media (max-width: 640px) { .form-grid { grid-template-columns: 1fr !important; } }`}</style>
    </Section>
  )
}
