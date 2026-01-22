import Head from 'next/head'
import Header from '../../components/Header'

export default function WhatIKnow(){
	return (
		<>
			<Head>
				<title>Project • Responsive Personal Portfolio Website</title>
			</Head>
			<Header />
			<main className="section">
				<div className="container">
					<h1>Project: Responsive Personal Portfolio Website</h1>
					<h2>Description</h2>
					<p className="lead">A responsive personal portfolio built using semantic HTML, modern CSS, and vanilla JavaScript. The project focuses on clean layout, accessibility, and mobile-first design.</p>

					<h2>Features</h2>
					<ul>
						<li>Semantic HTML5 structure</li>
						<li>Responsive layout (Flexbox / Grid)</li>
						<li>Accessible navigation (ARIA labels, keyboard support)</li>
						<li>Light JavaScript for interactivity (menu toggle, smooth scroll)</li>
					</ul>

					<h2>Tech Stack</h2>
					<ul>
						<li>HTML</li>
						<li>CSS</li>
						<li>JavaScript</li>
					</ul>

					<h2>Works</h2>
					<ul className="works-list" aria-label="Works for this project">
						<li>Built the homepage layout with a responsive grid and hero section.</li>
						<li>Implemented accessible navigation with focus styles and skip links.</li>
						<li>Added smooth scrolling and a mobile menu toggle with vanilla JS.</li>
					</ul>
				</div>
			</main>
		</>
	)
}
