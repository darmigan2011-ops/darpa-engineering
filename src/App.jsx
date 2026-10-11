import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Industries from './components/Industries'
import Process from './components/Process'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ProductLibrary from './components/ProductLibrary'
import SmoothScroll from './components/SmoothScroll'
import ManufacturingStory from './components/ManufacturingStory'
import './design.css'

export default function App() {
  useEffect(() => {
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reducedMotion || !('IntersectionObserver' in window)) return undefined

    const revealTargets = document.querySelectorAll('[data-reveal]')
    if (!revealTargets.length) return undefined

    const observer = new IntersectionObserver(
      (entries, activeObserver) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending')
            entry.target.classList.add('is-revealed')
            activeObserver.unobserve(entry.target)
          } else {
            entry.target.classList.add('reveal-pending')
          }
        })
      },
      { rootMargin: '0px 0px -36px 0px', threshold: 0.12 },
    )

    revealTargets.forEach((target) => observer.observe(target))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SmoothScroll />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <div id="home" />
        <ManufacturingStory />
        <Hero />
        <Services />
        <ProductLibrary />
        <About />
        <Industries />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
