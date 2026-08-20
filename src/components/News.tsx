import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Clock } from 'lucide-react'
import { Section, SectionHeader } from './Layout'

const articles = [
  { category: 'Printing Technology', title: 'The Future of DTF Printing in Textile Manufacturing', excerpt: 'Direct-to-Film technology is revolutionizing the textile industry with its versatility.', date: 'Jan 15, 2026', readTime: '5 min', gradient: '#00B8FF' },
  { category: 'Sports Apparel', title: 'Sublimation vs Screen Printing: Which is Better?', excerpt: 'A comprehensive comparison of sublimation and screen printing for sportswear.', date: 'Jan 8, 2026', readTime: '7 min', gradient: '#1565C0' },
  { category: 'Machine Guide', title: 'Top 10 Things to Consider When Buying a Digital Printer', excerpt: 'Essential factors to evaluate before investing in digital textile printing.', date: 'Dec 28, 2025', readTime: '6 min', gradient: '#0B3D91' },
]

export default function News() {
  return (
    <Section id="news">
      <SectionHeader tag="Latest News" title="Industry" titleGradient="Insights" description="Stay updated with the latest trends in textile manufacturing and printing technology." />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '32px' }}>
        {articles.map((article, i) => (
          <motion.article key={article.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card" style={{ borderRadius: '16px', overflow: 'hidden', transition: 'all 0.3s' }}>
            <div style={{ height: '180px', background: article.gradient, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', bottom: '16px', left: '16px' }}>
                <span style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(8px)', borderRadius: '9999px', fontSize: '12px', color: 'white' }}>{article.category}</span>
              </div>
            </div>
            <div style={{ padding: '28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '12px', color: '#C8D3E3', marginBottom: '12px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={12} />{article.date}</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} />{article.readTime}</span>
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '16px', color: 'white', marginBottom: '8px', lineHeight: 1.4 }}>{article.title}</h3>
              <p style={{ fontSize: '14px', color: '#C8D3E3', lineHeight: 1.6, marginBottom: '20px' }}>{article.excerpt}</p>
              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '14px', fontWeight: 500, color: '#00B8FF', textDecoration: 'none' }}>
                Read More <ArrowRight size={16} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  )
}
