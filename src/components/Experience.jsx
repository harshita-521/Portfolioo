import { useEffect, useRef, useState } from 'react'
import { experience } from '../data/data'
import './Experience.css'

function Experience() {
  const timelineRef = useRef(null)
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const el = timelineRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFilled(true) },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="section">
      <p className="sectionLabel">Where I've worked</p>
      <h2 className="sectionTitle">{experience.experienceTitle}</h2>

      {experience.experienceList.map((exp, i) => (
        <div key={i} className="expWrap">

          <div className="expTimeline" ref={timelineRef}>
            <div className="expDotStart" />

            <div className="expLine">
              <div className={`expLineFill ${filled ? 'expLineFilled' : ''}`} />
            </div>

            <div className={`expDotEnd ${filled ? 'expDotEndLit' : ''}`} />
          </div>

          <div className="expContent">
            <div className="expHeader">
              <div className="expLeft">
                <h3 className="expCompany">{exp.experienceCompany}</h3>
                <p className="expRole">{exp.experienceRole}</p>
              </div>
              <span className="expDuration">{exp.experienceDuration}</span>
            </div>

            <ul className="expPoints">
              {exp.experiencePoints.map((point, j) => (
                <li key={j} className="expPoint">
                  <span className="expPointDot" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Experience
