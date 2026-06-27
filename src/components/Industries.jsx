import { motion } from 'framer-motion'

const industries = [
  { name: 'Automotive', desc: 'Precision components for passenger vehicles, commercial trucks and electric vehicles.' },
  { name: 'Industrial', desc: 'Heavy machinery and industrial equipment components built to last.' },
  { name: 'Heavy Engineering', desc: 'Large-scale engineering components for infrastructure and construction.' },
  { name: 'Electrical', desc: 'Enclosures, busbars and precision electrical components.' },
  { name: 'Renewable Energy', desc: 'Components for solar, wind and energy storage systems.' },
  { name: 'OEM Manufacturing', desc: 'Original equipment manufacturing with full design-to-delivery capability.' },
]

const colors = ['rgba(0,123,255,0.08)', 'rgba(0,123,255,0.04)', 'rgba(0,123,255,0.06)', 'rgba(0,123,255,0.03)', 'rgba(0,123,255,0.07)', 'rgba(0,123,255,0.05)']

export default function Industries() {
  return (
    <section id="industries" style={{ padding: '120px 0', background: '#fff' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 72 }}
        >
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            fontWeight: 600,
            color: '#007BFF',
            letterSpacing: 4,
            textTransform: 'uppercase',
            display: 'inline-block',
            padding: '6px 16px',
            borderRadius: 100,
            border: '1px solid rgba(0,123,255,0.2)',
            background: 'rgba(0,123,255,0.06)',
            marginBottom: 16,
          }}>
            Industries We Serve
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
            marginBottom: 16,
          }}>
            Trusted Across Sectors
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: '#6B7280',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Our manufacturing expertise serves a diverse range of industries worldwide.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="industries-grid">
          {industries.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.01 }}
              style={{
                borderRadius: 24,
                padding: 40,
                background: colors[i],
                border: '1px solid rgba(0,123,255,0.08)',
                cursor: 'default',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(0,123,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(0,123,255,0.2)'
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,123,255,0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = colors[i]
                e.currentTarget.style.borderColor = 'rgba(0,123,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: '#0B1727',
                marginBottom: 10,
              }}>
                {item.name}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: '#6B7280',
                lineHeight: 1.7,
              }}>
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
