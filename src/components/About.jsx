import { about, home } from '../data/data'
import './About.css'

function About() {
  return (
    <div className="section aboutSection">
      <p className="sectionLabel">Who I am</p>
      <h2 className="sectionTitle">{about.aboutTitle}</h2>

      <div className="aboutGrid">

        <div className="aboutLeft">
          <p className="aboutDescription">{about.aboutDescription}</p>
        </div>

        <div className="aboutRight">
          <h3 className="aboutSubLabel">Education</h3>
          <div className="aboutEduList">
            {about.aboutEducation.map((edu, i) => (
              <div key={i} className="aboutEduRow">
                <div className="aboutEduLeft">
                  <p className="aboutEduSchool">{edu.aboutEduSchool}</p>
                  <p className="aboutEduDegree">{edu.aboutEduDegree}</p>
                </div>
                <div className="aboutEduRight">
                  <span className="aboutEduYear">{edu.aboutEduYear}</span>
                  <span className="aboutEduGrade">
                    <span className="aboutEduGradeNum">{edu.aboutEduGrade}</span>
                    <span className="aboutEduGradeLabel">{edu.aboutEduGradeLabel}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="aboutStats">

        {home.homeStats.map((stat, i) => (
          <a
            key={i}
            href={stat.homeStatsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="aboutStatItem"
          >
            <span className="aboutStatVal" style={{ color: stat.homeStatsColor }}>
              {stat.homeStatsRating}
            </span>
            <span className="aboutStatLabel">{stat.homeStatsPlatform}</span>
          </a>
        ))}

        <div className="aboutStatSep" />

        <div className="aboutStatItem">
          <span className="aboutStatVal" style={{ color: 'var(--accentLight)' }}>
            {home.homeStatsDSA}
          </span>
          <span className="aboutStatLabel">DSA Solved</span>
        </div>

        <div className="aboutStatSep" />

        <div className="aboutStatItem">
          <span className="aboutStatVal" style={{ color: 'var(--accentLight)' }}>
            {home.homeStatsWins}
          </span>
          <span className="aboutStatLabel">Hackathon Wins</span>
        </div>

      </div>
    </div>
  )
}

export default About
