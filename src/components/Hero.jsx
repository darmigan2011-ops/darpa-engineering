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
            linear-gradient(rgba(0,123,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,123,255,0.03) 1px, transparent 1px)
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
          background: 'radial-gradient(circle, rgba(0,123,255,0.08), transparent 70%)',
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
          background: 'radial-gradient(circle, rgba(0,123,255,0.05), transparent 70%)',
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
            background: '#007BFF',
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
              color: '#007BFF',
              letterSpacing: 4,
              textTransform: 'uppercase',
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: 100,
              border: '1px solid rgba(0,123,255,0.2)',
              background: 'rgba(0,123,255,0.06)',
              marginBottom: 24,
            }}
          >
            Precision Manufacturing Since 1998
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
            Engineering Excellence That{' '}
            <span style={{ background: 'linear-gradient(135deg, #007BFF, #60A5FA)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
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
            DARPA Engineering delivers precision sheet metal stampings, aluminium castings and tooling solutions trusted by leading industries worldwide.
          </motion.p>

          <motion.div
            {...fadeUp(0.5)}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05, boxShadow: '0 8px 40px rgba(0,123,255,0.4)' }}
              whileTap={{ scale: 0.97 }}
              onClick={(e) => { e.preventDefault(); document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' }) }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                fontWeight: 600,
                color: '#fff',
                background: 'linear-gradient(135deg, #007BFF, #005FCC)',
                padding: '16px 36px',
                borderRadius: 100,
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(0,123,255,0.25)',
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
              { num: '25+', label: 'Years Experience' },
              { num: '500+', label: 'Global Clients' },
              { num: '150+', label: 'Advanced Machines' },
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
              background: 'linear-gradient(135deg, rgba(0,123,255,0.1), rgba(0,95,204,0.05))',
              border: '1px solid rgba(0,123,255,0.1)',
              aspectRatio: '4/5',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Abstract industrial visual */}
            <svg viewBox="0 0 400 500" style={{ width: '80%', height: '80%' }}>
              <defs>
                <linearGradient id="heroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#007BFF" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#005FCC" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              <rect x="40" y="30" width="320" height="30" rx="6" fill="rgba(0,123,255,0.15)" />
              <rect x="40" y="80" width="200" height="200" rx="16" fill="url(#heroGrad)" stroke="rgba(0,123,255,0.2)" strokeWidth="1" />
              <rect x="260" y="80" width="100" height="90" rx="10" fill="rgba(0,123,255,0.08)" stroke="rgba(0,123,255,0.15)" strokeWidth="1" />
              <rect x="260" y="190" width="100" height="90" rx="10" fill="rgba(0,123,255,0.08)" stroke="rgba(0,123,255,0.15)" strokeWidth="1" />
              <rect x="40" y="310" width="100" height="100" rx="12" fill="rgba(0,123,255,0.08)" stroke="rgba(0,123,255,0.15)" strokeWidth="1" />
              <rect x="160" y="310" width="200" height="50" rx="8" fill="rgba(0,123,255,0.1)" />
              <rect x="160" y="380" width="200" height="30" rx="6" fill="rgba(0,123,255,0.06)" />
              {/* Gear icon */}
              <circle cx="90" cy="360" r="30" fill="none" stroke="rgba(0,123,255,0.2)" strokeWidth="2" />
              <circle cx="90" cy="360" r="12" fill="rgba(0,123,255,0.15)" />
              {[0, 60, 120, 180, 240, 300].map((angle) => {
                const rad = (angle * Math.PI) / 180
                const x1 = 90 + 22 * Math.cos(rad)
                const y1 = 360 + 22 * Math.sin(rad)
                const x2 = 90 + 34 * Math.cos(rad)
                const y2 = 360 + 34 * Math.sin(rad)
                return <line key={angle} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(0,123,255,0.2)" strokeWidth="2" />
              })}
            </svg>
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
              background: 'radial-gradient(circle, rgba(0,123,255,0.06), transparent 70%)',
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
            cx="8" cy="8" r="2" fill="#007BFF"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </section>
  )
}
