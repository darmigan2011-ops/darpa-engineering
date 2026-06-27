import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

function Counter({ target, suffix = '', decimals = 0 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const duration = 2000
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(current)
            }
          }, duration / steps)
        }
      },
      { threshold: 0.3 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count.toFixed(decimals)}{suffix}
    </span>
  )
}

const stats = [
  { num: 14, suffix: '+', label: 'Years of Experience', decimals: 0 },
  { num: 100, suffix: '+', label: 'Global Clients', decimals: 0 },
  { num: 15, suffix: '+', label: 'Advanced Machines', decimals: 0 },
  { num: 100, suffix: '%', label: 'Quality Focus', decimals: 0 },
]

export default function Statistics() {
  return (
    <section style={{
      padding: '100px 0',
      background: '#0B1727',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(8,169,232,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(8,169,232,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 32,
        }} className="stats-grid">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{ textAlign: 'center' }}
            >
              <p style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: 52,
                fontWeight: 800,
                background: 'linear-gradient(135deg, #08A9E8, #4FC3F7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: 1,
                marginBottom: 8,
              }}>
                <Counter target={stat.num} suffix={stat.suffix} decimals={stat.decimals} />
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 15,
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 500,
              }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
