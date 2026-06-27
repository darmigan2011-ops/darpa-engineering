import { motion } from 'framer-motion'

const services = [
  {
    title: 'Sheet Metal Stampings',
    desc: 'In-house power presses ranging from 10 to 250 tons capacity. We handle CR Steel, HR Steel, HSLA, Stainless Steel, Copper, Brass, Bronze and Aluminium with precision tooling.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" />
      </svg>
    ),
  },
  {
    title: 'Non-Ferrous Castings',
    desc: 'Premium aluminium, copper, brass and bronze castings using gravity die casting. Induction furnace (200kg/hr) and electric furnace (180kg) for parts from 20g to 5kg.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Tool Room Solutions',
    desc: 'Complete in-house tool design and manufacturing with Hass VMC, Wire Cut EDM (Rijun-SR600), Spark Erosion, Surface Grinding and Milling Machines for precision tooling.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 6v12" /><path d="M6 12h12" />
      </svg>
    ),
  },
  {
    title: 'Robotic Welding',
    desc: 'Automated welding solutions with Panasonic robotic welding machines. Specialized welding programs for complicated parts requiring proper weld penetration and torque performance.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" /><path d="M12 1v4" /><path d="M12 19v4" /><path d="M1 12h4" /><path d="M19 12h4" />
      </svg>
    ),
  },
  {
    title: 'Design & Engineering',
    desc: 'In-house design team using SolidWorks and AutoCAD for developing complicated stampings, castings and tooling. Six Sigma principles for product development and manufacturing.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 00-3-3.87" /><path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: 'Export & Logistics',
    desc: '80% of products exported to USA and Germany. Cost-effective solutions in stampings, castings, tooling and warehousing for international clients with reliable on-time delivery.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#08A9E8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
]

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section id="services" style={{ padding: '120px 0', background: '#fff' }}>
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
            Our Capabilities
          </span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: 44,
            fontWeight: 800,
            color: '#0B1727',
            letterSpacing: -1.5,
            marginBottom: 16,
          }}>
            Precision Manufacturing Services
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 17,
            color: '#6B7280',
            maxWidth: 560,
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Comprehensive manufacturing solutions backed by decades of engineering expertise and advanced machinery.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
        }} className="services-grid">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ y: -8, scale: 1.02 }}
              style={{
                background: '#fff',
                borderRadius: 24,
                padding: 40,
                border: '1px solid rgba(0,0,0,0.04)',
                boxShadow: '0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.02)',
                transition: 'box-shadow 0.4s, border-color 0.4s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(8,169,232,0.1), 0 8px 20px rgba(0,0,0,0.06)'
                e.currentTarget.style.borderColor = 'rgba(8,169,232,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.02)'
                e.currentTarget.style.borderColor = 'rgba(0,0,0,0.04)'
              }}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.4 }}
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 16,
                  background: 'rgba(8,169,232,0.06)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 20,
                }}
              >
                {service.icon}
              </motion.div>
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 20,
                fontWeight: 700,
                color: '#0B1727',
                marginBottom: 12,
              }}>
                {service.title}
              </h3>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: '#6B7280',
                lineHeight: 1.7,
                marginBottom: 20,
              }}>
                {service.desc}
              </p>
              <motion.a
                href="#contact"
                whileHover={{ x: 4 }}
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }) }}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#08A9E8',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  cursor: 'pointer',
                }}
              >
                Learn More
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
