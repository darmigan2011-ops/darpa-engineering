import { motion } from 'framer-motion'
import { useState } from 'react'

const images = [
  { id: 1, label: 'CNC Machining Center', size: 'large' },
  { id: 2, label: 'Quality Inspection Lab', size: 'small' },
  { id: 3, label: 'Press Shop Floor', size: 'small' },
  { id: 4, label: 'Casting Facility', size: 'medium' },
  { id: 5, label: 'Tool Room', size: 'small' },
  { id: 6, label: 'Assembly Line', size: 'small' },
  { id: 7, label: 'Warehouse & Logistics', size: 'medium' },
  { id: 8, label: 'R&D Center', size: 'large' },
]

const gradients = [
  'linear-gradient(135deg, #007BFF, #005FCC)',
  'linear-gradient(135deg, #0D2C54, #007BFF)',
  'linear-gradient(135deg, #005FCC, #0D2C54)',
  'linear-gradient(135deg, #007BFF, #0B1727)',
  'linear-gradient(135deg, #0B1727, #005FCC)',
  'linear-gradient(135deg, #005FCC, #007BFF)',
  'linear-gradient(135deg, #0D2C54, #005FCC)',
  'linear-gradient(135deg, #007BFF, #0D2C54)',
]

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

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
            Factory Gallery
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
          }}>
            Inside Our Facility
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gridAutoRows: 220,
          gap: 16,
        }} className="gallery-grid">
          {images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              whileHover={{ scale: 1.03, zIndex: 2 }}
              onClick={() => setLightbox(img)}
              style={{
                borderRadius: 20,
                overflow: 'hidden',
                cursor: 'pointer',
                position: 'relative',
                gridColumn: img.size === 'large' ? 'span 2' : 'span 1',
                gridRow: img.size === 'large' ? 'span 2' : img.size === 'medium' ? 'span 2' : 'span 1',
                background: gradients[i],
              }}
            >
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: 20,
                transition: 'background 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.35)' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,0,0,0.2)' }}
              >
                <div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#fff',
                    opacity: 0.8,
                  }}>
                    {img.label}
                  </span>
                  <svg style={{ marginTop: 6 }} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setLightbox(null)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 99999,
            padding: 40,
            cursor: 'pointer',
          }}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            style={{
              maxWidth: 600,
              width: '100%',
              aspectRatio: '4/3',
              borderRadius: 20,
              background: gradients[lightbox.id % gradients.length],
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div style={{ textAlign: 'center', color: '#fff' }}>
              <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 22, fontWeight: 600, marginBottom: 8 }}>
                {lightbox.label}
              </p>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, opacity: 0.6 }}>
                Click anywhere to close
              </p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); setLightbox(null) }}
              style={{
                position: 'absolute',
                top: 16,
                right: 16,
                background: 'rgba(255,255,255,0.1)',
                border: 'none',
                borderRadius: '50%',
                width: 40,
                height: 40,
                color: '#fff',
                fontSize: 20,
                cursor: 'pointer',
              }}
            >
              ✕
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
