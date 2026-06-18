import { useState, useEffect } from 'react'
import { home } from '../data/data'
import './Navbar.css'

const navSections = ['home', 'about', 'skills', 'work', 'experience', 'achievement']

function Navbar() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const observers = []

    navSections.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { threshold: 0.35 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="navbar">

      <NavBtn id="home"       label="Home"        active={activeSection} onPress={scrollTo}><IconHome /></NavBtn>
      <NavBtn id="about"      label="About"       active={activeSection} onPress={scrollTo}><IconAbout /></NavBtn>
      <NavBtn id="skills"     label="Skills"      active={activeSection} onPress={scrollTo}><IconSkills /></NavBtn>
      <NavBtn id="work"       label="Work"        active={activeSection} onPress={scrollTo}><IconWork /></NavBtn>
      <NavBtn id="experience" label="Exp"         active={activeSection} onPress={scrollTo}><IconExp /></NavBtn>
      <NavBtn id="achievement" label="Awards"     active={activeSection} onPress={scrollTo}><IconAward /></NavBtn>

      <div className="navDivider" />

      <a
        className="navItem navItemResume"
        href={home.homeResumeLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <IconResume />
        <span className="navLabel">Resume</span>
      </a>

    </nav>
  )
}

function NavBtn({ id, label, active, onPress, children }) {
  return (
    <button
      className={`navItem ${active === id ? 'navItemActive' : ''}`}
      onClick={() => onPress(id)}
    >
      {children}
      <span className="navLabel">{label}</span>
    </button>
  )
}

function IconHome() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
      <path d="M9 21V12h6v9" />
    </svg>
  )
}

function IconAbout() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    </svg>
  )
}

function IconSkills() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  )
}

function IconWork() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
    </svg>
  )
}

function IconExp() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18" />
      <path d="M9 21V9" />
    </svg>
  )
}

function IconAward() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

function IconResume() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="9" y1="13" x2="15" y2="13" />
      <line x1="9" y1="17" x2="13" y2="17" />
    </svg>
  )
}

export default Navbar
