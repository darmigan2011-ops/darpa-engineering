import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What industries does DARPA Engineering serve?',
    a: 'We serve automotive, industrial, heavy engineering, electrical, renewable energy, and OEM manufacturing sectors with precision components and tooling solutions.',
  },
  {
    q: 'What quality certifications does DARPA hold?',
    a: 'DARPA Engineering is ISO 9001:2015 certified with rigorous quality management systems. We also comply with industry-specific standards for automotive and industrial clients.',
  },
  {
    q: 'What is the typical lead time for stamping projects?',
    a: 'Lead times vary based on complexity and volume. Typical tooling development takes 4-8 weeks, with production runs scheduled according to client requirements. Contact us for specific timelines.',
  },
  {
    q: 'Does DARPA offer design and engineering support?',
    a: 'Yes, our engineering team provides comprehensive design support, including DFM analysis, FEA simulation, prototyping, and process optimization to ensure manufacturability and cost efficiency.',
  },
  {
    q: 'What is the minimum order quantity?',
    a: 'We accommodate projects of all scales, from prototype runs to high-volume production. Our flexible manufacturing setup allows us to handle both small batch and mass production efficiently.',
  },
  {
    q: 'How does DARPA ensure quality control?',
    a: 'We employ a multi-stage quality control process including in-process inspection, CMM measurement, tensile testing, and final dimensional validation. Our QC lab is equipped with state-of-the-art inspection equipment.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section style={{ padding: '120px 0', background: '#fff' }}>
      <div className="container" style={{ maxWidth: 800 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: 60 }}
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
            FAQ
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
          }}>
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              style={{
                borderRadius: 16,
                border: '1px solid rgba(0,0,0,0.06)',
                overflow: 'hidden',
                background: open === i ? 'rgba(0,123,255,0.02)' : '#fff',
                transition: 'all 0.3s',
              }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '20px 24px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#0B1727',
                  textAlign: 'left',
                  gap: 16,
                }}
              >
                <span>{faq.q}</span>
                <motion.span
                  animate={{ rotate: open === i ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    fontSize: 22,
                    color: '#007BFF',
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                    style={{ overflow: 'hidden' }}
                  >
                    <div style={{
                      padding: '0 24px 20px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: 15,
                      color: '#6B7280',
                      lineHeight: 1.8,
                    }}>
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
