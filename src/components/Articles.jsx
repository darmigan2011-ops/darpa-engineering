import { motion } from 'framer-motion'

const articles = [
  {
    title: 'The Future of Precision Manufacturing in Automotive',
    date: 'March 15, 2026',
    desc: 'How advanced stamping and casting technologies are reshaping the automotive supply chain for electric vehicles.',
    category: 'Industry Insights',
  },
  {
    title: 'Innovations in Aluminium Casting for Industrial Applications',
    date: 'February 28, 2026',
    desc: 'Exploring new casting techniques that deliver superior strength-to-weight ratios for heavy engineering.',
    category: 'Technology',
  },
  {
    title: 'Industry 4.0: Transforming the Manufacturing Floor',
    date: 'January 20, 2026',
    desc: 'How DARPA Engineering is leveraging IoT and smart sensors to achieve unprecedented quality control.',
    category: 'Innovation',
  },
]

export default function Articles() {
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
            Knowledge Hub
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 40,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
            marginBottom: 16,
          }}>
            Latest Articles & Insights
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 16,
            color: '#6B7280',
            maxWidth: 540,
            margin: '0 auto',
          }}>
            Stay updated with the latest in manufacturing technology and industry trends.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="articles-grid">
          {articles.map((article, i) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              style={{
                background: '#fff',
                borderRadius: 24,
                overflow: 'hidden',
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02)',
                cursor: 'pointer',
                transition: 'all 0.4s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(8,169,232,0.08)'
                e.currentTarget.style.borderColor = 'rgba(8,169,232,0.1)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)'
              }}
            >
              <div style={{
                height: 200,
                overflow: 'hidden',
                position: 'relative',
                background: '#0B1727',
              }}>
                <img
                  src={
                    i === 0
                      ? 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=600&q=80'
                      : i === 1
                      ? 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?w=600&q=80'
                      : 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80'
                  }
                  alt=""
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
              <div style={{ padding: 28 }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  marginBottom: 12,
                }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 600,
                    color: '#08A9E8',
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                  }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: 12, color: '#9CA3AF' }}>{article.date}</span>
                </div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#0B1727',
                  marginBottom: 10,
                  lineHeight: 1.4,
                }}>
                  {article.title}
                </h3>
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  color: '#6B7280',
                  lineHeight: 1.7,
                  marginBottom: 16,
                }}>
                  {article.desc}
                </p>
                <motion.span
                  whileHover={{ x: 4 }}
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: '#08A9E8',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 4,
                    cursor: 'pointer',
                  }}
                >
                  Read More
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                  </svg>
                </motion.span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
