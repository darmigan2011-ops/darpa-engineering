import { motion } from 'framer-motion'

const features = [
  {
    title: 'Quality Manufacturing',
    desc: 'ISO-certified processes with rigorous quality control at every stage of production to ensure zero-defect delivery.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
  },
  {
    title: 'Advanced Machinery',
    desc: '150+ state-of-the-art CNC machines, presses and casting equipment with Industry 4.0 integration for smart manufacturing.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /><line x1="20" y1="9" x2="23" y2="9" /><line x1="20" y1="14" x2="23" y2="14" /><line x1="1" y1="9" x2="4" y2="9" /><line x1="1" y1="14" x2="4" y2="14" />
      </svg>
    ),
  },
  {
    title: 'On-Time Delivery',
    desc: 'Reliable production scheduling and logistics ensure your components arrive exactly when needed, every time.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: 'Expert Engineering Team',
    desc: 'Highly skilled engineers with decades of combined experience in tool design, process optimization and manufacturing.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#007BFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
]

export default function WhyChoose() {
  return (
    <section style={{ padding: '120px 0', background: '#fff' }}>
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
            Why DARPA
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
            marginBottom: 16,
          }}>
            Why Choose DARPA Engineering
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: '#6B7280',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            We combine advanced technology with decades of expertise to deliver manufacturing excellence.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }} className="features-grid">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              style={{
                background: '#fff',
                borderRadius: 24,
                padding: 36,
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                cursor: 'default',
                textAlign: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(0,123,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(0,123,255,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)'
              }}
            >
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: 20,
                  background: 'rgba(0,123,255,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                }}
              >
                {feature.icon}
              </motion.div>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 18,
                fontWeight: 700,
                color: '#0B1727',
                marginBottom: 10,
              }}>
                {feature.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: '#6B7280',
                lineHeight: 1.7,
              }}>
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
