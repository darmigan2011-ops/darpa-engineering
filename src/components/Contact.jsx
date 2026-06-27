import { motion } from 'framer-motion'

const services = [
  'Sheet Metal Stampings',
  'Non-Ferrous Castings (Aluminium, Copper, Brass, Bronze)',
  'Tool Room Solutions',
  'Robotic Welding & Fabrication',
  'Design & Engineering (SolidWorks/AutoCAD)',
  'Export & Logistics',
]

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your inquiry. Our team will contact you within 24 hours.')
  }

  return (
    <section id="contact" style={{ padding: '120px 0', background: '#F8FAFC' }}>
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
            Get in Touch
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
            marginBottom: 16,
          }}>
            Let's Discuss Your Project
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: '#6B7280',
            maxWidth: 540,
            margin: '0 auto',
          }}>
            Ready to start your next manufacturing project? Reach out to our team for a consultation.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: 60,
          alignItems: 'start',
        }} className="contact-grid">
          {/* Left - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              borderRadius: 24,
              overflow: 'hidden',
              background: '#0B1727',
              aspectRatio: '16/10',
              marginBottom: 32,
              border: '1px solid rgba(8,169,232,0.1)',
              position: 'relative',
            }}>
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80"
                alt="DARPA Engineering facility"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: 0.8,
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(135deg, rgba(8,169,232,0.1), transparent)',
              }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: 'rgba(8,169,232,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#6B7280', marginBottom: 2 }}>India Office</p>
                  <p style={{ fontSize: 15, color: '#1A1A1A' }}>42-A3, SIPCOT Industrial Complex, SIPCOT-1, Hosur-635126, Tamil Nadu, INDIA</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: 'rgba(8,169,232,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#6B7280', marginBottom: 2 }}>Email</p>
                  <p style={{ fontSize: 15, color: '#1A1A1A' }}>baskar@darpaengi.com</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14 }}>
                <div style={{
                  width: 40,
                  height: 40,
                  borderRadius: 12,
                  background: 'rgba(8,169,232,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </div>
                <div>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, fontWeight: 600, color: '#6B7280', marginBottom: 2 }}>Phone (India)</p>
                  <p style={{ fontSize: 15, color: '#1A1A1A' }}>+91-979-000-9817</p>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: 14, marginTop: 8, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                <p style={{ fontSize: 13, color: '#6B7280', fontStyle: 'italic' }}>USA Office: 150 E B St Lbby #1810, Casper, WY 82601 | +001-510-403-1789</p>
              </div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(20px)',
              borderRadius: 24,
              padding: 40,
              border: '1px solid rgba(255,255,255,0.8)',
              boxShadow: '0 4px 30px rgba(0,0,0,0.04)',
            }}
          >
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input type="text" placeholder="Your Name" required style={inputStyle} />
                <input type="text" placeholder="Company" style={inputStyle} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <input type="email" placeholder="Email Address" required style={inputStyle} />
                <input type="tel" placeholder="Phone Number" style={inputStyle} />
              </div>
              <select style={inputStyle}>
                <option value="">Service Required</option>
                {services.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
              <textarea placeholder="Tell us about your project..." rows={4} required style={{ ...inputStyle, resize: 'vertical', minHeight: 100 }} />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, boxShadow: '0 8px 30px rgba(8,169,232,0.35)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 16,
                  fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(135deg, #08A9E8, #1A3A8A)',
                  padding: '16px 32px',
                  borderRadius: 100,
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(8,169,232,0.25)',
                  marginTop: 8,
                }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const inputStyle = {
  fontFamily: "'Inter', sans-serif",
  fontSize: 14,
  color: '#1A1A1A',
  background: '#fff',
  border: '1.5px solid rgba(0,0,0,0.06)',
  borderRadius: 12,
  padding: '14px 16px',
  outline: 'none',
  width: '100%',
  transition: 'border-color 0.3s',
}
