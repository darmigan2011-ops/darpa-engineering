import { useEffect, useRef, useState } from 'react'

const toolingParts = [
  {
    id: 'die',
    label: 'Die',
    description: 'The lower tool carries the forming profile.',
  },
  {
    id: 'punch',
    label: 'Punch',
    description: 'The punch is shown descending from the upper shoe.',
  },
  {
    id: 'guide',
    label: 'Guide',
    description: 'Guide posts align the upper and lower tool members.',
  },
  {
    id: 'base',
    label: 'Base',
    description: 'The base supports and locates the tooling assembly.',
  },
]

const toolingMachines = [
  {
    id: 'vmc',
    number: '01',
    label: 'Vertical machining centre',
    count: '1 unit',
    note: 'VMC · “Hass make” (About listing)',
    purpose:
      'Typical role: machining tooling components on a vertical spindle.',
  },
  {
    id: 'wire-edm',
    number: '02',
    label: 'Wire-cut EDM',
    count: '1 unit',
    note: 'CNC · Rijun-SR600',
    purpose:
      'Typical role: cutting contours in conductive tooling material with a wire electrode.',
  },
  {
    id: 'spark-edm',
    number: '03',
    label: 'Spark EDM',
    count: '1 unit',
    note: 'Vintek',
    purpose: 'Typical role: electrical-discharge erosion for tooling features.',
  },
  {
    id: 'surface-grinding',
    number: '04',
    label: 'Surface grinding',
    count: '3 units',
    note: 'Surface grinding machines',
    purpose:
      'Typical role: finishing flat tool faces; three machines are listed in About.',
  },
  {
    id: 'mntr-mill',
    number: '05',
    label: 'MNTR milling machine',
    count: '1 unit',
    note: 'MNTR',
    purpose: 'Typical role: milling details into tooling components.',
  },
  {
    id: 'milling',
    number: '06',
    label: 'Milling machine',
    count: '1 unit',
    note: 'Milling',
    purpose:
      'A second milling machine appears in the official tooling inventory.',
  },
  {
    id: 'shaping',
    number: '07',
    label: 'Shaping machine',
    count: '1 unit',
    note: 'Shaping',
    purpose:
      'A shaping machine is listed; DARPA publishes no additional specifications for it.',
  },
]

export default function ToolingDie() {
  const stageRef = useRef(null)
  const [selectedPart, setSelectedPart] = useState(null)
  const [hoveredPart, setHoveredPart] = useState(null)
  const [selectedMachine, setSelectedMachine] = useState(null)
  const [hoveredMachine, setHoveredMachine] = useState(null)
  const activePart = hoveredPart || selectedPart
  const activeDetail = toolingParts.find((part) => part.id === activePart)
  const activeMachine = toolingMachines.find(
    (machine) => machine.id === (hoveredMachine || selectedMachine),
  )

  useEffect(() => {
    const stage = stageRef.current
    const reducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const smallScreen = window.matchMedia('(max-width: 760px)').matches
    if (!stage || reducedMotion || smallScreen) return undefined

    let frame = 0
    const updateAngle = () => {
      frame = 0
      const bounds = stage.getBoundingClientRect()
      if (bounds.bottom < 0 || bounds.top > window.innerHeight) return

      const centerOffset =
        (bounds.top + bounds.height / 2 - window.innerHeight / 2) /
        (window.innerHeight / 2)
      const limitedOffset = Math.max(-1, Math.min(1, centerOffset))
      stage.style.setProperty(
        '--scroll-tilt',
        `${(limitedOffset * -1.25).toFixed(2)}deg`,
      )
    }
    const requestAngleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateAngle)
    }

    window.addEventListener('scroll', requestAngleUpdate, { passive: true })
    window.addEventListener('resize', requestAngleUpdate, { passive: true })
    requestAngleUpdate()

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', requestAngleUpdate)
      window.removeEventListener('resize', requestAngleUpdate)
    }
  }, [])

  function handlePointerMove(event) {
    if (
      event.pointerType === 'touch' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    )
      return

    const bounds = event.currentTarget.getBoundingClientRect()
    const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5
    const vertical = (event.clientY - bounds.top) / bounds.height - 0.5
    event.currentTarget.style.setProperty(
      '--cursor-tilt-x',
      `${(vertical * -3.5).toFixed(2)}deg`,
    )
    event.currentTarget.style.setProperty(
      '--cursor-tilt-y',
      `${(horizontal * 4.5).toFixed(2)}deg`,
    )
  }

  function resetPointerTilt(event) {
    event.currentTarget.style.setProperty('--cursor-tilt-x', '0deg')
    event.currentTarget.style.setProperty('--cursor-tilt-y', '0deg')
  }

  return (
    <div
      className="tooling-experience"
      data-reveal
      aria-labelledby="tooling-experience-heading"
    >
      <div className="tooling-experience-heading">
        <p className="eyebrow">03 / Tooling detail</p>
        <h4 id="tooling-experience-heading">The tool is part of the work.</h4>
        <p>
          In-house tool design and machining support stamping and non-ferrous
          casting programmes.
        </p>
      </div>

      <div className="tooling-experience-grid">
        <figure
          className="die-board"
          onPointerLeave={resetPointerTilt}
          onPointerMove={handlePointerMove}
          ref={stageRef}
        >
          <div className="die-model">
            <svg
              aria-labelledby="die-illustration-title die-illustration-description"
              className="die-illustration"
              role="img"
              viewBox="0 0 640 420"
            >
              <title id="die-illustration-title">
                Illustrative stamping die in an isometric section view
              </title>
              <desc id="die-illustration-description">
                An original engineering-style drawing of an upper shoe, punch,
                guide posts, die and base. It is illustrative and not a
                production drawing.
              </desc>
              <defs>
                <pattern
                  height="24"
                  id="die-grid"
                  patternUnits="userSpaceOnUse"
                  width="24"
                >
                  <path
                    d="M24 0H0V24"
                    fill="none"
                    stroke="#c7d0d2"
                    strokeWidth=".55"
                  />
                </pattern>
                <linearGradient id="die-metal-top" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0" stopColor="#f7f8f6" />
                  <stop offset=".48" stopColor="#cbd3d4" />
                  <stop offset="1" stopColor="#a4b0b4" />
                </linearGradient>
                <linearGradient id="die-metal-side" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="#9aa7ac" />
                  <stop offset="1" stopColor="#64737b" />
                </linearGradient>
              </defs>
              <rect fill="url(#die-grid)" height="420" width="640" />

              <g
                className={`die-part die-part--base${activePart === 'base' ? ' is-active' : ''}`}
              >
                <polygon
                  fill="#64737b"
                  points="126,286 420,286 515,334 218,334"
                />
                <polygon
                  fill="url(#die-metal-side)"
                  points="218,334 515,334 515,359 218,359"
                />
                <polygon
                  fill="#52616a"
                  points="420,286 515,334 515,359 420,311"
                />
                <polygon
                  fill="url(#die-metal-top)"
                  points="126,266 420,266 515,313 218,313"
                  stroke="#56656e"
                  strokeWidth="2"
                />
                <path
                  d="M158 278 420 278 480 308"
                  fill="none"
                  stroke="#fff"
                  strokeOpacity=".72"
                  strokeWidth="2"
                />
                <circle cx="188" cy="295" fill="#667780" r="5" />
                <circle cx="447" cy="300" fill="#667780" r="5" />
              </g>

              <g
                className={`die-part die-part--guide${activePart === 'guide' ? ' is-active' : ''}`}
              >
                <rect
                  fill="#697881"
                  height="157"
                  rx="7"
                  width="17"
                  x="177"
                  y="128"
                />
                <ellipse cx="185.5" cy="130" fill="#d7dedd" rx="8.5" ry="4" />
                <rect
                  fill="#8e9ba0"
                  height="148"
                  rx="7"
                  width="17"
                  x="409"
                  y="128"
                />
                <ellipse cx="417.5" cy="130" fill="#e0e5e3" rx="8.5" ry="4" />
                <path
                  d="M175 148h22M407 148h22"
                  stroke="#f1f3f1"
                  strokeOpacity=".7"
                  strokeWidth="2"
                />
              </g>

              <g
                className={`die-part die-part--punch${activePart === 'punch' ? ' is-active' : ''}`}
                data-part="punch"
              >
                <polygon
                  fill="#819096"
                  points="282,132 346,132 346,157 282,157"
                />
                <polygon
                  fill="#5b6a72"
                  points="346,132 364,142 364,166 346,157"
                />
                <path
                  d="M299 157h31v51l-15 18-16-18Z"
                  fill="url(#die-metal-top)"
                  stroke="#596971"
                  strokeWidth="2"
                />
                <path
                  d="M309 164v44"
                  stroke="#fff"
                  strokeOpacity=".8"
                  strokeWidth="2"
                />
                <path d="M277 226h77" stroke="#617078" strokeWidth="4" />
              </g>

              <g
                className={`die-part die-part--die${activePart === 'die' ? ' is-active' : ''}`}
              >
                <polygon
                  fill="#8a979c"
                  points="265,244 348,244 383,262 300,262"
                />
                <polygon
                  fill="#67777e"
                  points="300,262 383,262 383,282 300,282"
                />
                <polygon
                  fill="#4f5f68"
                  points="348,244 383,262 383,282 348,264"
                />
                <path
                  d="M291 246v9l13 7 14-7 14 7 14-7v-9"
                  fill="none"
                  stroke="#eff2ef"
                  strokeWidth="2"
                />
                <path d="M285 238h76" stroke="#607078" strokeWidth="3" />
              </g>

              <g className="die-part die-part--upper">
                <polygon
                  fill="url(#die-metal-top)"
                  points="145,79 411,79 489,119 222,119"
                  stroke="#65747b"
                  strokeWidth="2"
                />
                <polygon
                  fill="#8f9ca1"
                  points="222,119 489,119 489,145 222,145"
                />
                <polygon
                  fill="#68777f"
                  points="411,79 489,119 489,145 411,105"
                />
                <path
                  d="M177 91 409 91l50 25"
                  fill="none"
                  stroke="#fff"
                  strokeOpacity=".86"
                  strokeWidth="3"
                />
                <circle cx="195" cy="104" fill="#697982" r="5" />
                <circle cx="426" cy="109" fill="#697982" r="5" />
                <circle cx="225" cy="112" fill="#697982" r="5" />
                <circle cx="455" cy="119" fill="#697982" r="5" />
              </g>

              <g
                className={`die-callout${activePart === 'die' ? ' is-active' : ''}`}
              >
                <path
                  d="M365 258h99l28-18"
                  fill="none"
                  stroke="#086783"
                  strokeWidth="1.3"
                />
                <circle cx="365" cy="258" fill="#086783" r="3" />
                <text x="497" y="237">
                  DIE
                </text>
              </g>
              <g
                className={`die-callout${activePart === 'punch' ? ' is-active' : ''}`}
              >
                <path
                  d="M331 190h135l27-18"
                  fill="none"
                  stroke="#086783"
                  strokeWidth="1.3"
                />
                <circle cx="331" cy="190" fill="#086783" r="3" />
                <text x="498" y="169">
                  PUNCH
                </text>
              </g>
              <g
                className={`die-callout${activePart === 'guide' ? ' is-active' : ''}`}
              >
                <path
                  d="M417 178h53l25-34"
                  fill="none"
                  stroke="#086783"
                  strokeWidth="1.3"
                />
                <circle cx="417" cy="178" fill="#086783" r="3" />
                <text x="499" y="139">
                  GUIDE
                </text>
              </g>
              <g
                className={`die-callout${activePart === 'base' ? ' is-active' : ''}`}
              >
                <path
                  d="M446 319h34l16 11"
                  fill="none"
                  stroke="#086783"
                  strokeWidth="1.3"
                />
                <circle cx="446" cy="319" fill="#086783" r="3" />
                <text x="501" y="337">
                  BASE
                </text>
              </g>

              <path
                d="M125 384h390m-390-5v10m390-10v10"
                fill="none"
                stroke="#7d8a8e"
                strokeWidth="1"
              />
              <text className="die-drawing-meta" x="126" y="403">
                TOOL SET / ISOMETRIC SECTION
              </text>
              <text
                className="die-drawing-meta"
                textAnchor="end"
                x="515"
                y="403"
              >
                ILLUSTRATIVE
              </text>
            </svg>
          </div>
          <figcaption className="die-caption">
            <span>Stamping tool / section view</span>
            <span>Concept illustration · not to scale</span>
          </figcaption>
        </figure>

        <div className="tooling-experience-copy">
          <p className="eyebrow">Tool-room inventory</p>
          <ul className="tooling-machine-list">
            {toolingMachines.map((machine) => (
              <li key={machine.label}>
                <button
                  aria-pressed={selectedMachine === machine.id}
                  className={`tooling-machine-button${activeMachine?.id === machine.id ? ' is-active' : ''}`}
                  onBlur={() => setHoveredMachine(null)}
                  onClick={() => {
                    setHoveredMachine(null)
                    setSelectedMachine((selected) =>
                      selected === machine.id ? null : machine.id,
                    )
                  }}
                  onFocus={() => setHoveredMachine(machine.id)}
                  onPointerEnter={() => setHoveredMachine(machine.id)}
                  onPointerLeave={() => setHoveredMachine(null)}
                  type="button"
                >
                  <span className="tooling-machine-number">
                    {machine.number}
                  </span>
                  <span className="tooling-machine-name">{machine.label}</span>
                  <span className="tooling-machine-count">{machine.count}</span>
                  <span className="tooling-machine-note">{machine.note}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="tooling-machine-detail" aria-live="polite">
            <p className="eyebrow">Machine / typical role</p>
            {activeMachine ? (
              <>
                <h5>{activeMachine.label}</h5>
                <p>{activeMachine.purpose}</p>
              </>
            ) : (
              <p>
                Select or hover a listed machine to see its place in DARPA’s
                tooling inventory.
              </p>
            )}
          </div>

          <p className="tooling-design-note">
            Production tools are designed in-house using SolidWorks and AutoCAD.
          </p>

          <div
            className="die-part-controls"
            role="group"
            aria-label="Explore tooling components"
          >
            {toolingParts.map((part) => (
              <button
                aria-pressed={selectedPart === part.id}
                className={`die-part-button${activePart === part.id ? ' is-active' : ''}`}
                key={part.id}
                onBlur={() => setHoveredPart(null)}
                onClick={() => {
                  setHoveredPart(null)
                  setSelectedPart((selected) =>
                    selected === part.id ? null : part.id,
                  )
                }}
                onFocus={() => setHoveredPart(part.id)}
                onPointerEnter={() => setHoveredPart(part.id)}
                onPointerLeave={() => setHoveredPart(null)}
                type="button"
              >
                {part.label}
              </button>
            ))}
          </div>
          <p className="die-part-description" aria-live="polite">
            {activeDetail?.description ||
              'Hover over a label or select a part to inspect the assembly.'}
          </p>

          <p className="official-source-note">
            Equipment details:{' '}
            <a
              href="https://darpaengi.com/service/"
              rel="noreferrer"
              target="_blank"
            >
              official Service page
            </a>{' '}
            ·{' '}
            <a
              href="https://darpaengi.com/about/"
              rel="noreferrer"
              target="_blank"
            >
              About / infrastructure
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
