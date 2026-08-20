import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Layout'

const regions = [
  { name: 'Pakistan', x: '68%', y: '38%', size: 12 }, { name: 'UAE', x: '58%', y: '42%', size: 8 },
  { name: 'Saudi Arabia', x: '55%', y: '40%', size: 8 }, { name: 'Turkey', x: '52%', y: '32%', size: 8 },
  { name: 'Germany', x: '48%', y: '28%', size: 6 }, { name: 'UK', x: '45%', y: '26%', size: 6 },
  { name: 'USA', x: '18%', y: '34%', size: 12 }, { name: 'Brazil', x: '28%', y: '62%', size: 6 },
  { name: 'South Africa', x: '52%', y: '68%', size: 6 }, { name: 'Australia', x: '82%', y: '68%', size: 6 },
  { name: 'Japan', x: '82%', y: '34%', size: 6 }, { name: 'Bangladesh', x: '72%', y: '40%', size: 6 },
]

const stats = [
  { label: 'Countries', value: '30+' }, { label: 'Active Clients', value: '500+' },
  { label: 'Shipments/Year', value: '200+' }, { label: 'Continents', value: '6' },
]

export default function GlobalPresence() {
  return (
    <Section>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'rgba(0,184,255,0.3)' }} />
      <SectionHeader tag="Global Presence" title="Worldwide" titleGradient="Reach" description="Delivering industrial solutions across 6 continents with a network of partners and distributors." />
      <motion.div initial={{ opacity: 0, scale: 0.98 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="glass-card" style={{ borderRadius: '24px', padding: 'clamp(24px, 4vw, 40px)', marginBottom: '48px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', aspectRatio: '2/1', minHeight: '250px' }}>
          <svg viewBox="0 0 1000 500" style={{ width: '100%', height: '100%', opacity: 0.2 }}>
            <ellipse cx="500" cy="250" rx="480" ry="220" fill="none" stroke="rgba(0,184,255,0.2)" strokeWidth="1" />
            <ellipse cx="500" cy="250" rx="350" ry="180" fill="none" stroke="rgba(0,184,255,0.1)" strokeWidth="0.5" />
            <ellipse cx="500" cy="250" rx="200" ry="140" fill="none" stroke="rgba(0,184,255,0.1)" strokeWidth="0.5" />
          </svg>
          {regions.map((region, i) => (
            <motion.div key={region.name} initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ position: 'absolute', left: region.x, top: region.y, transform: 'translate(-50%,-50%)' }}>
              <div style={{ width: region.size, height: region.size, borderRadius: '50%', background: '#00B8FF', boxShadow: '0 0 12px rgba(0,184,255,0.3)' }} />
              <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: '-32px', background: 'rgba(17,40,74,0.8)', padding: '4px 10px', borderRadius: '8px', fontSize: '11px', color: 'white', whiteSpace: 'nowrap', opacity: 0, transition: 'opacity 0.3s', pointerEvents: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')} className="map-tooltip">
                {region.name}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '20px' }}>
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card glow-hover" style={{ borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '1.875rem' }} className="text-gradient">{stat.value}</div>
            <div style={{ fontSize: '14px', color: '#C8D3E3', marginTop: '4px' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
