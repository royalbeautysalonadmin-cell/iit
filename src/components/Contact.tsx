import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Phone, Mail, MapPin, MessageCircle, Clock } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', subject: '', message: '', type: 'general' })
  const [sent, setSent] = useState(false)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const typeLabels: Record<string, string> = { general: 'General Inquiry', machine: 'Machine Purchase', partner: 'Partnership', support: 'Technical Support', quote: 'Request a Quote' }
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      form.company && `Company: ${form.company}`,
      `Inquiry Type: ${typeLabels[form.type] || form.type}`,
      '',
      form.message,
    ].filter(Boolean).join('\n')
    const mailto = `mailto:info@iitpakistan.com?subject=${encodeURIComponent(`[${typeLabels[form.type] || 'Inquiry'}] ${form.subject}`)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setForm({ name: '', email: '', phone: '', company: '', subject: '', message: '', type: 'general' })
  }

  const inputStyle: React.CSSProperties = { width: '100%', padding: '12px 16px', background: 'white', border: '1px solid #E2E8F0', borderRadius: '10px', color: '#1A1A2E', fontSize: '15px', outline: 'none', transition: 'all 0.2s', boxSizing: 'border-box' as const }
  const labelStyle: React.CSSProperties = { fontSize: '13px', fontWeight: 500, color: '#5A6474', marginBottom: '6px', display: 'block' }

  const items = [
    { icon: Phone, label: 'Phone', value: '+92 300 8576668', href: 'tel:+923008576668' },
    { icon: MessageCircle, label: 'WhatsApp', value: '+92 300 8576668', href: 'https://wa.me/923008576668' },
    { icon: Mail, label: 'Email', value: 'info@iitpakistan.com', href: 'mailto:info@iitpakistan.com' },
    { icon: MapPin, label: 'Office', value: 'Lahore, Punjab, Pakistan', href: '#' },
    { icon: Clock, label: 'Hours', value: 'Mon - Sat: 9AM - 6PM', href: '#' },
  ]

  return (
    <Section id="contact" style={{ background: '#FFFFFF' }}>
      <SectionHeader tag="Contact Us" title="Tell Us Your" titleAccent="Requirement" description="Whatever your printing requirement, tell us what you need. We will help you find the right technology for your application, production volume and budget." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <div style={{ background: '#F5F7FA', borderRadius: '16px', padding: '20px', border: '1px solid #E2E8F0', marginBottom: '8px' }}>
            <p style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px', color: '#1A1A2E', marginBottom: '4px' }}>Business Director</p>
            <p style={{ fontSize: '15px', color: '#1E5BB5', fontWeight: 600 }}>Tanveer Ahmad</p>
          </div>
          {items.map((item, i) => (
            <motion.a key={item.label} href={item.href} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', padding: '16px', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.2s', background: '#F5F7FA', border: '1px solid #E2E8F0' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#1E5BB5' }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#E2E8F0' }}
            >
              <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <item.icon size={18} style={{ color: '#1E5BB5' }} />
              </div>
              <div>
                <span style={labelStyle}>{item.label}</span>
                <p style={{ color: '#1A1A2E', fontWeight: 500, fontSize: '14px', marginTop: '2px' }}>{item.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div style={{ background: '#F5F7FA', borderRadius: '24px', padding: 'clamp(24px, 4vw, 40px)', border: '1px solid #E2E8F0' }}>
            {sent ? (
              <div style={{ textAlign: 'center', padding: '48px 0' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#E8F0FE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}><Send size={28} style={{ color: '#1E5BB5' }} /></div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.25rem', color: '#1A1A2E', marginBottom: '8px' }}>Opening Your Email Client</h3>
                <p style={{ color: '#5A6474', fontSize: '14px' }}>Please send the email to complete your inquiry. We respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
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
                    <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={{ ...inputStyle, cursor: 'pointer' }}>
                      <option value="general">General Inquiry</option>
                      <option value="machine">Machine Purchase</option>
                      <option value="quote">Request a Quote</option>
                      <option value="partner">Partnership</option>
                      <option value="support">Technical Support</option>
                    </select>
                  </div>
                  <div><label style={labelStyle}>Subject *</label><input required value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} style={inputStyle} placeholder="Subject" /></div>
                </div>
                <div><label style={labelStyle}>Message *</label><textarea required rows={4} value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ ...inputStyle, resize: 'none' as const }} placeholder="Tell us about your printing requirement..." /></div>
                <button type="submit" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '14px 32px', background: '#1E5BB5', color: 'white', fontWeight: 600, borderRadius: '12px', border: 'none', cursor: 'pointer', fontSize: '14px', transition: 'all 0.2s', width: '100%' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#14427A' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#1E5BB5' }}>
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
