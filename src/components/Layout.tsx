import type { ReactNode } from 'react'

export function Section({ id, children, style }: { id?: string; children: ReactNode; style?: React.CSSProperties }) {
  return (
    <section id={id} className="section-block" style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <div className="container-main" style={{ position: 'relative', zIndex: 10 }}>
        {children}
      </div>
    </section>
  )
}

export function SectionHeader({ tag, title, titleGradient, description }: { tag: string; title: string; titleGradient?: string; description: string }) {
  return (
    <div className="text-center-block" style={{ marginBottom: '3.5rem' }}>
      <span className="glass-card" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', fontSize: '14px', color: '#00B8FF', marginBottom: '24px' }}>
        <span style={{ width: '8px', height: '8px', background: '#00B8FF', borderRadius: '50%' }} />
        {tag}
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'white', marginBottom: '24px', lineHeight: 1.1 }}>
        {title} {titleGradient && <span className="text-gradient">{titleGradient}</span>}
      </h2>
      <p style={{ fontSize: '18px', color: '#C8D3E3', lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  )
}
