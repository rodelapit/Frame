import React from 'react'

export default function App(){
  return (
    <div>
      <header className="site-header">
        <nav className="nav">
          <a className="brand" href="#">My Name</a>
          <ul className="nav-list">
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">The Big Three</a></li>
            <li><a href="#growth">Currently Learning</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero" className="hero">
          <div className="hero-inner">
            <h1 className="hero-title">I help build accessible, maintainable web experiences.</h1>
            <p className="hero-sub">I am a third year IT student from FSUU</p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>The Big Three</h2>
          <p className="muted">Choose three projects that show growth: what you know, what you learned, and what you're aspiring to do.</p>
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
