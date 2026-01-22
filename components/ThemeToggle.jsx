import React from 'react'

export default function ThemeToggle(){
  const [theme, setTheme] = React.useState('light')

  React.useEffect(() => {
    try{
      const stored = localStorage.getItem('theme')
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      const initial = stored || (prefersDark ? 'dark' : 'light')
      setTheme(initial)
      document.documentElement.setAttribute('data-theme', initial)
    }catch{ /* no-op */ }
  }, [])

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    try{ localStorage.setItem('theme', next) }catch{ /* no-op */ }
  }

  return (
    <button aria-label="Toggle theme" className="theme-toggle" onClick={toggle}>
      <span aria-hidden="true">{theme === 'dark' ? '🌙' : '☀️'}</span>
    </button>
  )
}
