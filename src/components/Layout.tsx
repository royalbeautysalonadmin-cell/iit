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

export function SectionHeader({ tag, title, titleAccent, description }: { tag: string; title: string; titleAccent?: string; description: string }) {
  return (
    <div className="text-center-block" style={{ marginBottom: '3.5rem' }}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', fontSize: '13px', fontWeight: 500, color: '#1E5BB5', background: '#E8F0FE', marginBottom: '24px' }}>
        <span style={{ width: '6px', height: '6px', background: '#1E5BB5', borderRadius: '50%' }} />
        {tag}
      </span>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#1A1A2E', marginBottom: '24px', lineHeight: 1.1 }}>
        {title} {titleAccent && <span style={{ color: '#1E5BB5' }}>{titleAccent}</span>}
      </h2>
      <p style={{ fontSize: '18px', color: '#5A6474', lineHeight: 1.7 }}>
        {description}
      </p>
    </div>
  )
}
