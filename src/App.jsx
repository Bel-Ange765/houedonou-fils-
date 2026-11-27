import { useState } from "react";
import "./App.css";
import "./site.css";

const expertiseAreas = [
  {
    number: "01",
    category: "Activité",
    title: "Protection des données personnelles",
    description:
      "Accompagnement juridique et assistance pour examiner vos traitements de données personnelles et structurer votre mise en conformité.",
    points: [
      "Audit juridique et technique des traitements",
      "Cartographie et registre des traitements",
      "Mesures de sécurité adaptées",
      "Assistance en cas de difficulté ou d’incident",
    ],
  },
  {
    number: "02",
    category: "Accompagnement",
    title: "Accompagnement relatif à l’ARS et à l’APDP",
    description:
      "Un appui pour identifier et préparer les démarches relatives aux traitements de données personnelles auprès de l’APDP.",
    points: [
      "Analyse de la situation et des formalités applicables",
      "Accompagnement des démarches de déclaration",
      "Préparation des demandes d’autorisation",
      "Assistance adaptée à votre activité",
    ],
  },
  {
    number: "03",
    category: "Formation",
    title: "Formation à l’archivage physique et électronique",
    description:
      "Des formations et un accompagnement pour organiser le traitement et la conservation des archives et de l’information documentaire.",
    points: [
      "Organisation des archives et des centres documentaires",
      "Archivage physique et électronique",
      "Dématérialisation des courriers, factures et actes",
      "Formation des équipes",
    ],
  },
  {
    number: "04",
    category: "Gestion documentaire",
    title: "Gestion électronique des documents",
    description:
      "Conseil et accompagnement pour structurer les documents, les bibliothèques et les systèmes d’information documentaire.",
    points: [
      "Audit documentaire et étude des besoins",
      "Intégration d’une solution de GED libre ou propriétaire",
      "Bibliothèques virtuelles et bases documentaires",
      "Informatisation des centres d’archives",
    ],
  },
  {
    number: "05",
    category: "Conformité",
    title: "Lutte contre le blanchiment des capitaux",
    description:
      "Formations sur la prévention du blanchiment de capitaux et du financement du terrorisme, adaptées aux secteurs concernés.",
    points: [
      "Banques, microfinances et assurances",
      "Secteur immobilier",
      "Professions juridiques",
      "Vigilance, contrôles et obligations sectorielles",
    ],
  },
];

const faqs = [
  {
    question: "À qui s’adressent vos services ?",
    answer:
      "Les entreprises, associations, institutions publiques, professions réglementées, structures de santé et autres organismes peuvent nous solliciter. L’accompagnement est défini selon votre activité, vos traitements et vos besoins.",
  },
  {
    question: "Pouvez-vous accompagner un projet de vidéosurveillance ?",
    answer:
      "Nous pouvons vous aider à examiner les traitements envisagés et à identifier les démarches à vérifier auprès de l’APDP. Les formalités dépendent de la situation et doivent être confirmées avec l’autorité compétente.",
  },
];

function Icon({ name }) {
  const paths = {
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m18 6-12 12M6 6l12 12" />,
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4M11 8v6M8 11h6" />
      </>
    ),
  };

  return (
    <svg
      aria-hidden="true"
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

function HeroArtwork() {
  return (
    <div className="hero-artwork">
      <img
        src="https://img.magnific.com/photos-premium/etudiant-medecine-posant-question-lors-seminaire_274679-36456.jpg?semt=ais_hybrid&w=740&q=80"
        alt="Professionnel de santé lors d’un séminaire"
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
          <span aria-hidden="true" className="brand-logo-crop">
            <img src="/houedonou-fils-logo.jpg" alt="" />
          </span>
          <span className="brand-copy">
            <span className="brand-name">HOUEDONOU <span>&amp; FILS</span></span>
            <span className="brand-descriptor">Enseigne de HORUS INTERNATIONAL GROUP</span>
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
          <a href="#groupe" onClick={closeMenu}>Le groupe</a>
          <a href="#expertises" onClick={closeMenu}>Nos activités</a>
          <a href="#sante" onClick={closeMenu}>Santé</a>
          <a href="#faq" onClick={closeMenu}>FAQ</a>
        </nav>
      </header>

      <main>
        <section aria-labelledby="hero-title" className="hero" id="accueil">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-rule" />
              Numérique · Données · Archives
            </p>
            <h1 id="hero-title">
              Le numérique,
              <br />
              en <em>confiance.</em>
            </h1>
            <p className="hero-description">
              Conseil, accompagnement et formation pour aider les organisations
              à protéger leurs données, maîtriser leurs risques et faire évoluer
              leurs pratiques.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#expertises">
                Découvrir nos expertises
                <Icon name="arrow" />
              </a>
            </div>
            <div className="hero-assurance">
              <span aria-hidden="true" className="assurance-line" />
              <span>Accompagnement sur mesure</span>
            </div>
          </div>
          <HeroArtwork />
          <span aria-hidden="true" className="hero-index">CONSEIL — FORMATION</span>
        </section>

        <section aria-labelledby="group-title" className="intro-section" id="groupe">
          <div className="section-shell intro-grid">
            <div>
              <p className="section-kicker">HOUEDONOU &amp; FILS</p>
              <h2 id="group-title">
                Une expertise concrète au service de vos <em>enjeux numériques.</em>
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                HOUEDONOU &amp; FILS est l’enseigne commerciale de HORUS
                INTERNATIONAL GROUP, une entreprise spécialisée en ingénierie
                informatique et en accompagnement à la protection des données
                personnelles.
              </p>
              <p>
                Nous accompagnons entreprises, institutions publiques et
                professions réglementées grâce à une approche pragmatique,
                collaborative et adaptée aux réalités du terrain.
              </p>
              <div className="intro-values">
                <span>Conseil opérationnel</span>
                <span>Accompagnement adapté</span>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="expertise-title" className="expertise-section" id="expertises">
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Nos activités</p>
                <h2 id="expertise-title">
                  Nos domaines d’intervention, au service de votre <em>organisation.</em>
                </h2>
              </div>
              <p>
                Nos cinq activités principales, présentées dans leur périmètre,
                avec des modalités adaptées à vos besoins.
              </p>
            </div>

            <div className="expertise-grid">
              {expertiseAreas.map((area) => (
                <article className="expertise-card" key={area.number}>
                  <div className="expertise-card-top">
                    <span className="expertise-number">{area.number}</span>
                    <span className="expertise-category">{area.category}</span>
                  </div>
                  <h3>{area.title}</h3>
                  <p className="expertise-description">{area.description}</p>
                  <ul>
                    {area.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="method-title" className="method-section">
          <div className="section-shell method-layout">
            <div>
              <p className="section-kicker">Notre façon de travailler</p>
              <h2 id="method-title">
                Du besoin initial à une démarche <em>structurée.</em>
              </h2>
              <p className="method-intro">
                Une collaboration construite autour de votre organisation,
                avec des objectifs compréhensibles et un accompagnement adapté.
              </p>
            </div>
            <ol className="method-steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Comprendre votre contexte</h3>
                  <p>Échanger sur vos activités, vos pratiques et vos priorités.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Définir l’accompagnement</h3>
                  <p>Préciser le périmètre, le programme et les modalités de travail.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Transmettre et faire évoluer</h3>
                  <p>Accompagner vos équipes dans la mise en œuvre des actions retenues.</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <section
          aria-labelledby="health-title"
          className="health-platform-section"
          id="sante"
        >
          <div className="section-shell health-platform-layout">
            <div className="health-platform-copy">
              <p className="section-kicker">Établissements de santé</p>
              <h2 id="health-title">
                Votre clinique est-elle prête pour le dispositif de sécurité des patients ?
              </h2>
              <p className="health-effective-date">Depuis juillet 2025</p>
              <p>
                Le dispositif de l’ARS relatif à la sécurité des patients
                s’applique aux formations sanitaires publiques et privées.
                Des évaluateurs de l’ARS suivent sa mise en œuvre.
              </p>
              <p>
                HOUEDONOU &amp; FILS accompagne les établissements de santé dans
                la préparation à ce dispositif.
              </p>
            </div>
            <div className="health-sector-card">
              <span className="health-card-label">Accompagnement santé</span>
              <span className="health-card-title">
                Établissements de santé de premier contact
              </span>
              <span className="health-card-divider" />
              <span className="health-card-description">
                Dispositif de l’ARS pour la sécurité des patients
              </span>
            </div>
          </div>
        </section>

        <section aria-labelledby="faq-title" className="faq-section" id="faq">
          <div className="section-shell faq-layout">
            <div>
              <p className="section-kicker">Questions fréquentes</p>
              <h2 id="faq-title">
                Les informations <em>essentielles.</em>
              </h2>
            </div>
            <div className="faq-list">
              {faqs.map((item) => (
                <details key={item.question}>
                  <summary>{item.question}<span>+</span></summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

      </main>

      <footer className="site-footer">
        <a aria-label="HOUEDONOU & FILS — accueil" className="footer-brand" href="#accueil">
          <span aria-hidden="true" className="footer-logo-crop">
            <img src="/houedonou-fils-logo.jpg" alt="" />
          </span>
          <span>HOUEDONOU <span>&amp; FILS</span></span>
        </a>
        <p>Enseigne commerciale de HORUS INTERNATIONAL GROUP</p>
        <div className="footer-links">
          <a href="#expertises">Expertises</a>
          <a href="#faq">FAQ</a>
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} HOUEDONOU &amp; FILS. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default App;
