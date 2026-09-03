import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const cities = [
  { name: 'Lahore', x: 265, y: 175 },
  { name: 'Faisalabad', x: 240, y: 185 },
  { name: 'Multan', x: 235, y: 220 },
  { name: 'Sialkot', x: 280, y: 155 },
  { name: 'Gujrat', x: 265, y: 155 },
  { name: 'Gujranwala', x: 268, y: 148 },
  { name: 'Karachi', x: 200, y: 305 },
  { name: 'Peshawar', x: 250, y: 110 },
  { name: 'Quetta', x: 150, y: 210 },
]

const provinces = ['Punjab', 'Sindh', 'Khyber Pakhtunkhwa', 'Balochistan']

export default function Reach() {
  return (
    <Section id="reach" style={{ background: '#FFFFFF' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="Our Reach" title="Nationwide Reach." titleAccent="Local Support" description="500+ customers served across all four provinces of Pakistan." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center', maxWidth: '72rem', margin: '0 auto' }}>
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          <div style={{ background: '#F5F7FA', borderRadius: '24px', padding: '32px', border: '1px solid #E2E8F0' }}>
            <svg viewBox="0 0 400 400" style={{ width: '100%', height: 'auto', display: 'block' }}>
              <defs>
                <radialGradient id="pakGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1E5BB5" stopOpacity="0.1" />
                  <stop offset="100%" stopColor="#1E5BB5" stopOpacity="0" />
                </radialGradient>
              </defs>
              <circle cx="200" cy="200" r="180" fill="url(#pakGlow)" />

              {/* Simplified Pakistan outline */}
              <path
                d="M280,80 Q300,85 310,100 Q320,120 315,140 Q310,155 300,165 Q295,170 290,175 Q285,180 280,185 Q275,190 268,195 Q260,200 250,210 Q240,220 230,235 Q220,250 210,265 Q200,280 190,295 Q180,305 170,310 Q160,315 148,318 Q135,320 125,315 Q115,310 108,300 Q100,290 95,275 Q90,260 92,245 Q94,230 100,215 Q105,200 112,188 Q120,175 128,165 Q135,155 140,145 Q145,135 148,125 Q150,115 155,108 Q160,100 168,95 Q178,88 190,83 Q205,78 220,76 Q240,74 260,76 Z"
                fill="none" stroke="#1E5BB5" strokeWidth="2" opacity="0.3"
              />

              {/* City dots */}
              {cities.map((city) => (
                <g key={city.name}>
                  <circle cx={city.x} cy={city.y} r="8" fill="#1E5BB5" opacity="0.15" />
                  <circle cx={city.x} cy={city.y} r="4" fill="#1E5BB5" />
                  <circle cx={city.x} cy={city.y} r="1.5" fill="white" />
                </g>
              ))}
            </svg>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
          <div style={{ marginBottom: '32px' }}>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '3rem', color: '#1E5BB5', marginBottom: '8px' }}>500+</div>
            <p style={{ fontSize: '18px', color: '#5A6474' }}>Customers Served Across Pakistan</p>
          </div>

          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#1A1A2E', marginBottom: '12px' }}>Provinces Covered</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {provinces.map((p) => (
                <span key={p} style={{ padding: '6px 14px', background: '#E8F0FE', color: '#1E5BB5', borderRadius: '8px', fontSize: '13px', fontWeight: 500 }}>{p}</span>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: '#1A1A2E', marginBottom: '12px' }}>Key Cities</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {cities.map((city) => (
                <span key={city.name} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', padding: '6px 12px', background: 'white', border: '1px solid #E2E8F0', borderRadius: '8px', fontSize: '13px', color: '#5A6474' }}>
                  <MapPin size={12} style={{ color: '#1E5BB5' }} /> {city.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
