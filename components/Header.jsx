import React from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header(){
  return (
    <header className="site-header container sticky">
      <nav className="nav">
        <a className="brand" href="/" aria-label="Home">Home</a>
        <ul className="nav-list">
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#growth">Learning</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  )
}
