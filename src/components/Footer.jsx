import { motion } from 'framer-motion'

const columns = [
  {
    title: 'Company',
    links: ['About Us', 'Careers', 'News', 'Sustainability', 'Investors'],
  },
  {
    title: 'Services',
    links: ['Stampings', 'Castings', 'Tool Room', 'Machining', 'Engineering'],
  },
  {
    title: 'Industries',
    links: ['Automotive', 'Industrial', 'Heavy Engineering', 'Renewable Energy', 'OEM'],
  },
  {
    title: 'Quick Links',
    links: ['Quality Policy', 'Privacy Policy', 'Terms of Service', 'Sitemap', 'Contact'],
  },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      background: '#0B1727',
      padding: '80px 0 0',
      position: 'relative',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
          gap: 40,
          paddingBottom: 60,
          borderBottom: '1px solid rgba(255,255,255,0.06)',
        }} className="footer-grid">
          {/* Brand column */}
          <div>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: 24,
              fontWeight: 800,
              color: '#fff',
              letterSpacing: -0.5,
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              marginBottom: 16,
            }}>
              DARPA
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#007BFF', display: 'inline-block' }} />
            </div>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 14,
              color: 'rgba(255,255,255,0.5)',
              lineHeight: 1.8,
              marginBottom: 24,
              maxWidth: 300,
            }}>
              Precision manufacturing excellence since 1998. Trusted by global leaders for sheet metal stampings, aluminium castings and tooling solutions.
            </p>
            {/* Newsletter */}
            <div style={{ display: 'flex', gap: 8 }}>
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  color: '#fff',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 100,
                  padding: '10px 16px',
                  outline: 'none',
                  flex: 1,
                  minWidth: 0,
                }}
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 13,
                  fontWeight: 600,
                  color: '#fff',
                  background: 'linear-gradient(135deg, #007BFF, #005FCC)',
                  border: 'none',
                  borderRadius: 100,
                  padding: '10px 20px',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 14,
                fontWeight: 700,
                color: '#fff',
                marginBottom: 20,
                textTransform: 'uppercase',
                letterSpacing: 1,
              }}>
                {col.title}
              </h4>
              <ul style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 14,
                        color: 'rgba(255,255,255,0.5)',
                        cursor: 'pointer',
                        transition: 'color 0.3s',
                        position: 'relative',
                      }}
                      onMouseEnter={(e) => { e.target.style.color = '#007BFF' }}
                      onMouseLeave={(e) => { e.target.style.color = 'rgba(255,255,255,0.5)' }}
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '24px 0',
          flexWrap: 'wrap',
          gap: 16,
        }} className="footer-bottom">
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 13,
            color: 'rgba(255,255,255,0.35)',
          }}>
            © {new Date().getFullYear()} DARPA Engineering. All rights reserved.
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {/* Social icons */}
            {['in', 'fb', 'tw', 'yt'].map((social) => (
              <a
                key={social}
                href="#"
                onClick={(e) => e.preventDefault()}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 10,
                  background: 'rgba(255,255,255,0.04)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'rgba(255,255,255,0.4)',
                  fontSize: 12,
                  fontWeight: 600,
                  transition: 'all 0.3s',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => { e.target.style.background = '#007BFF'; e.target.style.color = '#fff' }}
                onMouseLeave={(e) => { e.target.style.background = 'rgba(255,255,255,0.04)'; e.target.style.color = 'rgba(255,255,255,0.4)' }}
              >
                {social.toUpperCase()}
              </a>
            ))}

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              style={{
                width: 40,
                height: 40,
                borderRadius: 12,
                background: 'rgba(0,123,255,0.1)',
                border: '1px solid rgba(0,123,255,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#007BFF',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(0,123,255,0.2)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(0,123,255,0.1)' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" />
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
