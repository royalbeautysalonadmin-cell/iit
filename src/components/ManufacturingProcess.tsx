import { motion } from 'framer-motion'
import { MessageSquare, Palette, CheckCircle2, Factory, Scan, Package, Truck, MapPin } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const steps = [
  { icon: MessageSquare, title: 'Consultation', desc: 'Understanding your requirements' },
  { icon: Palette, title: 'Design', desc: 'Creating custom designs' },
  { icon: CheckCircle2, title: 'Approval', desc: 'Review and finalize' },
  { icon: Factory, title: 'Production', desc: 'Precision manufacturing' },
  { icon: Scan, title: 'Quality Check', desc: 'Rigorous testing' },
  { icon: Package, title: 'Packaging', desc: 'Secure packaging' },
  { icon: Truck, title: 'Shipping', desc: 'Global logistics' },
  { icon: MapPin, title: 'Delivery', desc: 'On-time delivery' },
]

export default function ManufacturingProcess() {
  return (
    <Section>
      <SectionHeader tag="Our Process" title="Manufacturing" titleGradient="Process" description="A streamlined process from initial consultation to final delivery." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '20px' }}>
        {steps.map((step, i) => (
          <motion.div key={step.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass-card" style={{ borderRadius: '16px', padding: '20px', textAlign: 'center', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '20px', height: '20px', borderRadius: '50%', background: 'rgba(0,184,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '10px', fontWeight: 'bold', color: '#00B8FF' }}>{i + 1}</div>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(0,184,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <step.icon size={24} style={{ color: '#00B8FF' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '13px', color: 'white', marginBottom: '4px' }}>{step.title}</h4>
            <p style={{ fontSize: '11px', color: '#C8D3E3' }}>{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
