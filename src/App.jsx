import React from 'react'
import ThemeToggle from '../components/ThemeToggle'

export default function App(){
  return (
    <div>
      <header className="site-header sticky">
        <nav className="nav">
          <a className="brand" href="#">My Name</a>
          <ul className="nav-list">
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#growth">Learning</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
          <ThemeToggle />
        </nav>
      </header>

      <main>
        <section id="about" className="hero">
          <div className="hero-inner" style={{display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap'}}>
            <img
              className="hero-image"
              src="/images/rors.jpg"
              alt="Profile"
              style={{width: 200, height: 200, borderRadius: 8, objectFit: 'cover'}}
            />

            <div className="hero-text">
              <h1 className="hero-title">About Me</h1>
              <p className="hero-sub">Third-year IT student at FSUU, focused on clean UX and modern web tooling.</p>
              <a className="hero-cta" href="#projects">See my work</a>
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Selected Projects</h2>
          <p className="muted">A snapshot of my skills, growth, and direction.</p>
          <div className="cards">
            <article className="card">
              <h3>1 — What I Know</h3>
              <p className="card-desc">A reliable, polished project demonstrating core HTML/CSS/JavaScript skills and accessibility.</p>
              <a className="card-link" href="#">View project →</a>
            </article>

            <article className="card">
              <h3>2 — What I Learned</h3>
              <p className="card-desc">A project that highlights a growth area (e.g., testing, performance optimization, a new framework).</p>
              <a className="card-link" href="#">View project →</a>
            </article>

            <article className="card">
              <h3>3 — What I'm Aspiring To</h3>
              <p className="card-desc">A forward-looking project showing direction (e.g., full-stack feature, advanced UX, tooling).</p>
              <a className="card-link" href="#">View project →</a>
            </article>
          </div>
        </section>

        <section id="growth" className="section">
          <h2>Currently Learning</h2>
          <p>Show recruiters that you have a growth mindset. Keep this list concise and update it frequently.</p>
          <ul>
            <li>Server-side rendering with Next.js</li>
            <li>TypeScript for safer code</li>
            <li>Automated testing (Jest + React Testing Library)</li>
          </ul>
        </section>

        <section id="contact" className="section contact">
          <h2>Contact</h2>
          <p>Connect: <a href="#">github.com/your-username</a> • <a href="#">linkedin.com/in/yourname</a></p>
        </section>
      </main>

      <footer className="site-footer">
        <small>Built for the "Future-Proof" Portfolio Project • Customize this content to reflect your work.</small>
      </footer>
    </div>
  )
}
