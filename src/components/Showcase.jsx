import { motion } from 'framer-motion'

const items = [
  {
    title: 'Stamping Division',
    desc: 'Our stamping division features power presses ranging from 10 tons to 250 tons capacity, including imported pneumatic presses. We handle diverse metals including CR Steel, HR Steel, HSLA, Stainless Steel, Copper, Brass, Bronze and Aluminium with precision and consistency.',
    stat: '10-250T press capacity range',
  },
  {
    title: 'Casting Division',
    desc: 'State-of-the-art casting facility with induction furnace (200kg/hr melting capacity) and electric furnace (180kg capacity). We manufacture products from 20 grams to 5 kgs using gravity die casting process for Copper and Aluminium alloys.',
    stat: 'A356-T6, C642, C955 alloys',
  },
  {
    title: 'Tooling Division',
    desc: 'In-house tool room equipped with Hass Vertical Machining Centre, CNC Wire Cut EDM (Rijun-SR600), Spark Erosion Machine (Vintek), MNTR Milling Machine and surface grinding machines for comprehensive tool manufacturing.',
    stat: 'Complete in-house tooling capability',
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
                background: '#0B1727',
                aspectRatio: '4/3',
                border: '1px solid rgba(8,169,232,0.1)',
                position: 'relative',
              }}>
                <img
                  src={
                    i === 0
                      ? 'https://images.unsplash.com/photo-1565814636199-ae8133055c1c?w=600&q=80'
                      : i === 1
                      ? 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&q=80'
                      : 'https://images.unsplash.com/photo-1580128660010-fd027e1e5878?w=600&q=80'
                  }
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    opacity: 0.85,
                  }}
                />
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(135deg, rgba(8,169,232,0.1), transparent)',
                }} />
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
                background: 'rgba(8,169,232,0.06)',
                borderRadius: 100,
                border: '1px solid rgba(8,169,232,0.1)',
              }}>
                <span style={{ fontSize: 14, color: '#08A9E8', fontWeight: 600 }}>⬡</span>
                <span style={{ fontSize: 13, color: '#08A9E8', fontWeight: 500 }}>{item.stat}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
