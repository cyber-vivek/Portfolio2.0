import React from 'react'
import styles from '../styles/homepage.module.css';
import Header from './Header';
import Code from './Code';

const Homepage = () => {
  return (
    <>
    <div className={styles.container}>
        <Header/>
        <div className={styles.intoContainer}>
            <div className={styles.descriptionContainer}>
                <span>
                    Hello World!
                </span>
                <span>
                    This is <span className={styles.pinkText}>Vivek Kumar Verma</span>, I'm a Sofoware Developer
                </span>
            </div>
            <Code/>
        </div>
    </div>
    </>
  )
}

export default Homepage