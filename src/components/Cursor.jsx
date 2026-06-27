import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 })
  const [hovered, setHovered] = useState(false)

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  useEffect(() => {
    const onOver = () => setHovered(true)
    const onOut = () => setHovered(false)
    const els = document.querySelectorAll('a, button, [data-hoverable]')
    els.forEach((el) => {
      el.addEventListener('mouseenter', onOver)
      el.addEventListener('mouseleave', onOut)
    })
    return () => {
      els.forEach((el) => {
        el.removeEventListener('mouseenter', onOver)
        el.removeEventListener('mouseleave', onOut)
      })
    }
  }, [])

  useEffect(() => {
    document.body.style.cursor = 'none'
    return () => { document.body.style.cursor = '' }
  }, [])

  return (
    <>
      <motion.div
        animate={{ x: pos.x - 4, y: pos.y - 4 }}
        transition={{ type: 'spring', mass: 0.1, stiffness: 800, damping: 40 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 8,
          height: 8,
          borderRadius: '50%',
          background: '#007BFF',
          pointerEvents: 'none',
          zIndex: 99999,
          mixBlendMode: 'difference',
        }}
      />
      <motion.div
        animate={{
          x: pos.x - 20,
          y: pos.y - 20,
          width: hovered ? 60 : 40,
          height: hovered ? 60 : 40,
        }}
        transition={{ type: 'spring', mass: 0.2, stiffness: 400, damping: 30 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          borderRadius: '50%',
          border: '1.5px solid rgba(0,123,255,0.3)',
          pointerEvents: 'none',
          zIndex: 99998,
          mixBlendMode: 'difference',
        }}
      />
    </>
  )
}
