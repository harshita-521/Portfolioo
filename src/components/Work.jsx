import { useState } from 'react'
import { work } from '../data/data'
import './Work.css'

function Work() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggle(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <div className="section">
      <p className="sectionLabel">What I've built</p>
      <h2 className="sectionTitle">{work.workTitle}</h2>

      <div className="workProjectList">
        {work.workProjects.map((project, i) => {
          const isOpen = openIndex === i
          return (
            <div key={i} className="workProjectItem">
              <hr className="divider" />

              <button
                className={`workProjectRow ${isOpen ? 'workProjectRowOpen' : ''}`}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
              >
                <span className="workProjectNum">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="workProjectMain">
                  <h3 className="workProjectName">{project.workProjectName}</h3>
                  <div className="workProjectTechList">
                    {project.workProjectTech.map((tech, j) => (
                      <span key={j} className="tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <span className={`workProjectChevron ${isOpen ? 'workProjectChevronOpen' : ''}`}>
                  ↓
                </span>
              </button>

              <div className={`workProjectExpand ${isOpen ? 'workProjectExpandOpen' : ''}`}>
                <div className="workProjectExpandInner">
                  <p className="workProjectDesc">{project.workProjectDesc}</p>
                  {project.workProjectGithub && project.workProjectGithub !== '#' && (
                    <a
                      href={project.workProjectGithub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="workProjectLink"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          )
        })}
        <hr className="divider" />
      </div>
    </div>
  )
}

export default Work
