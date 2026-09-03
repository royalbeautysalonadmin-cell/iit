import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const articles = [
  {
    category: 'Printing Technology',
    title: 'Sublimation vs Direct Printing',
    excerpt: 'How sublimation works, how direct printing works, suitable fabrics, production volumes, colour performance, cost considerations — and which technology is suitable for which business.',
    readTime: '8 min read',
  },
  {
    category: 'Industry Trends',
    title: 'The Future of DTF Printing in the Garment Industry',
    excerpt: 'The growth of DTF, custom apparel, small and medium production runs, fashion brands, sportswear, print-on-demand — and why DTF is becoming increasingly important in Pakistan.',
    readTime: '6 min read',
  },
  {
    category: 'Technology Guide',
    title: 'What is DTG?',
    excerpt: 'Direct-to-Garment printing explained in simple terms — compared with DTF and sublimation. Understanding the differences to make the right choice for your business.',
    readTime: '5 min read',
  },
]

export default function Insights() {
  return (
    <Section id="insights" style={{ background: '#F5F7FA' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: '#E2E8F0' }} />
      <SectionHeader tag="Industry Insights" title="Knowledge" titleAccent="Hub" description="Educational resources to help you understand the printing technologies that matter for your business." />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
        {articles.map((article, i) => (
          <motion.article key={article.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ background: 'white', borderRadius: '16px', overflow: 'hidden', border: '1px solid #E2E8F0', transition: 'all 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.06)'; e.currentTarget.style.borderColor = '#1E5BB5' }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.borderColor = '#E2E8F0' }}
          >
            <div style={{ height: '8px', background: '#1E5BB5' }} />
            <div style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ padding: '4px 10px', background: '#E8F0FE', color: '#1E5BB5', borderRadius: '6px', fontSize: '12px', fontWeight: 500 }}>{article.category}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#9CA3AF' }}><BookOpen size={12} />{article.readTime}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '18px', color: '#1A1A2E', marginBottom: '12px', lineHeight: 1.4 }}>{article.title}</h3>
              <p style={{ fontSize: '14px', color: '#5A6474', lineHeight: 1.7, marginBottom: '20px' }}>{article.excerpt}</p>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 600, color: '#1E5BB5', textDecoration: 'none' }}
                onMouseEnter={(e) => { e.currentTarget.style.gap = '12px' }}
                onMouseLeave={(e) => { e.currentTarget.style.gap = '8px' }}
              >
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
