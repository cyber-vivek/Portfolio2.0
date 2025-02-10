import React from 'react'
import { HEADERS } from '../constants/info';
import styles from '../styles/header.module.css';

const Header = () => {
    
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                {'<Vivek/>'}
            </div>
            <ul className={styles.nav_links}>
                {HEADERS.map(header => <a><li>{header.displayName}</li></a>)}  
            </ul>
            <div className={styles.burger}>
                <div class="line1 "></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>
    )
}

export default Header