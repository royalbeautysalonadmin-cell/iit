import { motion } from 'framer-motion'
import { Phone, Wrench, Package, Droplets, Cpu, Users } from 'lucide-react'

const points = [
  { num: '01', icon: Phone, title: 'One-Call After-Sales', desc: 'One call, one support network — for technical assistance, troubleshooting, maintenance and operational support.' },
  { num: '02', icon: Wrench, title: 'Engineering at Your Doorstep', desc: 'Technical and engineering support delivered at the customer\'s doorstep, wherever possible.' },
  { num: '03', icon: Package, title: 'Genuine Spare Parts', desc: 'Availability and supply of essential spare parts to minimize production downtime.' },
  { num: '04', icon: Droplets, title: 'Reliable Consumables', desc: 'Continuous supply of inks, powders and other essential printing materials.' },
  { num: '05', icon: Cpu, title: 'Technology Selection', desc: 'Helping customers select the right technology for production requirements and budget.' },
  { num: '06', icon: Users, title: 'Long-Term Partnership', desc: 'Our objective isn\'t a one-time sale — it\'s a long-term relationship with every customer.' },
]

export default function Excellence() {
  return (
    <section style={{ background: '#0C2340', padding: '100px 0' }}>
      <div className="container-main">
        <div style={{ maxWidth: '640px', marginBottom: '56px' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#7FC1EA', display: 'block', marginBottom: '14px' }}>
            // Excellence Beyond the Machine
          </span>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 'clamp(28px, 3.4vw, 38px)', lineHeight: 1.15, color: '#ffffff', marginBottom: '14px' }}>
            Complete support beyond the machine.
          </h2>
          <p style={{ color: '#B9C8DA', fontSize: '16px', lineHeight: 1.6 }}>
            Our relationship with a customer does not end at installation. Every step of the journey — selection, installation, operation, troubleshooting, spare parts and consumables — is customer service.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
          {points.map((point, i) => (
            <motion.div key={point.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.06 }}
              style={{ borderTop: '2px solid #2D8FD1', paddingTop: '20px' }}
            >
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: '#8A97A6', marginBottom: '12px' }}>{point.num}</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: '17px', color: '#ffffff', marginBottom: '8px' }}>{point.title}</h3>
              <p style={{ fontSize: '14px', color: '#B9C8DA', lineHeight: 1.6 }}>{point.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
