import React, { useEffect } from 'react'
import styles from '../styles/timeline.module.css';
import { TIMELINE_DATA } from '../constants/info';

const Timeline = () => {

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
            threshold: 0.5,
          };
          
        const observer = new IntersectionObserver(observerCallback, options);
        const element = document.querySelectorAll(`.${styles.timelineList}>li`);
        element.forEach(node => {
            observer.observe(node);
        })
    },[])

    return (
        <div className={styles.container}>
            <ul class={styles.timelineList}>
                {
                    TIMELINE_DATA.map(timeline => 
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
    )
}

export default Timeline