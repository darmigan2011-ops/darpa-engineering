import { motion } from 'framer-motion'

const steps = [
  { label: 'Design', icon: '✦' },
  { label: 'Tooling', icon: '⚙' },
  { label: 'Stamping', icon: '⬡' },
  { label: 'Casting', icon: '◈' },
  { label: 'Inspection', icon: '◎' },
  { label: 'Packaging', icon: '▣' },
  { label: 'Delivery', icon: '→' },
]

export default function Process() {
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
            Manufacturing Process
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
            marginBottom: 16,
          }}>
            From Concept to Delivery
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: '#6B7280',
            maxWidth: 540,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Our streamlined manufacturing process ensures quality at every step.
          </p>
        </motion.div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'relative',
          gap: 0,
        }} className="process-steps">
          {/* Background line */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '5%',
            right: '5%',
            height: 2,
            background: 'linear-gradient(90deg, #007BFF, rgba(0,123,255,0.1))',
            transform: 'translateY(-50%)',
            zIndex: 0,
          }} />

          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 12,
                position: 'relative',
                zIndex: 1,
                flex: 1,
              }}
            >
              <motion.div
                whileHover={{ scale: 1.15, boxShadow: '0 8px 30px rgba(0,123,255,0.3)' }}
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #007BFF, #005FCC)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontSize: 20,
                  boxShadow: '0 4px 15px rgba(0,123,255,0.2)',
                }}
              >
                {step.icon}
              </motion.div>
              <span style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 12,
                fontWeight: 600,
                color: '#4B5563',
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}>
                {step.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
