const manufacturingStages = [
  {
    number: '01',
    title: 'Enquiry',
    description: 'Share a drawing, sample or a clear part requirement.',
  },
  {
    number: '02',
    title: 'Engineering',
    description: 'Review the material, geometry and manufacturing route.',
  },
  {
    number: '03',
    title: 'Tooling',
    description: 'Design and make tools for stamping or non-ferrous casting where required.',
  },
  {
    number: '04',
    title: 'Production',
    description: 'Make parts through the agreed stamping or casting process.',
  },
  {
    number: '05',
    title: 'Quality',
    description: 'Review parts against the agreed requirements.',
  },
  {
    number: '06',
    title: 'Delivery',
    description: 'Coordinate dispatch and delivery details.',
  },
]

export default function Process() {
  return (
    <section className="section manufacturing-process" id="process" aria-labelledby="process-heading">
      <div className="wrap process-layout">
        <div className="process-intro" data-reveal>
          <p className="eyebrow section-marker">04 / Working together</p>
          <h2 id="process-heading">From enquiry<br />to delivery.</h2>
          <p>The part and its requirements guide the route through the work.</p>
        </div>

        <ol className="workflow-list" data-reveal>
          {manufacturingStages.map((stage) => (
            <li className="workflow-step" key={stage.number}>
              <span className="workflow-number">{stage.number}</span>
              <div className="workflow-copy">
                <h3>{stage.title}</h3>
                <p>{stage.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
