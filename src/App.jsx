import { useEffect } from 'react'
import LoadingScreen from './components/LoadingScreen'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Services from './components/Services'
import About from './components/About'
import WhyChoose from './components/WhyChoose'
import Process from './components/Process'
import Industries from './components/Industries'
import Statistics from './components/Statistics'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Articles from './components/Articles'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Cursor from './components/Cursor'

export default function App() {
  useEffect(() => {
    // Add CSS for nav underline hover
    const style = document.createElement('style')
    style.textContent = `
      .nav-underline {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 1.5px;
        background: #007BFF;
        transition: width 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      }
      a:hover .nav-underline { width: 100%; }
      .hero-title { font-size: clamp(36px, 5vw, 60px); }
      @media (max-width: 1024px) {
        .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        .hero-image-col { display: none !important; }
        .hero-title { text-align: center; }
        .hero-grid p { text-align: center; margin-left: auto !important; margin-right: auto !important; }
        .hero-grid .hero-stats { justify-content: center; }
        .about-grid,
        .showcase-row { grid-template-columns: 1fr !important; gap: 40px !important; }
        .showcase-row:nth-child(even) { direction: ltr !important; }
        .contact-grid { grid-template-columns: 1fr !important; }
        .services-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .footer-grid { grid-template-columns: repeat(3, 1fr) !important; }
        .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 40px !important; }
        .testimonials-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .articles-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .industries-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
        .process-steps { flex-wrap: wrap !important; justify-content: center !important; gap: 16px !important; }
        .process-steps > div { flex: 0 0 calc(25% - 16px) !important; }
        .features-grid { grid-template-columns: repeat(2, 1fr) !important; }
      }
      @media (max-width: 640px) {
        .hero-grid { text-align: center; }
        .hero-grid p { margin: 0 auto; }
        .hero-grid .hero-stats { justify-content: center; }
        .services-grid,
        .features-grid,
        .industries-grid,
        .testimonials-grid,
        .articles-grid,
        .stats-grid { grid-template-columns: 1fr !important; }
        .footer-grid { grid-template-columns: 1fr !important; }
        .gallery-grid { grid-template-columns: 1fr !important; grid-auto-rows: 200px !important; }
        .gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; }
        .contact-grid { gap: 32px !important; }
        .process-steps > div { flex: 0 0 calc(33.333% - 16px) !important; }
        .hero-grid .hero-stats { flex-wrap: wrap; gap: 24px !important; }
      }
    `
    document.head.appendChild(style)
    return () => document.head.removeChild(style)
  }, [])

  const isDesktop = typeof window !== 'undefined' && window.innerWidth > 1024

  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      {isDesktop && <Cursor />}
      <Navbar />
      <main>
        <Hero />
        <Showcase />
        <Services />
        <About />
        <WhyChoose />
        <Statistics />
        <Process />
        <Industries />
        <Gallery />
        <Testimonials />
        <Articles />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
