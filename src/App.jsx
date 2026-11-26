import { useState } from "react";
import "./App.css";

const services = [
  {
    number: "01",
    icon: "shield",
    title: "Protection des données personnelles",
    description:
      "Renforcez votre maîtrise des données et la confiance de vos parties prenantes.",
  },
  {
    number: "02",
    icon: "compass",
    title: "Accompagnement relatif à l’ARS et à l’APDP",
    description:
      "Un accompagnement dédié à vos démarches liées à l’ARS et à l’APDP.",
  },
  {
    number: "03",
    icon: "archive",
    title: "Formation à l’archivage physique et électronique",
    description:
      "Faites évoluer les pratiques d’archivage au sein de vos équipes.",
  },
  {
    number: "04",
    icon: "documents",
    title: "Gestion électronique des documents",
    description:
      "Structurez, centralisez et valorisez vos documents.",
  },
  {
    number: "05",
    icon: "search",
    title: "Lutte contre le blanchiment des capitaux",
    description:
      "Renforcez vos dispositifs de vigilance et de conformité.",
  },
];

function Icon({ name, className = "" }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    archive: (
      <>
        <path d="M3 4h18v5H3z" />
        <path d="M5 9v11h14V9M10 13h4" />
      </>
    ),
    compass: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5z" />
      </>
    ),
    documents: (
      <>
        <path d="M14 2H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <path d="M14 2v6h6M8 13h8M8 17h8" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    close: (
      <>
        <path d="m18 6-12 12M6 6l12 12" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4M11 8v6M8 11h6" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      viewBox="0 0 24 24"
    >
      {paths[name] ?? paths.arrow}
    </svg>
  );
}

function BrandMark() {
  return (
    <svg aria-hidden="true" fill="none" viewBox="0 0 44 44">
      <path d="M22 2 40 9v12c0 11-7.7 18-18 21C11.7 39 4 32 4 21V9L22 2Z" />
      <path d="M15 14v16m14-16v16m-14-8h14" />
    </svg>
  );
}

function HeroArtwork() {
  return (
    <div className="hero-artwork">
      <img
        src="https://img.magnific.com/photos-premium/etudiant-medecine-posant-question-lors-seminaire_274679-36456.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Illustration de HOUEDONOU & FILS"
        className="hero-image"
      />
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site">
      <header className="site-header">
        <a
          aria-label="HOUEDONOU & FILS — accueil"
          className="brand"
          href="#accueil"
          onClick={closeMenu}
        >
          <BrandMark />
          <span className="brand-copy">
            <span className="brand-name">HOUEDONOU <span>&amp; FILS</span></span>
            <span className="brand-descriptor">Conseil · Conformité · Archives</span>
          </span>
        </a>

        <button
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          <Icon name={menuOpen ? "close" : "menu"} />
        </button>

        <nav
          aria-label="Navigation principale"
          className={`primary-navigation${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
        >
          <a href="#accueil" onClick={closeMenu}>Accueil</a>
          <a href="#presentation" onClick={closeMenu}>Notre approche</a>
          <a href="#services" onClick={closeMenu}>Nos expertises</a>
          <a href="#plateforme" onClick={closeMenu}>La plateforme</a>
          <a className="nav-cta" href="#services" onClick={closeMenu}>
            Nos domaines d’intervention
            <Icon name="arrow" />
          </a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-rule" />
              Conseil · Conformité · Archives
            </p>
            <h1 id="hero-title">
              La conformité,
              <br />
              pensée pour <em>durer.</em>
            </h1>
            <p className="hero-description">
              Des enjeux réglementaires à la maîtrise documentaire, nous
              accompagnons les organisations avec méthode, clarté et exigence.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#services">
                Découvrir nos expertises
                <Icon name="arrow" />
              </a>
              <a className="text-link" href="#presentation">
                Découvrir notre approche
              </a>
            </div>
            <div className="hero-assurance">
              <span aria-hidden="true" className="assurance-line" />
              <span>Un partenaire engagé à vos côtés</span>
            </div>
          </div>
          <HeroArtwork  className="hidden"/>
          <span aria-hidden="true" className="hero-index">01 — 05</span>
        </section>

        <section
          aria-labelledby="presentation-title"
          className="approach section-shell"
          id="presentation"
        >
          <div className="section-index">01 <span>—</span> Notre approche</div>
          <div className="approach-content">
            <p className="eyebrow">Conseil en conformité &amp; maîtrise documentaire</p>
            <h2 id="presentation-title">
              La rigueur du conseil.
              <br />
              <em>La force de la confiance.</em>
            </h2>
            <div className="approach-bottom">
              <p>
                HOUEDONOU &amp; FILS intervient dans la conformité, la protection
                des données, l’archivage et la gestion documentaire. Une
                expertise pensée pour éclairer vos enjeux et accompagner vos
                démarches avec discernement.
              </p>
              <div aria-label="Nos engagements" className="principles">
                <span>Exigence</span>
                <span>Confidentialité</span>
                <span>Engagement</span>
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="services-title"
          className="services section-shell"
          id="services"
        >
          <div className="services-heading">
            <div>
              <div className="section-index">02 <span>—</span> Nos expertises</div>
              <p className="eyebrow">Des réponses adaptées à vos enjeux</p>
              <h2 id="services-title">
                Maîtriser vos obligations.
                <br />
                <em>Sérénité dans l’action.</em>
              </h2>
            </div>
            <p className="services-intro">
              Cinq domaines d’intervention au croisement de la conformité, de
              la gouvernance des données et de la maîtrise documentaire.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span className="service-icon">
                    <Icon name={service.icon} />
                  </span>
                  <span className="service-number">{service.number}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <span aria-hidden="true" className="card-rule" />
              </article>
            ))}
          </div>
        </section>

        <section
          aria-labelledby="platform-title"
          className="platform"
          id="plateforme"
        >
          <div className="platform-inner section-shell">
            <div className="platform-copy">
              <div className="section-index section-index-light">
                03 <span>—</span> Votre espace dédié
              </div>
              <p className="eyebrow">Bientôt à vos côtés</p>
              <h2 id="platform-title">
                Une plateforme pensée
                <br />
                pour <em>vous accompagner.</em>
              </h2>
              <p className="platform-description">
                Un espace dédié à l’évaluation et au suivi de la sécurité des
                patients est en préparation. Nous vous en dirons davantage
                prochainement.
              </p>
              <a className="button button-light" href="#services">
                Découvrir nos expertises
                <Icon name="arrow" />
              </a>
            </div>

            <div aria-hidden="true" className="platform-preview">
              <div className="preview-topbar">
                <span className="preview-brand-mark">H<span>&amp;</span>F</span>
                <span className="preview-status">
                  <span />
                  Bientôt disponible
                </span>
              </div>
              <div className="preview-content">
                <span className="preview-kicker">VOTRE ESPACE</span>
                <span className="preview-heading">Évaluation &amp; suivi</span>
                <span className="preview-divider" />
                <span className="preview-skeleton preview-skeleton-long" />
                <span className="preview-skeleton preview-skeleton-short" />
                <span className="preview-progress">
                  <span />
                </span>
                <span className="preview-footnote">
                  Une expérience pensée pour vos équipes
                </span>
              </div>
              <span aria-hidden="true" className="preview-orbit preview-orbit-one" />
              <span aria-hidden="true" className="preview-orbit preview-orbit-two" />
            </div>
          </div>
        </section>

        <section aria-labelledby="closing-title" className="closing">
          <div className="closing-inner section-shell">
            <p className="eyebrow">Votre prochaine étape</p>
            <h2 id="closing-title">
              Des enjeux singuliers.
              <br />
              Des réponses <em>adaptées.</em>
            </h2>
            <p>
              Explorez nos domaines d’intervention et identifiez les expertises
              adaptées aux priorités de votre organisation.
            </p>
            <a className="button button-dark" href="#services">
              Découvrir nos expertises
              <Icon name="arrow" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a aria-label="HOUEDONOU & FILS — accueil" className="footer-brand" href="#accueil">
          <BrandMark />
          <span>HOUEDONOU <span>&amp; FILS</span></span>
        </a>
        <p>Conseil · Conformité · Archives</p>
        <p className="footer-copyright">
          © {new Date().getFullYear()} HOUEDONOU &amp; FILS. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;
