import React from 'react'
import styles from '../styles/skills.module.css';
import { SKILLS } from '../constants/info';

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.subSection}>
        {
          SKILLS.map(category =>
            <>
              <h3 className={styles.title}>{category.name}</h3>
              <ul className={styles.grid}>
                {category.skills.map((skill, index) => (
                  <li key={index} className={styles.skillItem}>
                    <div className={styles.iconWrapper} style={{ backgroundColor: skill.bgColor }}>
                      {skill.icon}
                    </div>
                    <span className={styles.skillName}>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Skills