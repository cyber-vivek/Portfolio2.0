import React, { useEffect } from "react";
import styles from "../styles/projects.module.css";
import { PROJECTS } from "../constants/info";

const Projects = () => {

  useEffect(() => {
    const observerCallback = (entries => {
        entries.forEach(entry => {
          if(entry.intersectionRect.top) {
            entry.target.style.opacity = 0.6 + 0.4 * entry.intersectionRatio;
            entry.target.style.transform = `scale(${0.8 + 0.2 * entry.intersectionRatio})`;
          }
        })
    })
    const options = {
      threshold: Array.from({ length: 81 }, (_, i) => i * 0.0125),
      rootMargin: '0px 0px -15% 0px'
      };
      
    const observer = new IntersectionObserver(observerCallback, options);
    const element = document.querySelectorAll(`.${styles.cardContainer}`);
    element.forEach(node => {
        observer.observe(node);
    })
},[])

  return (
    <div className={styles.container}>
      <div className={styles.cardsContainer}>
        {PROJECTS.map((project) => (
          <div className={styles.cardContainer}>
            <section className={styles.card}>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{project.name}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <ul className={styles.techList}>
                  {project.techstack.map((tech) => (
                    <li key={tech} className={styles.techItem}>
                      {tech}
                    </li>
                  ))}
                </ul>
                {(project.githubUrl || project.liveUrl) &&
                <div className={styles.links}>
                  <a
                    href={project.githubUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="inline-block mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"></path>
                    </svg>
                    Github
                  </a>

                  <a
                    href={project.liveUrl}
                    className={styles.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 16 16"
                      className="inline-block mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m7.5-6.923c-.67.204-1.335.82-1.887 1.855A8 8 0 0 0 5.145 4H7.5zM4.09 4a9.3 9.3 0 0 1 .64-1.539 7 7 0 0 1 .597-.933A7.03 7.03 0 0 0 2.255 4zm-.582 3.5c.03-.877.138-1.718.312-2.5H1.674a7 7 0 0 0-.656 2.5zM4.847 5a12.5 12.5 0 0 0-.338 2.5H7.5V5zM8.5 5v2.5h2.99a12.5 12.5 0 0 0-.337-2.5zM4.51 8.5a12.5 12.5 0 0 0 .337 2.5H7.5V8.5zm3.99 0V11h2.653c.187-.765.306-1.608.338-2.5zM5.145 12q.208.58.468 1.068c.552 1.035 1.218 1.65 1.887 1.855V12zm.182 2.472a7 7 0 0 1-.597-.933A9.3 9.3 0 0 1 4.09 12H2.255a7 7 0 0 0 3.072 2.472"></path>
                    </svg>
                    Demo
                  </a>
                </div>
                }
              </div>
            </section>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
