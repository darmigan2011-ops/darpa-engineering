import { motion } from 'framer-motion'

const milestones = [
  { year: '2011', event: 'DARPA Engineering founded in Hosur, Tamil Nadu, India' },
  { year: '2015', event: 'ISO 9001:2008 certification achieved' },
  { year: '2018', event: 'Expanded into non-ferrous castings with new furnace capacity' },
  { year: '2020', event: 'Crossed 80% export to USA & Germany markets' },
  { year: '2023', event: 'Upgraded to ISO 9001:2015 certification with Six Sigma processes' },
  { year: '2024', event: 'Global expansion with 15+ machines and 100+ international clients' },
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
              color: '#08A9E8',
              letterSpacing: 4,
              textTransform: 'uppercase',
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: 100,
              border: '1px solid rgba(8,169,232,0.2)',
              background: 'rgba(8,169,232,0.06)',
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
              True{' '}
              <span style={{ background: 'linear-gradient(135deg, #08A9E8, #1A3A8A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Engineering
              </span>{' '}
              Company
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.8,
              marginBottom: 16,
            }}>
              Started in 2011, DARPA Engineering is one of the leading manufacturers and exporters of Sheet Metal Stampings, Non-Ferrous Castings (Aluminium, Copper, Brass and Bronze) from India. We export more than 80% of our products to USA and Germany.
            </p>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 16,
              color: '#6B7280',
              lineHeight: 1.8,
              marginBottom: 32,
            }}>
              Located in SIPCOT Industrial Complex, Hosur, our facility houses 15+ advanced machines including power presses from 10 to 250 tons capacity, induction furnaces, and state-of-the-art tool room equipment to serve clients across Power T&D, Automotive and General Engineering sectors.
            </p>
            <div style={{ display: 'flex', gap: 40 }}>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36, fontWeight: 700, color: '#08A9E8' }}>14+</p>
                <p style={{ fontSize: 14, color: '#6B7280' }}>Years of Excellence</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36, fontWeight: 700, color: '#08A9E8' }}>$3M</p>
                <p style={{ fontSize: 14, color: '#6B7280' }}>Annual Turnover</p>
              </div>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 36, fontWeight: 700, color: '#08A9E8' }}>80%</p>
                <p style={{ fontSize: 14, color: '#6B7280' }}>Export to USA & EU</p>
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
              background: '#0B1727',
              aspectRatio: '4/5',
              border: '1px solid rgba(8,169,232,0.1)',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
              alt="DARPA Engineering facility"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                opacity: 0.7,
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(135deg, rgba(8,169,232,0.1), transparent)',
            }} />
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
            background: 'linear-gradient(180deg, #08A9E8, rgba(8,169,232,0.1))',
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
                  color: '#08A9E8',
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
                background: '#08A9E8',
                border: '3px solid #F8FAFC',
                boxShadow: '0 0 0 3px rgba(8,169,232,0.2)',
                zIndex: 1,
              }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
