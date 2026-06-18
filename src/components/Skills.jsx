import { skills } from '../data/data'
import './Skills.css'

function Skills() {
  return (
    <div className="section skillsSection">
      <p className="sectionLabel">What I work with</p>
      <h2 className="sectionTitle">{skills.skillsTitle}</h2>

      <div className="skillsCategories">
        {skills.skillsCategories.map((category, i) => (
          <div key={i} className="skillsCategoryBlock">

            <div className="skillsCategoryHeader">
              <span
                className="skillsCategoryDot"
                style={{ background: category.skillsCategoryColor }}
              />
              <h3 className="skillsCategoryName">{category.skillsCategoryName}</h3>
            </div>

            <div className="skillsBadgeList">
              {category.skillsCategoryItems.map((skill, j) => (
                <div key={j} className="skillsBadge">
                  <span className="skillsBadgeName">{skill.name}</span>
                </div>
              ))}
            </div>

            {i < skills.skillsCategories.length - 1 && (
              <hr className="divider skillsDivider" />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills
