const industries = [
  'Power transmission and distribution',
  'Automotive',
  'General engineering',
]

export default function Industries() {
  return (
    <section className="section industries" id="industries" aria-labelledby="industries-heading">
      <div className="wrap industries-layout">
        <div className="industries-intro" data-reveal>
          <p className="eyebrow section-marker">Applications</p>
          <h2 id="industries-heading">Made for<br />working industries.</h2>
        </div>
        <ul className="industry-list" data-reveal>
          {industries.map((industry, index) => (
            <li key={industry}>
              <span className="industry-number">0{index + 1}</span>
              <span>{industry}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
