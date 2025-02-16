import React, { useEffect } from "react";
import styles from "../styles/skills.module.css";
import { SKILLS } from "../constants/info";

const Skills = () => {
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show);
          observer.unobserve(entry.target);
        }
      });
    };
    const options = {
      threshold: 0.3,
      rootMargin: "0px 0px -10% 0px"
    };

    const observer = new IntersectionObserver(observerCallback, options);
    const element = document.querySelectorAll(`.${styles.categoryContainer}`);
    element.forEach((node) => {
      observer.observe(node);
    });
  }, []);

  return (
    <div id="skillsSection" className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.innerContainer}>
          <span className={styles.line}></span>
          <span className={styles.text}>Skills</span>
          <span className={styles.line}></span>
        </div>
      </div>
      <div className={styles.subSection}>
        {SKILLS.map((category) => (
          <div className={styles.categoryContainer}>
            <h3 className={styles.title}>{category.name}</h3>
            <ul className={styles.grid}>
              {category.skills.map((skill, index) => (
                <li key={index} className={styles.skillItem}>
                  <div
                    className={styles.iconWrapper}
                    style={{ backgroundColor: skill.bgColor }}
                  >
                    {skill.icon}
                  </div>
                  <span className={styles.skillName}>{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
