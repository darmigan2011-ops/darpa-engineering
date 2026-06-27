import { motion } from 'framer-motion'
import { useState } from 'react'

const images = [
  { id: 1, label: 'CNC Machining Center', size: 'large', url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80' },
  { id: 2, label: 'Quality Inspection Lab', size: 'small', url: 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80' },
  { id: 3, label: 'Press Shop Floor', size: 'small', url: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80' },
  { id: 4, label: 'Casting Facility', size: 'medium', url: 'https://images.unsplash.com/photo-1580128660010-fd027e1e5878?w=600&q=80' },
  { id: 5, label: 'Tool Room', size: 'small', url: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80' },
  { id: 6, label: 'Assembly Line', size: 'small', url: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80' },
  { id: 7, label: 'Warehouse & Logistics', size: 'medium', url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  { id: 8, label: 'Manufacturing Facility', size: 'large', url: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80' },
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
                background: '#0B1727',
              }}
            >
              <img
                src={img.url}
                alt={img.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  position: 'absolute',
                  inset: 0,
                }}
                loading="lazy"
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                display: 'flex',
                alignItems: 'flex-end',
                padding: 20,
                transition: 'background 0.3s',
              }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(to top, rgba(0,0,0,0.7), rgba(0,0,0,0.2))' }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
              >
                <div>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#fff',
                    opacity: 0.9,
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
                maxWidth: 800,
                width: '100%',
                aspectRatio: '4/3',
                borderRadius: 20,
                overflow: 'hidden',
                background: '#0B1727',
                position: 'relative',
              }}
            >
              <img
                src={lightbox.url}
                alt={lightbox.label}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: 20,
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
                color: '#fff',
              }}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 600 }}>{lightbox.label}</p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, opacity: 0.6 }}>Click anywhere to close</p>
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
