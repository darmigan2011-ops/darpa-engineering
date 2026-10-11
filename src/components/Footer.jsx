const repositoryUrl = 'https://github.com/darmigan2011-ops/darpa-engineering'

export default function Footer() {
  const logoUrl = `${import.meta.env.BASE_URL}brand/darpa-engineering-logo.webp`

  return (
    <footer className="site-footer">
      <div className="wrap footer-main">
        <div className="footer-brand">
          <a className="brand-link" href="#home" aria-label="DARPA Engineering home">
            <img src={logoUrl} alt="" width="960" height="416" loading="lazy" />
          </a>
          <p>Manufacturing in Hosur, Tamil Nadu, India.</p>
        </div>
        <nav className="footer-nav" aria-label="Footer navigation">
          <a href="#capabilities">Capabilities</a>
          <a href="#products">Parts</a>
          <a href="#company">Company</a>
          <a href="#industries">Industries</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
      <div className="wrap footer-bottom">
        <p>© {new Date().getFullYear()} DARPA Engineering</p>
        <a href={repositoryUrl} target="_blank" rel="noreferrer">Website repository on GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </footer>
  )
}
