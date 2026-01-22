import Head from 'next/head'
import Header from '../../components/Header'

export default function WhatILearned(){
  return (
    <>
      <Head>
        <title>Project • What I Learned</title>
      </Head>
      <Header />
      <main className="section">
        <div className="container">
          <h1>Project: What I Learned</h1>
          <p className="lead">A project highlighting a growth area such as testing, performance optimization, or learning a new framework.</p>
          <h2>Works</h2>
          <ul className="works-list" aria-label="Works for this project">
            <li>Set up unit tests with Jest and React Testing Library.</li>
            <li>Profiled performance and optimized bundle size.</li>
            <li>Refactored components to hooks and improved state management.</li>
          </ul>
        </div>
      </main>
    </>
  )
}
