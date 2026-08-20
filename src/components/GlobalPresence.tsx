import { useState } from 'react'
import { motion } from 'framer-motion'
import { Section, SectionHeader } from './Layout'

const regions = [
  { name: 'Pakistan', x: 710, y: 210, r: 8, color: '#00B8FF', tag: 'HQ' },
  { name: 'UAE', x: 630, y: 240, r: 5, color: '#00B8FF' },
  { name: 'Saudi Arabia', x: 600, y: 230, r: 5, color: '#00B8FF' },
  { name: 'Turkey', x: 575, y: 185, r: 5, color: '#00B8FF' },
  { name: 'Germany', x: 530, y: 155, r: 5, color: '#00B8FF' },
  { name: 'UK', x: 500, y: 140, r: 5, color: '#00B8FF' },
  { name: 'USA', x: 220, y: 195, r: 8, color: '#00B8FF', tag: 'Key Market' },
  { name: 'Brazil', x: 320, y: 350, r: 5, color: '#00B8FF' },
  { name: 'South Africa', x: 565, y: 380, r: 5, color: '#00B8FF' },
  { name: 'Australia', x: 830, y: 380, r: 5, color: '#00B8FF' },
  { name: 'Japan', x: 840, y: 195, r: 5, color: '#00B8FF' },
  { name: 'Bangladesh', x: 740, y: 240, r: 5, color: '#00B8FF' },
]

const stats = [
  { label: 'Countries', value: '30+' },
  { label: 'Active Clients', value: '500+' },
  { label: 'Shipments/Year', value: '200+' },
  { label: 'Continents', value: '6' },
]

function ArcLine({ x1, y1, x2, y2, delay }: { x1: number; y1: number; x2: number; y2: number; delay: number }) {
  const midX = (x1 + x2) / 2
  const midY = Math.min(y1, y2) - Math.abs(x2 - x1) * 0.15
  return (
    <motion.path
      d={`M ${x1} ${y1} Q ${midX} ${midY} ${x2} ${y2}`}
      fill="none" stroke="rgba(0,184,255,0.25)" strokeWidth="1.2"
      initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
      viewport={{ once: true }} transition={{ duration: 1.2, delay, ease: 'easeInOut' }}
    />
  )
}

export default function GlobalPresence() {
  const [active, setActive] = useState<string | null>(null)
  const pak = regions.find(r => r.name === 'Pakistan')!

  return (
    <Section>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'rgba(0,184,255,0.3)' }} />
      <SectionHeader
        tag="Global Presence"
        title="Worldwide" titleGradient="Reach"
        description="Delivering industrial solutions across 6 continents with a network of partners and distributors."
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8 }}
        className="glass-card"
        style={{ borderRadius: '24px', padding: 'clamp(20px, 3vw, 36px)', marginBottom: '48px', position: 'relative', overflow: 'hidden' }}
      >
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 40%, rgba(0,184,255,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <svg viewBox="0 0 960 480" style={{ width: '100%', height: 'auto', display: 'block', position: 'relative' }}>
          <defs>
            <radialGradient id="dotGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#00B8FF" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#00B8FF" stopOpacity="0" />
            </radialGradient>
            <filter id="dotBlur">
              <feGaussianBlur stdDeviation="2" />
            </filter>
          </defs>

          {/* Simplified world map continents */}
          <g opacity="0.18" fill="none" stroke="rgba(0,184,255,0.5)" strokeWidth="0.8">
            {/* North America */}
            <path d="M120,80 Q150,60 200,70 Q260,75 280,100 Q300,130 290,160 Q280,180 260,200 Q240,220 220,240 Q200,260 180,260 Q160,250 150,230 Q130,200 120,170 Q110,140 110,110 Z" />
            <path d="M200,70 Q230,50 260,60 Q280,70 290,90 Q300,110 290,130 Q280,150 260,160 Q240,170 220,170 Q200,165 190,150 Q180,130 185,110 Q190,90 200,70" />
            {/* South America */}
            <path d="M260,280 Q280,270 300,280 Q320,300 330,330 Q340,360 330,390 Q320,410 300,420 Q280,415 270,400 Q260,380 255,360 Q250,340 250,320 Q250,300 260,280" />
            {/* Europe */}
            <path d="M470,80 Q490,70 510,75 Q530,80 540,100 Q550,120 540,140 Q530,155 510,160 Q490,160 480,150 Q470,140 465,120 Q460,100 470,80" />
            <path d="M510,75 Q530,65 550,70 Q570,80 575,100 Q578,120 570,140 Q560,155 545,160" />
            {/* Africa */}
            <path d="M480,200 Q510,190 540,200 Q560,220 570,250 Q580,280 575,310 Q570,340 555,360 Q540,380 520,385 Q500,380 485,365 Q470,345 465,320 Q460,290 465,260 Q470,230 480,200" />
            {/* Asia */}
            <path d="M580,60 Q620,50 660,55 Q700,60 740,70 Q780,80 810,100 Q830,120 840,150 Q845,180 835,200 Q820,220 800,230 Q770,240 740,245 Q710,250 680,240 Q650,230 630,210 Q610,190 600,170 Q585,140 580,110 Q578,85 580,60" />
            <path d="M740,245 Q770,260 790,280 Q810,300 820,330 Q825,350 815,370 Q800,385 780,380 Q760,370 750,350 Q740,330 735,310 Q730,290 735,270 Q738,255 740,245" />
            {/* Australia */}
            <path d="M790,340 Q810,330 835,335 Q855,345 865,365 Q870,385 860,400 Q845,410 825,405 Q805,395 795,380 Q785,365 790,340" />
          </g>

          {/* Connection arcs from Pakistan */}
          {regions.filter(r => r.name !== 'Pakistan').map((r, i) => (
            <ArcLine key={r.name} x1={pak.x} y1={pak.y} x2={r.x} y2={r.y} delay={i * 0.08} />
          ))}

          {/* Dots */}
          {regions.map((r) => {
            const isActive = active === r.name
            return (
              <g key={r.name} style={{ cursor: 'pointer' }}
                onMouseEnter={() => setActive(r.name)}
                onMouseLeave={() => setActive(null)}>
                {/* outer pulse ring */}
                <circle cx={r.x} cy={r.y} r={r.r * 2.5} fill="none" stroke="rgba(0,184,255,0.15)" strokeWidth="1">
                  <animate attributeName="r" values={`${r.r * 2};${r.r * 3.5};${r.r * 2}`} dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.3;0.08;0.3" dur="3s" repeatCount="indefinite" />
                </circle>
                {/* glow halo */}
                <circle cx={r.x} cy={r.y} r={r.r * 3} fill="url(#dotGlow)" opacity={isActive ? 0.8 : 0.4} />
                {/* main dot */}
                <circle cx={r.x} cy={r.y} r={r.r} fill={r.color} opacity={isActive ? 1 : 0.85}
                  style={{ filter: isActive ? 'drop-shadow(0 0 6px #00B8FF)' : 'none', transition: 'all 0.3s' }} />
                {/* HQ ring */}
                {r.tag && (
                  <circle cx={r.x} cy={r.y} r={r.r + 4} fill="none" stroke="#00B8FF" strokeWidth="1.5" opacity="0.6">
                    <animate attributeName="r" values={`${r.r + 3};${r.r + 6};${r.r + 3}`} dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.6;0.2;0.6" dur="2s" repeatCount="indefinite" />
                  </circle>
                )}
              </g>
            )
          })}

          {/* Labels — always visible */}
          {regions.map((r) => {
            const isActive = active === r.name
            const labelY = r.y < 240 ? r.y - r.r - 16 : r.y + r.r + 16
            return (
              <g key={`label-${r.name}`} opacity={isActive ? 1 : 0.75} style={{ transition: 'opacity 0.3s', pointerEvents: 'none' }}>
                <rect x={r.x - 36} y={labelY - 9} width="72" height="18" rx="6"
                  fill="rgba(8,22,46,0.85)" stroke={isActive ? 'rgba(0,184,255,0.5)' : 'rgba(0,184,255,0.15)'} strokeWidth="0.7"
                  style={{ transition: 'stroke 0.3s' }} />
                <text x={r.x} y={labelY + 3.5} textAnchor="middle" fill="white" fontSize="8.5" fontFamily="Inter, sans-serif" fontWeight="600">
                  {r.name}
                </text>
                {r.tag && (
                  <text x={r.x} y={labelY + 13} textAnchor="middle" fill="#00B8FF" fontSize="6" fontFamily="Inter, sans-serif" fontWeight="500">
                    {r.tag}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </motion.div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '20px' }}>
        {stats.map((stat, i) => (
          <motion.div key={stat.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card glow-hover"
            style={{ borderRadius: '16px', padding: '28px 20px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 0%, rgba(0,184,255,0.06) 0%, transparent 60%)', pointerEvents: 'none' }} />
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: '2rem' }} className="text-gradient">{stat.value}</div>
            <div style={{ fontSize: '14px', color: '#C8D3E3', marginTop: '4px' }}>{stat.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
