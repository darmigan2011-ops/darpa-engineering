import { useEffect, useRef, useState } from 'react'
import './manufacturing-story.css'

const chapters = [
  {
    id: 'tool-design',
    label: 'Inside DARPA',
    heading: 'Metal parts.\nMade in Hosur.',
    text: 'DARPA Engineering manufactures sheet-metal stampings and non-ferrous castings, with the tools designed and made in-house.',
    detail:
      'Scroll to open up the tooling and follow the manufacturing process. The upper shoe, punch, guide posts and die each play a different role in shaping a component.',
    tags: ['Stampings', 'Non-ferrous castings', 'Tooling'],
    annotation: 'Upper shoe / punch / guide posts / die / base',
    visual: 'Exploded stamping tool',
  },
  {
    id: 'sheet-blank',
    label: 'Sheet blank',
    heading: 'Prepare the metal.',
    text: 'Stamping begins with sheet metal. The company works with steel, stainless steel, copper, brass, bronze and aluminium. The blank is the piece of sheet that will be formed into a component.',
    detail:
      'Here, the flat blank sits between the punch and die. Its size, material and thickness must be chosen for the actual component. This illustration shows no production dimensions.',
    tags: ['Sheet-metal blank', 'Material selection'],
    annotation: 'Flat sheet positioned between the matched tools',
    visual: 'Blank preparation',
  },
  {
    id: 'forming',
    label: 'Stamping',
    heading: 'Bring the tools together.',
    text: 'A press brings the punch toward the die, shaping the blank between them. DARPA’s published equipment includes mechanical, hydraulic and pneumatic presses, with a listed range of 10 to 250 tonnes.',
    detail:
      'The descending punch and matching die are illustrated here. Guide posts align the upper and lower members. The orange component shows a simplified formed profile, not a specific production part.',
    tags: ['Mechanical / hydraulic / pneumatic', 'Published range: 10–250 T'],
    annotation: 'Punch descends; the blank becomes a formed profile',
    visual: 'Stamping operation',
  },
  {
    id: 'casting-route',
    label: 'Casting',
    heading: 'A different route: casting.',
    text: 'Casting is a separate manufacturing route, rather than a step after stamping. Non-ferrous alloy is melted and introduced into a mould. DARPA lists gravity die and shell or sand casting for aluminium and copper alloys.',
    detail:
      'The separated mould halves reveal a simplified cavity and component. The company uses an in-house spectrometer to check melt composition and publishes two-year melt-chemistry traceability.',
    tags: ['Gravity die / shell / sand', 'Melt chemistry checks'],
    annotation: 'Concept mould halves and cast component',
    visual: 'Separate casting route',
  },
  {
    id: 'machining',
    label: 'Tool room',
    heading: 'Machine. Fit. Finish.',
    text: 'The tool room supports both manufacturing divisions. DARPA lists a vertical machining centre, wire-cut EDM, spark EDM, milling and surface grinding. These processes create and finish tooling features.',
    detail:
      'The model separates a tool block from a conceptual cutting spindle to show the relationship between the tool and its machining. This is an explanation of the process, not a model of DARPA’s actual VMC.',
    tags: ['VMC / milling / EDM', 'Surface grinding'],
    annotation: 'Conceptual spindle above a tooling block',
    visual: 'Tool-room machining',
  },
  {
    id: 'part-review',
    label: 'Your component',
    heading: 'Return to the part.',
    text: 'The component’s drawing, material, geometry and application guide the manufacturing discussion. Stamping and casting offer different routes; in-house tooling supports the route that suits the requirement.',
    detail:
      'The finished profile is shown on its own so you can inspect its shape. Share a drawing or sample with the team to discuss suitability, tooling and the next steps for your component.',
    tags: ['Drawing or sample', 'Discuss suitability'],
    annotation: 'Simplified formed component — inspect from any angle',
    visual: 'Component review',
  },
]

export default function ManufacturingStory() {
  const hostRef = useRef(null)
  const stepsRef = useRef([])
  const viewerRef = useRef(null)
  const activeRef = useRef(0)
  const [active, setActive] = useState(0)
  const [exploded, setExploded] = useState(true)
  const [status, setStatus] = useState('loading')
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    let disposed = false
    let viewer
    let started = false
    const host = hostRef.current
    const observer = new IntersectionObserver(
      async ([entry]) => {
        if (!entry.isIntersecting || started) return
        started = true
        try {
          const { createManufacturingScene } = await import(
            './manufacturingScene'
          )
          if (disposed) return
          viewer = createManufacturingScene(host)
          viewerRef.current = viewer
          viewer.setStage(activeRef.current)
          setStatus('ready')
        } catch {
          if (!disposed) setStatus('fallback')
        }
      },
      { rootMargin: '300px' },
    )
    observer.observe(host)
    return () => {
      disposed = true
      observer.disconnect()
      viewer?.dispose()
      viewerRef.current = null
    }
  }, [])

  useEffect(() => {
    if (reduced) return undefined
    let frame = 0
    function update() {
      frame = 0
      const target =
        window.innerHeight * (window.innerWidth <= 760 ? 0.73 : 0.48)
      let closest = 0
      let distance = Infinity
      stepsRef.current.forEach((step, index) => {
        const rect = step.getBoundingClientRect()
        const next = Math.abs(rect.top + rect.height / 2 - target)
        if (next < distance) {
          closest = index
          distance = next
        }
      })
      setActive(closest)
      activeRef.current = closest
      viewerRef.current?.setStage(closest)
    }
    function requestUpdate() {
      if (!frame) frame = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    update()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestUpdate)
      window.removeEventListener('resize', requestUpdate)
    }
  }, [reduced])

  useEffect(() => {
    viewerRef.current?.setReducedMotion(reduced)
  }, [reduced, status])
  useEffect(() => {
    viewerRef.current?.setExploded(exploded)
  }, [exploded, status])

  function select(index) {
    setActive(index)
    activeRef.current = index
    viewerRef.current?.setStage(index)
    if (!reduced)
      stepsRef.current[index]?.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      })
  }

  return (
    <section
      className="manufacturing-story"
      id="inside-darpa"
      aria-labelledby="story-heading"
    >
      <div className="wrap story-topline">
        <p className="eyebrow">DARPA Engineering · The True Engineering</p>
        <span>Hosur, Tamil Nadu / India</span>
      </div>
      <div
        className={`wrap story-layout${reduced ? ' story-layout--reduced' : ''}`}
      >
        <div className="story-viewer">
          <div className="story-viewer-top">
            <span>INSIDE THE TOOLING</span>
            <span aria-hidden="true">0{active + 1} / 06</span>
          </div>
          <div className="story-canvas" ref={hostRef} />
          {status !== 'ready' && (
            <div className="story-fallback">
              <svg viewBox="0 0 300 240" aria-hidden="true">
                <path
                  d="m45 60 120-35 90 45-120 35Z m0 30 120-35 90 45-120 35Z m0 60 120-35 90 45-120 35Z m0 30 120-35 90 45-120 35Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M65 60v125m165-115v125"
                  stroke="currentColor"
                  strokeDasharray="5 5"
                />
              </svg>
              <p>
                {status === 'loading'
                  ? 'Preparing the engineering view…'
                  : '3D is unavailable on this device. The full explanation remains below.'}
              </p>
            </div>
          )}
          <div className="story-annotation" aria-live="polite">
            <strong>{chapters[active].visual}</strong>
            <span>{chapters[active].annotation}</span>
          </div>
          <div className="story-viewer-controls">
            {[0, 3, 4].includes(active) && (
              <button
                type="button"
                aria-pressed={exploded}
                onClick={() => setExploded((value) => !value)}
                disabled={status !== 'ready'}
              >
                {exploded ? 'Assemble view' : 'Explode view'}{' '}
                <span aria-hidden="true">↗</span>
              </button>
            )}
            <button
              type="button"
              onClick={() => viewerRef.current?.resetView()}
              disabled={status !== 'ready'}
            >
              Reset angle
            </button>
            <button
              type="button"
              aria-label="Rotate model left"
              onClick={() => viewerRef.current?.rotate('left')}
              disabled={status !== 'ready'}
            >
              ↶
            </button>
            <button
              type="button"
              aria-label="Rotate model right"
              onClick={() => viewerRef.current?.rotate('right')}
              disabled={status !== 'ready'}
            >
              ↷
            </button>
          </div>
          <p className="story-model-note">
            Illustrative model · not a production drawing.{' '}
            {status === 'ready' &&
              'Drag, use the buttons, or focus the view and use arrow keys to rotate.'}
          </p>
          <div
            className="story-stage-nav"
            role="group"
            aria-label="Choose an engineering stage"
          >
            {chapters.map((chapter, index) => (
              <button
                key={chapter.id}
                type="button"
                aria-pressed={active === index}
                onClick={() => select(index)}
                aria-label={`Stage ${index + 1}: ${chapter.label}`}
              >
                {String(index + 1).padStart(2, '0')}
              </button>
            ))}
          </div>
        </div>
        <div className="story-chapters">
          {chapters.map((chapter, index) => (
            <article
              key={chapter.id}
              ref={(el) => {
                stepsRef.current[index] = el
              }}
              className={`story-chapter${active === index ? ' is-current' : ''}`}
              id={chapter.id}
            >
              <p className="eyebrow">
                {index === 0
                  ? 'Manufacturing / Since 2011'
                  : `0${index + 1} / ${chapter.label}`}
              </p>
              {index === 0 ? (
                <h1 id="story-heading">{chapter.heading}</h1>
              ) : (
                <h3>{chapter.heading}</h3>
              )}
              <p>{chapter.text}</p>
              {index === 0 && (
                <div className="story-hero-actions">
                  <a href="#contact">
                    Discuss your component <span aria-hidden="true">↗</span>
                  </a>
                  <a href="#sheet-blank">
                    Explore the process <span aria-hidden="true">↓</span>
                  </a>
                </div>
              )}
              <p className="story-detail">{chapter.detail}</p>
              <ul>
                {chapter.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              {index === 5 && (
                <a className="story-enquiry" href="#contact">
                  Discuss your component ↗
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
      <div className="wrap story-source">
        Capabilities based on DARPA’s{' '}
        <a
          href="https://darpaengi.com/service/"
          target="_blank"
          rel="noreferrer"
        >
          Service
        </a>{' '}
        and{' '}
        <a href="https://darpaengi.com/about/" target="_blank" rel="noreferrer">
          About / infrastructure
        </a>{' '}
        pages. The illustrations explain general processes; they do not show
        actual machinery or tooling.
      </div>
    </section>
  )
}
