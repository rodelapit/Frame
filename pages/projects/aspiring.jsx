import Head from 'next/head'
import Header from '../../components/Header'

export default function Aspiring(){
  return (
    <>
      <Head>
        <title>Project • Aspiring</title>
      </Head>
      <Header />
      <main className="section">
        <div className="container">
          <h1>Project: What I'm Aspiring To</h1>
          <p className="lead">A forward-looking project showing direction—full‑stack features, advanced UX, or modern tooling.</p>
          <h2>Works</h2>
          <ul className="works-list" aria-label="Works for this project">
            <li>Drafted UI mockups and interaction flows.</li>
            <li>Outlined API endpoints and database schema.</li>
            <li>Built a small prototype to validate the idea.</li>
          </ul>
        </div>
      </main>
    </>
  )
}
