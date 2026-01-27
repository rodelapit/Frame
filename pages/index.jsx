import Head from 'next/head'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

export default function Home(){
  return (
    <>
      <Head>
        <title>Future-Proof Portfolio</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>

      <Header />

      <main>
        <section id="about" className="hero">
          <div className="container hero-inner about-layout">
            <img className="about-image" src="/images/rors.jpg" alt="Profile" />
            <div className="about-text">
              <h1 className="hero-title">About Me</h1>
              <p className="hero-sub">I am a motivated individual with a strong interest in web systems and modern technologies. I enjoy learning new tools, designing user-friendly interfaces, and building systems that solve real-world problems. I am always eager to improve my skills and grow as a technology professional.</p>
              <a className="cta" href="#projects">See my work</a>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="container">
            <h2>Selected Projects</h2>
            <p className="muted">A quick snapshot of my skills, growth, and direction.</p>
            <div className="cards">
              <a className="card" href="/projects/what-i-know">
                <h3>1 — What I Know</h3>
                <p className="card-desc">Reliable, polished work demonstrating core HTML/CSS/JS and accessibility.</p>
                <span className="card-link">View project →</span>
              </a>

              <a className="card" href="/projects/what-i-learned">
                <h3>2 — What I Learned</h3>
                <p className="card-desc">Highlights a growth area (testing, performance, or a new framework).</p>
                <span className="card-link">View project →</span>
              </a>

              <a className="card" href="/projects/aspiring">
                <h3>3 — What I'm Aspiring To</h3>
                <p className="card-desc">Forward-looking work showing direction (full‑stack features, advanced UX, tooling).</p>
                <span className="card-link">View project →</span>
              </a>
            </div>
          </div>
        </section>

        <section id="growth" className="section">
          <div className="container">
            <h2>Currently Learning</h2>
            <p className="lead">Currently learning core concepts of my subject, including web system development, UI/UX principles, and the use of modern technologies to build functional and user-friendly applications.</p>
            <ul className="learning-list" aria-label="Topics I'm learning">
              <li>Web system development</li>
              <li>UI/UX principles</li>
              <li>Modern technologies for functional apps</li>
            </ul>
          </div>
        </section>

        <section id="contact" className="section contact">
          <div className="container">
            <h2>Contact</h2>
            <p>If you'd like to reach me, send a message using the form below or email <a href="mailto:rodel.apit@urios.edu.ph">rodel.apit@urios.edu.ph</a>.</p>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <small>Built for the "Future-Proof" Portfolio Project • Customize this content to reflect your work.</small>
        </div>
      </footer>
    </>
  )
}
