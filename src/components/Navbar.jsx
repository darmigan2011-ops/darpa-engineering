import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', href: '#hero' },
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Industries', href: '#industries' },
  { label: 'Contact', href: '#contact' },
]

const styles = {
  nav: (scrolled) => ({
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    padding: scrolled ? '12px 0' : '20px 0',
    zIndex: 999,
    transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
    background: scrolled ? 'rgba(11, 23, 39, 0.85)' : 'transparent',
    backdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
    WebkitBackdropFilter: scrolled ? 'blur(20px) saturate(1.4)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
  }),
  inner: {
    maxWidth: 1280,
    margin: '0 auto',
    padding: '0 24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: 24,
    fontWeight: 800,
    color: '#fff',
    letterSpacing: -0.5,
    display: 'flex',
    alignItems: 'center',
    gap: 8,
  },
  logoDot: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#08A9E8',
    display: 'inline-block',
  },
  link: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 500,
    color: 'rgba(255,255,255,0.7)',
    cursor: 'pointer',
    transition: 'color 0.3s',
    position: 'relative',
    padding: '4px 0',
  },
  cta: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    color: '#fff',
    background: 'linear-gradient(135deg, #08A9E8, #1A3A8A)',
    border: 'none',
    borderRadius: 100,
    padding: '10px 24px',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
    boxShadow: '0 4px 20px rgba(8,169,232,0.25)',
  },
  menuBtn: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    fontSize: 28,
    cursor: 'pointer',
    padding: 4,
  },
  mobileMenu: {
    position: 'fixed',
    top: 0,
    right: 0,
    bottom: 0,
    width: '80%',
    maxWidth: 400,
    background: 'rgba(11, 23, 39, 0.98)',
    backdropFilter: 'blur(30px)',
    padding: '100px 40px 40px',
    zIndex: 998,
  },
  overlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0,0,0,0.5)',
    zIndex: 997,
  },
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    setMobileOpen(false)
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        style={styles.nav(scrolled)}
      >
        <div style={styles.inner}>
          <a href="#hero" onClick={(e) => { e.preventDefault(); scrollTo('#hero') }} style={styles.logo}>
            <img src="/logo.svg" alt="DARPA Engineering" style={{ height: 36 }} />
          </a>

          <div style={{ display: 'flex', alignItems: 'center', gap: 32 }}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                style={{
                  ...styles.link,
                  display: window.innerWidth < 768 ? 'none' : 'block',
                }}
                onMouseEnter={(e) => { e.target.style.color = '#fff' }}
                onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.7)' }}
              >
                {link.label}
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: 1.5,
                    background: '#08A9E8',
                    transition: 'width 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="nav-underline"
                />
              </a>
            ))}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 6px 30px rgba(8,169,232,0.35)' }}
              whileTap={{ scale: 0.97 }}
              style={styles.cta}
              onClick={() => scrollTo('#contact')}
            >
              Get a Quote
            </motion.button>
            <button
              style={{ ...styles.menuBtn, display: window.innerWidth < 768 ? 'block' : 'none' }}
              onClick={() => setMobileOpen(true)}
            >
              ☰
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={styles.overlay}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              style={styles.mobileMenu}
            >
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  position: 'absolute',
                  top: 24,
                  right: 24,
                  background: 'none',
                  border: 'none',
                  color: '#fff',
                  fontSize: 32,
                  cursor: 'pointer',
                }}
              >
                ✕
              </button>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
                {links.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: 24,
                      fontWeight: 600,
                      color: '#fff',
                      cursor: 'pointer',
                    }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
