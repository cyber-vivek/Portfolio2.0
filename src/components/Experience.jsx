import React, { useEffect } from 'react'
import styles from '../styles/experience.module.css';
import { EXPERIENCE_DATA } from '../constants/info';

const Experience = () => {

  useEffect(() => {
    const observerCallback = (entries => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                entry.target.classList.add(styles.show);
                observer.unobserve(entry.target);
            }
        })
    })
    const options = {
        threshold: 0.3,
      };
      
    const observer = new IntersectionObserver(observerCallback, options);
    const element = document.querySelectorAll(`.${styles.timelineList}>li`);
    element.forEach(node => {
        observer.observe(node);
    })
},[])

  return (
    <div id='experienceSection' className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.innerContainer}>
          <span className={styles.line}></span>
          <span className={styles.text}>Experience</span>
          <span className={styles.line}></span>
        </div>
      </div>
      <div className={styles.listContainer}>
      <ul class={styles.timelineList}>
                {
                    EXPERIENCE_DATA.map(timeline => 
                        <li>
                    <div>
                        <span>{timeline.TIME}</span>
                        <div class={styles.content}>
                            <h3>{timeline.TITLE}</h3>
                            <ul>
                                {
                                    timeline.POINTS.map(point => <li>{point}</li>)
                                }
                            </ul>
                        </div>
                    </div>
                </li>)
                }
            </ul>
      </div>
    </div>
  );
}

export default Experience