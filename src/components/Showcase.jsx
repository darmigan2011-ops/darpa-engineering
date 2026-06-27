import { motion } from 'framer-motion'

const items = [
  {
    title: 'Advanced Stamping Technology',
    desc: 'Our high-speed servo presses deliver precision sheet metal stampings with micron-level accuracy. From progressive dies to transfer stamping, we handle complex geometries with consistent repeatability.',
    stat: '2,000+ tons pressing capacity',
  },
  {
    title: 'Precision Aluminium Castings',
    desc: 'State-of-the-art casting facility producing high-quality aluminium components using gravity die casting, pressure die casting, and sand casting processes for automotive and industrial applications.',
    stat: '15,000+ tons annual casting capacity',
  },
  {
    title: 'Comprehensive Tool Room',
    desc: 'In-house tool room equipped with 5-axis CNC, wire EDM, and CMM inspection. We design, develop, and maintain precision tooling to ensure optimal production efficiency.',
    stat: '150+ skilled toolmakers & engineers',
  },
]

export default function Showcase() {
  return (
    <section style={{ padding: '120px 0', background: '#F8FAFC' }}>
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
            Manufacturing Showcase
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
          }}>
            Our Capabilities in Action
          </h2>
        </motion.div>

        {items.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: 80,
              alignItems: 'center',
              marginBottom: 100,
              direction: i % 2 === 1 ? 'rtl' : 'ltr',
            }}
            className="showcase-row"
          >
            <div style={{ direction: 'ltr' }}>
              <div style={{
                borderRadius: 24,
                overflow: 'hidden',
                background: 'linear-gradient(135deg, #0B1727, #0D2C54)',
                aspectRatio: '4/3',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '1px solid rgba(0,123,255,0.1)',
                position: 'relative',
              }}>
                <svg viewBox="0 0 400 300" style={{ width: '70%' }}>
                  <defs>
                    <linearGradient id={`showGrad${i}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#007BFF" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#005FCC" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                  {i === 0 && (
                    <>
                      <rect x="30" y="40" width="340" height="30" rx="6" fill="rgba(0,123,255,0.1)" />
                      <rect x="30" y="90" width="160" height="160" rx="16" fill={`url(#showGrad0)`} stroke="rgba(0,123,255,0.15)" strokeWidth="1" />
                      <rect x="210" y="90" width="160" height="70" rx="10" fill="rgba(0,123,255,0.06)" />
                      <rect x="210" y="180" width="160" height="70" rx="10" fill="rgba(0,123,255,0.06)" />
                      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
                        const rad = (angle * Math.PI) / 180
                        const cx = 110, cy = 170
                        return <line key={angle} x1={cx + 50 * Math.cos(rad)} y1={cy + 50 * Math.sin(rad)} x2={cx + 65 * Math.cos(rad)} y2={cy + 65 * Math.sin(rad)} stroke="rgba(0,123,255,0.15)" strokeWidth="1.5" />
                      })}
                      <circle cx="110" cy="170" r="40" fill="none" stroke="rgba(0,123,255,0.15)" strokeWidth="1.5" />
                      <circle cx="110" cy="170" r="15" fill="rgba(0,123,255,0.1)" />
                    </>
                  )}
                  {i === 1 && (
                    <>
                      <rect x="30" y="30" width="160" height="240" rx="16" fill={`url(#showGrad1)`} stroke="rgba(0,123,255,0.15)" strokeWidth="1" />
                      <rect x="210" y="30" width="160" height="110" rx="12" fill="rgba(0,123,255,0.08)" />
                      <rect x="210" y="160" width="160" height="110" rx="12" fill="rgba(0,123,255,0.06)" />
                      <rect x="30" y="290" width="340" height="3" rx="1" fill="rgba(0,123,255,0.1)" />
                    </>
                  )}
                  {i === 2 && (
                    <>
                      <rect x="30" y="30" width="340" height="8" rx="4" fill="rgba(0,123,255,0.1)" />
                      <rect x="30" y="55" width="100" height="100" rx="12" fill={`url(#showGrad2)`} stroke="rgba(0,123,255,0.15)" strokeWidth="1" />
                      <rect x="150" y="55" width="100" height="100" rx="12" fill="rgba(0,123,255,0.08)" stroke="rgba(0,123,255,0.1)" strokeWidth="1" />
                      <rect x="270" y="55" width="100" height="100" rx="12" fill="rgba(0,123,255,0.06)" stroke="rgba(0,123,255,0.1)" strokeWidth="1" />
                      <rect x="30" y="180" width="340" height="80" rx="12" fill="rgba(0,123,255,0.04)" />
                    </>
                  )}
                </svg>
              </div>
            </div>

            <div style={{ direction: 'ltr' }}>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 28,
                fontWeight: 700,
                color: '#0B1727',
                letterSpacing: -0.5,
                marginBottom: 16,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 16,
                color: '#6B7280',
                lineHeight: 1.8,
                marginBottom: 20,
              }}>
                {item.desc}
              </p>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '8px 16px',
                background: 'rgba(0,123,255,0.06)',
                borderRadius: 100,
                border: '1px solid rgba(0,123,255,0.1)',
              }}>
                <span style={{ fontSize: 14, color: '#007BFF', fontWeight: 600 }}>⬡</span>
                <span style={{ fontSize: 13, color: '#007BFF', fontWeight: 500 }}>{item.stat}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
