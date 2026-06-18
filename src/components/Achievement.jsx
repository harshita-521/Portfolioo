import { work } from '../data/data'
import './Achievement.css'

function Achievement() {
  return (
    <div className="section">
      <p className="sectionLabel">Recognition</p>
      <h2 className="sectionTitle">Achievements</h2>

      <div className="achList">
        {work.workAchievements.map((ach, i) => (
          <div key={i} className="achItem">
            <hr className="divider" />
            <div className="achRow">

              <p className="achType">{ach.workAchType}</p>
              <div className="achContent">
                <h3 className="achTitle">{ach.workAchTitle}</h3>
                <p className="achDesc">{ach.workAchDesc}</p>

                <div className="achLinks">
                  {ach.workAchCert && (
                    <a
                      href={ach.workAchCert}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achLink"
                    >
                      <IconCert /> Certificate ↗
                    </a>
                  )}
                  {ach.workAchProfile && (
                    <a
                      href={ach.workAchProfile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="achLink"
                    >
                      <IconProfile /> Profile ↗
                    </a>
                  )}
                </div>
              </div>

            </div>
          </div>
        ))}
        <hr className="divider" />
      </div>
    </div>
  )
}

function IconCert() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}

function IconProfile() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default Achievement
