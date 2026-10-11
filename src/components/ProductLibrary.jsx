import sleethoodSmall from '../assets/darpa-product-sleethood-400.webp'
import sleethoodLarge from '../assets/darpa-product-sleethood-800.webp'
import assemblySmall from '../assets/darpa-product-stamping-assembly-400.webp'
import assemblyLarge from '../assets/darpa-product-stamping-assembly-800.webp'
import hookLoadBusterSmall from '../assets/darpa-product-hook-load-buster-400.webp'
import hookLoadBusterLarge from '../assets/darpa-product-hook-load-buster-800.webp'
import engineMountingSmall from '../assets/darpa-product-engine-mounting-400.webp'
import engineMountingLarge from '../assets/darpa-product-engine-mounting-800.webp'
import damperSmall from '../assets/darpa-product-damper-400.webp'
import damperLarge from '../assets/darpa-product-damper-800.webp'

const selectedParts = [
  {
    id: 'assembly',
    name: 'Stamping Assembly',
    reference: 'ASSEMBLY',
    small: assemblySmall,
    large: assemblyLarge,
  },
  {
    id: 'sleethood',
    name: 'Sleethood',
    reference: 'NFS0091',
    small: sleethoodSmall,
    large: sleethoodLarge,
  },
  {
    id: 'hook-load-buster',
    name: 'Hook Load Buster',
    reference: 'STAMPING FUSE',
    small: hookLoadBusterSmall,
    large: hookLoadBusterLarge,
  },
  {
    id: 'engine-mounting',
    name: 'Engine Mounting',
    reference: 'ENGINE MOUNTING',
    small: engineMountingSmall,
    large: engineMountingLarge,
  },
  {
    id: 'damper',
    name: 'Damper',
    reference: 'STEEL STAMPING',
    small: damperSmall,
    large: damperLarge,
  },
]

export default function ProductLibrary() {
  return (
    <section
      className="section part-library"
      id="products"
      aria-labelledby="part-library-heading"
    >
      <div className="wrap">
        <div className="part-library-heading" data-reveal>
          <div>
            <p className="eyebrow section-marker">02 / Selected components</p>
            <h2 id="part-library-heading">
              A few parts.
              <br />A closer look.
            </h2>
          </div>
          <p>
            A selection from the company’s stamping gallery. Share a drawing or
            sample to discuss your own component.
          </p>
        </div>

        <div
          className="part-library-grid"
          aria-label="Selected stamped products"
        >
          {selectedParts.map((part, index) => (
            <figure
              className={`part-library-item part-library-item--${part.id}`}
              data-reveal
              key={part.id}
            >
              <img
                alt={`${part.name} product image from DARPA Engineering's official Stampings gallery`}
                decoding="async"
                height="800"
                loading="lazy"
                sizes={
                  index === 0
                    ? '(max-width: 760px) calc(100vw - 40px), 46vw'
                    : '(max-width: 480px) 100vw, (max-width: 760px) 42vw, 22vw'
                }
                src={part.small}
                srcSet={`${part.small} 400w, ${part.large} 800w`}
                width="800"
              />
              <figcaption>
                <span className="part-library-reference">{part.reference}</span>
                <span className="part-library-name">{part.name}</span>
                <span className="part-library-category">Stamped product</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="official-source-note">
          <a
            href="https://darpaengi.com/stampings/"
            rel="noreferrer"
            target="_blank"
          >
            View the official DARPA Engineering Stampings gallery
          </a>
        </p>
      </div>
    </section>
  )
}
