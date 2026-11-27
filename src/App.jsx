import { useState } from "react";
import "./App.css";
import "./site.css";

const contactEmail = "houedonou.fils@gmail.com";

const expertiseAreas = [
  {
    id: "assistance",
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
    id: "accompagnement",
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
    id: "archivage",
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
    id: "ged",
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
    id: "lcb-ft",
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

const courses = [
  {
    id: "formation-droit-numerique",
    menuTitle: "Droit numérique",
    title: "Droit du Numérique",
    description:
      "Approche complète du cadre juridique applicable aux activités numériques, incluant la protection des données personnelles, le droit de l’intelligence artificielle, le commerce électronique et la cybersécurité.",
    program:
      "Loi n° 2017-20 du 20 avril 2018 portant Code du numérique en République du Bénin, cybersécurité, commerce électronique, environnement juridique du numérique au travail et blanchiment.",
    audience: "Juristes, DSI, RSSI, RH, conformité…",
    duration: "45h",
    price: "350.000 FCFA",
  },
  {
    id: "formation-protection-sectorielle",
    menuTitle: "Données sectorielles",
    title: "Protection des Données dans les Secteurs Finance, Assurance et Santé",
    description:
      "Spécifique aux secteurs sensibles pour assurer la conformité des traitements de données financières, assurantielles et médicales, avec une forte exigence de sécurité et de conformité.",
    program:
      "Réglementations sectorielles, cartographie des traitements, sécurité, audit et accompagnement APDP.",
    audience: "Juristes, DSI, RH, conformité…",
    duration: "35h",
    price: "300.000 FCFA",
  },
  {
    id: "formation-droit-cybersecurite",
    menuTitle: "Droit cyber",
    title: "Droit de la Cybersécurité",
    description:
      "Approche juridique de la cybersécurité : obligations, référentiels et gestion des risques cyber.",
    program:
      "Intrusions, conformité, documentation sécurité, bug bounty, audit cyber et pseudonymisation.",
    audience: "Juristes, RSSI, auditeurs…",
    duration: "70h",
    price: "400.000 FCFA",
  },
  {
    id: "formation-cybersecurite-donnees",
    menuTitle: "Cyber & données",
    title: "Cybersécurité et Protection des Données Personnelles",
    description:
      "Formation transverse à la sécurité et protection des données personnelles.",
    program:
      "Loi n°2017-20 du 20 avril 2018 portant Code du numérique en République du Bénin, gouvernance cyber, obligations métiers, analyse de risques, plan d’actions.",
    audience: "Juristes, DSI, RH, conformité…",
    duration: "50h",
    price: "350.000 FCFA",
  },
  {
    id: "formation-lcb-ft-finance",
    menuTitle: "LCB-FT — Finance",
    title: "Lutte contre le Blanchiment - Banques, Microfinances, Assurances",
    description:
      "Prévenir et détecter les risques de blanchiment dans les institutions financières.",
    program:
      "Dispositifs LCB-FT (Lutte Contre le Blanchiment de capitaux et le Financement du Terrorisme), réglementation, contrôles internes, déclaration de soupçons.",
    audience: "Compliance, juridique, direction, audit…",
    duration: "20h",
    price: "250.000 FCFA",
  },
  {
    id: "formation-lcb-ft-immobilier",
    menuTitle: "LCB-FT — Immobilier",
    title: "Lutte contre le Blanchiment - Secteur Immobilier",
    description:
      "Encadrer les flux financiers dans le secteur immobilier à risques.",
    program:
      "Obligations des professionnels, typologies de blanchiment et contrôle des opérations.",
    audience: "Agents immo, promoteurs, juristes…",
    duration: "20h",
    price: "250.000 FCFA",
  },
  {
    id: "formation-lcb-ft-juridique",
    menuTitle: "LCB-FT — Juridique",
    title: "Lutte contre le Blanchiment - Professions Juridiques (Avocats, Notaires)",
    description:
      "Respect du cadre réglementaire et du secret professionnel pour la lutte contre le blanchiment et le financement du terrorisme dans les professions réglementées.",
    program:
      "Activités concernées, déclaration de soupçon, secret professionnel et vigilance client.",
    audience: "Avocats, notaires, conformité…",
    duration: "20h",
    price: "250.000 FCFA",
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

  function handleContactSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Demande de contact — HOUEDONOU & FILS — ${formData.get("topic")}`;
    const body = [
      `Nom : ${formData.get("lastName")}`,
      `Prénom : ${formData.get("firstName")}`,
      `Adresse e-mail : ${formData.get("email")}`,
      formData.get("phone") ? `Téléphone : ${formData.get("phone")}` : "",
      formData.get("organization") ? `Organisation : ${formData.get("organization")}` : "",
      `Objet : ${formData.get("topic")}`,
      "",
      "Message :",
      formData.get("message"),
    ].filter(Boolean).join("\n");

    window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <a href="#a-propos" onClick={closeMenu}>À propos</a>
          <details className="nav-dropdown">
            <summary>Données personnelles</summary>
            <div className="nav-submenu">
              <a href="#accompagnement" onClick={closeMenu}>Accompagnement</a>
              <a href="#assistance" onClick={closeMenu}>Assistance</a>
            </div>
          </details>
          <a href="#archivage" onClick={closeMenu}>Archives &amp; GED</a>
          <details className="nav-dropdown">
            <summary>Formations</summary>
            <div className="nav-submenu">
              {courses.map((course) => (
                <a
                  aria-label={course.title}
                  href={`#${course.id}`}
                  key={course.id}
                  onClick={closeMenu}
                >
                  {course.menuTitle}
                </a>
              ))}
            </div>
          </details>
          <a href="#sante" onClick={closeMenu}>Santé</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
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

        <section aria-labelledby="about-title" className="intro-section" id="a-propos">
          <div className="section-shell intro-grid">
            <div>
              <p className="section-kicker">Qui sommes-nous ?</p>
              <h2 id="about-title">
                HOUEDONOU &amp; FILS — Votre partenaire conformité.
              </h2>
            </div>
            <div className="intro-copy">
              <p>
                HOUEDONOU &amp; FILS accompagne les organisations dans leurs
                démarches de conformité, la protection des données
                personnelles et l’amélioration de leurs pratiques de gestion
                documentaire.
              </p>
              <div className="about-facts">
                <div className="about-fact">
                  <h3>Nos domaines d’intervention</h3>
                  <p>
                    Ils couvrent notamment
                    l’accompagnement relatif à l’Agence de Régulation du
                    Secteur de la Santé (ARS) et à l’Autorité de Protection
                    des Données Personnelles (APDP), la formation à
                    l’archivage physique et électronique, ainsi que la
                    gestion électronique des documents. L’entreprise
                    intervient également dans le domaine de la lutte contre
                    le blanchiment des capitaux.
                  </p>
                </div>
                <div className="about-fact">
                  <h3>Un accompagnement adapté</h3>
                  <p>
                    À travers ces domaines, HOUEDONOU &amp; FILS vise à
                    apporter aux organisations un accompagnement adapté à
                    leurs besoins en matière de conformité, de gestion de
                    l’information et de maîtrise de leurs obligations.
                  </p>
                </div>
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
                <article className="expertise-card" id={area.id} key={area.number}>
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

        <section
          aria-labelledby="training-title"
          className="training-section"
          id="formations"
        >
          <div className="section-shell">
            <div className="section-heading">
              <div>
                <p className="section-kicker">Notre offre de formation</p>
                <h2 id="training-title">Notre offre de formation</h2>
              </div>
              <p>
                Dans le cadre de nos activités, nous proposons deux modalités de formation.
              </p>
            </div>
            <div className="course-grid">
              {courses.map((course) => (
                <article className="course-card" id={course.id} key={course.id}>
                  <h3>{course.title}</h3>
                  <p className="course-description">{course.description}</p>
                  <div className="course-facts">
                    <p>
                      <span>Durée</span>
                      <strong>{course.duration}</strong>
                    </p>
                    <p>
                      <span>Tarif</span>
                      <strong>{course.price}</strong>
                    </p>
                  </div>
                  <div className="course-details">
                    <div>
                      <h4>Programme / Contenu</h4>
                      <p>{course.program}</p>
                    </div>
                    <div>
                      <h4>Public visé</h4>
                      <p>{course.audience}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            <p className="training-formats">
              <strong>Formations INTRA :</strong> organisées sur mesure en entreprise.
            </p>
            <p className="training-formats">
              <strong>Formations INTER :</strong> organisées en sessions collectives ouvertes à tous.
            </p>
          </div>
        </section>

        <section aria-labelledby="method-title" className="method-section" id="approche">
          <div className="section-shell method-layout">
            <div>
              <p className="section-kicker">Notre approche</p>
              <h2 id="method-title">
                Pragmatique, réactive et <em>opérationnelle.</em>
              </h2>
              <p className="method-intro">
                Les équipes savent s’intégrer rapidement dans les environnements
                les plus complexes, dans une démarche collaborative.
              </p>
            </div>
            <ol className="method-steps">
              <li>
                <span>01</span>
                <div>
                  <h3>Pragmatiques</h3>
                  <p>Savoir-faire et connaissances pratiques de terrain.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <h3>Réactives et opérationnelles</h3>
                  <p>Capables de s’intégrer rapidement dans des environnements complexes.</p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <h3>Collaboratives</h3>
                  <p>Une démarche collaborative dans l’accompagnement.</p>
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

        <section aria-labelledby="contact-title" className="contact-section" id="contact">
          <div className="section-shell contact-layout">
            <div className="contact-copy">
              <p className="section-kicker">Contact</p>
              <h2 id="contact-title">Écrire à HOUEDONOU &amp; FILS.</h2>
              <p>
                Renseignez les champs ci-dessous. Votre application de
                messagerie s’ouvrira avec un message prérempli que vous pourrez
                vérifier avant de l’envoyer.
              </p>
              <address aria-label="Coordonnées de HOUEDONOU & FILS" className="contact-details">
                <div>
                  <span>E-mail</span>
                  <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
                </div>
                <div>
                  <span>Téléphone</span>
                  <a href="tel:0161614747">0161614747</a>
                </div>
              </address>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <div className="contact-form-grid">
                <label>
                  Nom *
                  <input autoComplete="family-name" name="lastName" required />
                </label>
                <label>
                  Prénom *
                  <input autoComplete="given-name" name="firstName" required />
                </label>
                <label>
                  Adresse e-mail *
                  <input autoComplete="email" name="email" required type="email" />
                </label>
                <label>
                  Téléphone (facultatif)
                  <input autoComplete="tel" name="phone" type="tel" />
                </label>
              </div>
              <label>
                Organisation (facultatif)
                <input autoComplete="organization" name="organization" />
              </label>
              <label>
                Domaine concerné *
                <select defaultValue="" name="topic" required>
                  <option disabled value="">Choisir un domaine</option>
                  <option>Protection des données personnelles</option>
                  <option>Accompagnement relatif à l’ARS et à l’APDP</option>
                  <option>Notre offre de formation</option>
                  <option>Formation à l’archivage physique et électronique</option>
                  <option>Gestion électronique des documents</option>
                  <option>Lutte contre le blanchiment des capitaux</option>
                  <option>Autre demande</option>
                </select>
              </label>
              <label>
                Votre message *
                <textarea minLength={10} name="message" required rows={5} />
              </label>
              <p className="contact-form-note">
                Le site ne transmet ni ne conserve ces informations. Votre
                messagerie prépare un e-mail que vous pourrez vérifier et
                choisir d’envoyer. Évitez d’inclure des données sensibles ou
                des pièces confidentielles.
              </p>
              <button className="button button-dark" type="submit">
                Préparer mon e-mail <Icon name="arrow" />
              </button>
            </form>
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
        <div className="footer-links">
          <a href="#a-propos">À propos</a>
          <a href="#assistance">Données personnelles</a>
          <a href="#archivage">Archives &amp; GED</a>
          <a href="#formations">Formations</a>
          <a href="#sante">Santé</a>
          <a href="#contact">Contact</a>
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
