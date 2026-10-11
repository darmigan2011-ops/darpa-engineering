import { useRef, useState } from 'react'
import stampingImage from '../assets/darpa-stamping-press-1600.webp'
import castingImage from '../assets/darpa-casting-furnace-1086.webp'
import StampingSequence from './StampingSequence'
import CastingDetails from './CastingDetails'
import ToolingDie from './ToolingDie'
import RobotWelding from './RobotWelding'

const divisions = [
  {
    id: 'stamping',
    label: 'Stampings',
    title: 'From sheet to component.',
    description:
      'Formed metal parts in steel, stainless steel, copper, brass, bronze and aluminium. In-house tool design supports the component from development through manufacture.',
    image: stampingImage,
    alt: 'Mechanical presses on the DARPA Engineering manufacturing floor',
    facts: [
      ['Materials', 'Steel, stainless steel & non-ferrous metals'],
      ['Presses', 'Mechanical, hydraulic & pneumatic'],
      ['Related work', 'In-house design & robotic welding'],
    ],
  },
  {
    id: 'casting',
    label: 'Castings',
    title: 'The alloy. The shape. The route.',
    description:
      'Non-ferrous components made through gravity die and shell or sand casting. The material and manufacturing route depend on your part’s requirements.',
    image: castingImage,
    alt: 'A furnace in DARPA Engineering’s casting division',
    facts: [
      ['Materials', 'Aluminium, copper, brass & bronze'],
      ['Processes', 'Gravity die, shell & sand casting'],
      ['Melt control', 'In-house spectrometer checks'],
    ],
  },
  {
    id: 'tooling',
    label: 'Tooling',
    title: 'Good parts start with the tool.',
    description:
      'Tools designed and manufactured in-house for stamping and non-ferrous casting. The tool room brings design, machining and finishing together.',
    facts: [
      ['Design', 'SolidWorks & AutoCAD'],
      ['Machining', 'VMC, milling & EDM'],
      ['Finishing', 'Surface grinding'],
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(0)
  const tabs = useRef([])
  function moveTab(event, index) {
    const destinations = {
      ArrowRight: (index + 1) % 3,
      ArrowLeft: (index + 2) % 3,
      Home: 0,
      End: 2,
    }
    if (!(event.key in destinations)) return
    event.preventDefault()
    const next = destinations[event.key]
    setActive(next)
    tabs.current[next]?.focus()
  }
  return (
    <section
      className="section capabilities"
      id="capabilities"
      aria-labelledby="capabilities-heading"
    >
      <div className="wrap">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow section-marker">01 / What we make</p>
            <h2 id="capabilities-heading">
              Three divisions.
              <br />
              One manufacturing partner.
            </h2>
          </div>
          <p>
            Explore the processes behind the parts. Select a division to see its
            materials, equipment and engineering details.
          </p>
        </div>
        <div
          className="division-tabs"
          role="tablist"
          aria-label="Manufacturing divisions"
        >
          {divisions.map((item, index) => (
            <button
              key={item.id}
              ref={(el) => {
                tabs.current[index] = el
              }}
              type="button"
              role="tab"
              id={`division-${item.id}`}
              aria-selected={active === index}
              aria-controls={`panel-${item.id}`}
              tabIndex={active === index ? 0 : -1}
              onClick={() => setActive(index)}
              onKeyDown={(event) => moveTab(event, index)}
            >
              <span className="division-number">0{index + 1}</span>
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </button>
          ))}
        </div>
        {divisions.map((division, index) => (
          <div
            key={division.id}
            className="division-panel"
            role="tabpanel"
            id={`panel-${division.id}`}
            aria-labelledby={`division-${division.id}`}
            tabIndex={0}
            hidden={active !== index}
          >
            <div
              className={`division-overview${division.image ? '' : ' division-overview--tooling'}`}
            >
              {division.image && (
                <figure className="division-photo">
                  <img
                    src={division.image}
                    alt={division.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <figcaption>
                    {division.label} division · Company photography
                  </figcaption>
                </figure>
              )}
              <div className="division-copy">
                <p className="eyebrow">DARPA / {division.label}</p>
                <h3>{division.title}</h3>
                <p>{division.description}</p>
                <dl className="division-facts">
                  {division.facts.map(([label, value]) => (
                    <div key={label}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </div>
                  ))}
                </dl>
                <a className="text-link" href="#contact">
                  Discuss your {division.label.toLowerCase()} requirement{' '}
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
            {index === 0 && (
              <>
                <StampingSequence />
                <details className="technical-disclosure">
                  <summary>
                    Robotic welding support <span aria-hidden="true">+</span>
                  </summary>
                  <RobotWelding />
                </details>
              </>
            )}
            {index === 1 && <CastingDetails />}
            {index === 2 && <ToolingDie />}
          </div>
        ))}
        <p className="capability-source">
          Capability details follow the company’s{' '}
          <a
            href="https://darpaengi.com/service/"
            target="_blank"
            rel="noreferrer"
          >
            published service information ↗
          </a>
          . Discuss suitability with the team for your specific component.
        </p>
      </div>
    </section>
  )
}
