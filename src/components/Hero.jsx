import { motion } from 'framer-motion'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] },
})

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        background: '#0B1727',
        overflow: 'hidden',
      }}
    >
      {/* Grid Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(8,169,232,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8,169,232,0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Gradient Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: 600,
          height: 600,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(8,169,232,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '-20%',
          left: '-10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(8,169,232,0.05), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            opacity: [0.15, 0.4, 0.15],
          }}
          transition={{
            duration: 4 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 4,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            width: 3,
            height: 3,
            borderRadius: '50%',
            background: '#08A9E8',
            top: `${10 + Math.random() * 80}%`,
            left: `${10 + Math.random() * 80}%`,
            opacity: 0.15,
          }}
        />
      ))}

      <div
        style={{
          maxWidth: 1280,
          margin: '0 auto',
          padding: '0 24px',
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 80,
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
        className="hero-grid"
      >
        <div>
          <motion.span
            {...fadeUp(0.2)}
            style={{
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
              marginBottom: 24,
            }}
          >
            True Engineering Since 2011
          </motion.span>

          <motion.h1
            {...fadeUp(0.3)}
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 60,
              fontWeight: 800,
              lineHeight: 1.08,
              color: '#fff',
              letterSpacing: -2,
              marginBottom: 24,
            }}
            className="hero-title"
          >
            True Engineering That{' '}
            <span style={{ background: 'linear-gradient(135deg, #08A9E8, #4FC3F7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Powers Global
            </span>{' '}
            Manufacturing
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 17,
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.6)',
              maxWidth: 520,
              marginBottom: 40,
            }}
          >
            Started in 2011, DARPA Engineering is a leading manufacturer and exporter of sheet metal stampings, non-ferrous castings (Aluminium, Copper, Brass, Bronze) and tooling solutions. ISO 9001:2015 certified, serving Power T&D, Automotive and General Engineering sectors worldwide.
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(8,169,232,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: '#fff',
                background: 'linear-gradient(135deg, #08A9E8, #1A3A8A)',
                padding: '16px 36px',
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(8,169,232,0.25)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Explore Services
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: '#fff',
                background: 'transparent',
                padding: '16px 36px',
                borderRadius: 100,
                border: '1.5px solid rgba(255,255,255,0.2)',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
              }}
            >
              Contact Us
            </motion.a>
          </motion.div>

          <motion.div
            {...fadeUp(0.6)}
            style={{ display: 'flex', gap: 40, marginTop: 56 }}
          >
            {[
              { num: '14+', label: 'Years Experience' },
              { num: '100+', label: 'Global Clients' },
              { num: '15+', label: 'Advanced Machines' },
            ].map((item) => (
              <div key={item.label}>
                <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: 28, fontWeight: 700, color: '#fff', lineHeight: 1 }}>
                  {item.num}
                </p>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, color: 'rgba(255,255,255,0.45)', marginTop: 4 }}>
                  {item.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          style={{ position: 'relative' }}
          className="hero-image-col"
        >
          <div
            style={{
              position: 'relative',
              borderRadius: 24,
              overflow: 'hidden',
              background: '#0B1727',
              border: '1px solid rgba(8,169,232,0.1)',
              aspectRatio: '4/5',
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80"
              alt="Industrial manufacturing"
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
              background: 'linear-gradient(135deg, rgba(8,169,232,0.15), transparent)',
            }} />
          </div>

          {/* Glow ring */}
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '110%',
              height: '110%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(8,169,232,0.06), transparent 70%)',
              pointerEvents: 'none',
            }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          color: 'rgba(255,255,255,0.3)',
        }}
      >
        <span style={{ fontSize: 11, letterSpacing: 3, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>
          Scroll
        </span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5">
          <rect x="1.5" y="1.5" width="13" height="21" rx="6.5" />
          <motion.circle
            cx="8" cy="8" r="2" fill="#08A9E8"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  )
}
