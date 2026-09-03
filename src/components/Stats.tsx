import { motion } from 'framer-motion'

const stats = [
  { value: '500+', label: 'Customers Served Across Pakistan' },
  { value: '4', label: 'Provinces Covered' },
  { value: '9+', label: 'Major Cities' },
  { value: '6+', label: 'Technology Platforms' },
]

export default function Stats() {
  return (
    <section style={{ background: '#F5F7FA', borderTop: '1px solid #E2E8F0', borderBottom: '1px solid #E2E8F0', padding: '3rem 0' }}>
      <div className="container-main">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '32px', textAlign: 'center' }} className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', color: '#1E5BB5', marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: '#5A6474' }}>{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
