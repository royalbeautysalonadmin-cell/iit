import { motion } from 'framer-motion'
import { Trophy, GraduationCap, Building2, Factory, Shirt, Monitor, Palette, Megaphone, Wrench, Scissors } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const industries = [
  { icon: Trophy, name: 'Sports Industry' },
  { icon: Palette, name: 'Fashion Brands' },
  { icon: GraduationCap, name: 'Universities' },
  { icon: Building2, name: 'Schools' },
  { icon: Shirt, name: 'Corporate Uniforms' },
  { icon: Scissors, name: 'Garment Factories' },
  { icon: Factory, name: 'Textile Mills' },
  { icon: Monitor, name: 'Printing Businesses' },
  { icon: Megaphone, name: 'Advertising' },
  { icon: Wrench, name: 'Manufacturing' },
]

export default function Industries() {
  return (
    <Section id="industries">
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'rgba(0,184,255,0.3)' }} />
      <SectionHeader tag="Industries We Serve" title="Powering" titleGradient="Every Industry" description="Our solutions serve a wide range of industries across the global textile and manufacturing ecosystem." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px' }}>
        {industries.map((industry, i) => (
          <motion.div key={industry.name} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }} whileHover={{ y: -6 }}
            className="glass-card glow-hover" style={{ borderRadius: '16px', padding: '24px', textAlign: 'center', cursor: 'default', transition: 'all 0.3s' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'rgba(0,184,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
              <industry.icon size={28} style={{ color: '#00B8FF' }} />
            </div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '14px', color: 'white' }}>{industry.name}</h4>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
