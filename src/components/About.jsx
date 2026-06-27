import { motion } from 'framer-motion'

const milestones = [
  { year: '1998', event: 'Founded with a vision to revolutionize precision manufacturing' },
  { year: '2004', event: 'Expanded into aluminium casting capabilities' },
  { year: '2010', event: 'ISO 9001:2008 certification achieved' },
  { year: '2015', event: 'Opened second manufacturing facility' },
  { year: '2020', event: 'Industry 4.0 implementation across all plants' },
  { year: '2024', event: 'Global expansion serving 25+ countries' },
]

export default function About() {
  return (
    <section id="about" style={{ padding: '120px 0', background: '#F8FAFC' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          marginBottom: 100,
        }} className="about-grid">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
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
              About DARPA
            </span>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 44,
              fontWeight: 800,
              color: '#0B1727',
              letterSpacing: -1.5,
              marginBottom: 20,
              lineHeight: 1.15,
            }}>
              A Legacy of{' '}
              <span style={{ background: 'linear-gradient(135deg, #007BFF, #005FCC)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Manufacturing Excellence
              </span>
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.8,
              marginBottom: 16,
            }}>
              With over 25 years of experience, DARPA Engineering has established itself as a trusted partner in precision manufacturing. We combine traditional craftsmanship with modern technology to deliver components that exceed industry standards.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.8,
              marginBottom: 32,
            }}>
              Our state-of-the-art facility spans 150,000 sq ft and houses over 150 advanced machines, enabling us to handle projects of any scale with unwavering precision.
            </p>
            <div style={{ display: 'flex', gap: 40 }}>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36, fontWeight: 700, color: '#007BFF' }}>25+</p>
                <p style={{ fontSize: 14, color: '#6B7280' }}>Years of Excellence</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36, fontWeight: 700, color: '#007BFF' }}>150K</p>
                <p style={{ fontSize: 14, color: '#6B7280' }}>Sq Ft Facility</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36, fontWeight: 700, color: '#007BFF' }}>500+</p>
                <p style={{ fontSize: 14, color: '#6B7280' }}>Happy Clients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              background: 'linear-gradient(135deg, #0B1727, #0D2C54)',
              aspectRatio: '4/5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(0,123,255,0.1)',
            }}
          >
            <svg viewBox="0 0 400 500" style={{ width: '70%' }}>
              <defs>
                <linearGradient id="aboutGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007BFF" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#005FCC" stopOpacity="0.05" />
                </linearGradient>
              </defs>
              <rect x="40" y="40" width="320" height="40" rx="8" fill="rgba(0,123,255,0.08)" />
              <rect x="40" y="100" width="140" height="140" rx="16" fill="url(#aboutGrad)" stroke="rgba(0,123,255,0.15)" strokeWidth="1" />
              <rect x="200" y="100" width="160" height="60" rx="10" fill="rgba(0,123,255,0.06)" />
              <rect x="200" y="180" width="160" height="60" rx="10" fill="rgba(0,123,255,0.06)" />
              <rect x="40" y="270" width="320" height="8" rx="4" fill="rgba(0,123,255,0.08)" />
              <rect x="40" y="300" width="100" height="100" rx="12" fill="rgba(0,123,255,0.08)" />
              <rect x="160" y="300" width="200" height="45" rx="8" fill="rgba(0,123,255,0.06)" />
              <rect x="160" y="360" width="200" height="45" rx="8" fill="rgba(0,123,255,0.04)" />
              {/* Factory silhouette */}
              <rect x="60" y="430" width="30" height="50" rx="2" fill="rgba(0,123,255,0.15)" />
              <rect x="100" y="410" width="30" height="70" rx="2" fill="rgba(0,123,255,0.1)" />
              <rect x="140" y="400" width="30" height="80" rx="2" fill="rgba(0,123,255,0.15)" />
              <rect x="180" y="420" width="30" height="60" rx="2" fill="rgba(0,123,255,0.1)" />
              <rect x="60" y="435" width="150" height="3" fill="rgba(0,123,255,0.2)" />
            </svg>
          </motion.div>
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
        >
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 36,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1,
            marginBottom: 12,
          }}>
            Our Journey
          </h2>
          <p style={{ color: '#6B7280', fontSize: 16 }}>Milestones that defined our growth</p>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Timeline line */}
          <div style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: 2,
            background: 'linear-gradient(180deg, #007BFF, rgba(0,123,255,0.1))',
          }} />

          {milestones.map((item, i) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{
                display: 'flex',
                justifyContent: i % 2 === 0 ? 'flex-start' : 'flex-end',
                padding: '20px 0',
                position: 'relative',
              }}
            >
              <div style={{
                width: '45%',
                background: '#fff',
                borderRadius: 16,
                padding: 24,
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 4px 20px rgba(0,0,0,0.04)',
              }}>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#007BFF',
                  display: 'block',
                  marginBottom: 4,
                }}>{item.year}</span>
                <p style={{ fontSize: 15, color: '#4B5563', lineHeight: 1.6 }}>{item.event}</p>
              </div>
              {/* Dot */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 14,
                height: 14,
                borderRadius: '50%',
                background: '#007BFF',
                border: '3px solid #F8FAFC',
                boxShadow: '0 0 0 3px rgba(0,123,255,0.2)',
                zIndex: 1,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
