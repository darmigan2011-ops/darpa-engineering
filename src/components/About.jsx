import shopSmall from '../assets/darpa-press-cell-800.webp'
import shopLarge from '../assets/darpa-press-cell-1400.webp'

export default function About() {
  return (
    <section
      className="section company"
      id="company"
      aria-labelledby="company-heading"
    >
      <div className="wrap company-layout">
        <div className="company-copy">
          <p className="eyebrow section-marker">03 / The company</p>
          <h2 id="company-heading">
            Engineering
            <br />
            from Hosur.
          </h2>
          <p>
            DARPA Engineering began in 2011 in Hosur, Tamil Nadu. Our work
            brings together sheet-metal stamping, non-ferrous casting and the
            design and manufacture of their tools.
          </p>
          <p>
            Having tooling alongside part manufacture means a component and the
            tools behind it can be discussed with the same team.
          </p>
          <a className="text-link" href="#contact">
            Meet us at the shop floor <span aria-hidden="true">↗</span>
          </a>
          <div className="company-location">
            <span className="eyebrow">Find us</span>
            <p>
              42-A3, SIPCOT Industrial Complex
              <br />
              SIPCOT-1, Hosur, Tamil Nadu
            </p>
          </div>
        </div>
        <figure className="company-photograph">
          <img
            src={shopLarge}
            srcSet={`${shopSmall} 800w, ${shopLarge} 1400w`}
            sizes="(max-width: 760px) calc(100vw - 40px), 45vw"
            alt="Press equipment inside DARPA Engineering’s Hosur shop floor"
            width="1400"
            height="1050"
            loading="lazy"
          />
          <figcaption>
            <span>Where the work happens.</span>
            <span>Hosur / Tamil Nadu</span>
          </figcaption>
        </figure>
      </div>
    </section>
  )
}
