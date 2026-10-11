import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function SmoothScroll() {
  useEffect(() => {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis
    let frame = 0
    function configure() {
      cancelAnimationFrame(frame)
      lenis?.destroy()
      lenis = undefined
      if (motion.matches) return
      lenis = new Lenis({
        duration: 1.15,
        wheelMultiplier: 0.85,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -100 },
      })
      function tick(time) {
        lenis.raf(time)
        frame = requestAnimationFrame(tick)
      }
      frame = requestAnimationFrame(tick)
    }
    configure()
    motion.addEventListener('change', configure)
    return () => {
      motion.removeEventListener('change', configure)
      cancelAnimationFrame(frame)
      lenis?.destroy()
    }
  }, [])
  return null
}
