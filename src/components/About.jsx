import React from 'react';
import styles from '../styles/about.module.css';
import { ABOUT_INFO } from '../constants/info';

const About = () => {
  return (
    <div id='aboutSection' className={styles.container}>
        <div className={styles.about}>
            <h3>WHO I AM?</h3>
            {ABOUT_INFO}
        </div>
        <div className={styles.rightContainer}>
            <div className={styles.avatar}>
                <img src={`${process.env.PUBLIC_URL}/images/vivek-profile.jpg`} alt="Profile" />
            </div>
        </div>
    </div>
  )
}

export default About