import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Robert Chen',
    role: 'Procurement Director, AutoTech Industries',
    content: 'DARPA Engineering has been our trusted manufacturing partner for over a decade. Their precision stampings consistently exceed our quality expectations, and their on-time delivery record is unmatched.',
    rating: 5,
  },
  {
    name: 'Sarah Mitchell',
    role: 'CEO, Mitchell Manufacturing Group',
    content: 'The level of engineering support DARPA provides is exceptional. They don\'t just manufacture parts — they help optimize our designs for better performance and cost efficiency.',
    rating: 5,
  },
  {
    name: 'James Park',
    role: 'Operations Manager, GreenEnergy Corp',
    content: 'We chose DARPA for our aluminium casting needs and have been impressed by their quality control and consistent output. A world-class manufacturing partner.',
    rating: 5,
  },
  {
    name: 'Maria Santos',
    role: 'VP Supply Chain, Industrial Parts Ltd',
    content: 'DARPA\'s tool room capabilities saved us months of lead time. Their team\'s expertise in tool design and development is truly world-class.',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section style={{ padding: '120px 0', background: '#0B1727', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(8,169,232,0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(8,169,232,0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
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
            Testimonials
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#fff',
            letterSpacing: -1.5,
            marginBottom: 16,
          }}>
            Trusted by Industry Leaders
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: 'rgba(255,255,255,0.5)',
            maxWidth: 540,
            margin: '0 auto',
          }}>
            Hear from our global partners about their experience working with DARPA.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 24,
        }} className="testimonials-grid">
          {testimonials.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                borderRadius: 24,
                padding: 32,
                border: '1px solid rgba(255,255,255,0.06)',
                cursor: 'default',
                transition: 'all 0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                e.currentTarget.style.borderColor = 'rgba(8,169,232,0.2)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'rgba(255,255,255,0.04)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
              }}
            >
              {/* Stars */}
              <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
                {[...Array(5)].map((_, s) => (
                  <span key={s} style={{ color: s < item.rating ? '#08A9E8' : 'rgba(255,255,255,0.1)', fontSize: 16 }}>
                    ★
                  </span>
                ))}
              </div>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                marginBottom: 20,
                fontStyle: 'italic',
              }}>
                "{item.content}"
              </p>
              <div>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 15, fontWeight: 600, color: '#fff' }}>
                  {item.name}
                </p>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginTop: 2 }}>
                  {item.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
