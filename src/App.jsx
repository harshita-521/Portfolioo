import { useState, useEffect } from 'react'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import ThemeToggle from './components/ThemeToggle'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Work from './components/Work'
import Experience from './components/Experience'
import Achievement from './components/Achievement'

function App() {
  const [loading, setLoading] = useState(true)

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('portfolio-theme') || 'dark'
  })
 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('portfolio-theme', theme)
  }, [theme])

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2900)
    return () => clearTimeout(timer)
  }, [])

  const toggleTheme = () => setTheme(t => t === 'dark' ? 'light' : 'dark')

  return (
    <div className="app">
      {loading && <Loader />}

      <ThemeToggle theme={theme} onToggle={toggleTheme} />

      <div className={`pageContent ${loading ? 'pageHidden' : 'pageVisible'}`}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="work"><Work /></section>
        <section id="experience"><Experience /></section>
        <section id="achievement"><Achievement /></section>
      </div>

      {!loading && <Navbar />}
    </div>
  )
}

export default App
