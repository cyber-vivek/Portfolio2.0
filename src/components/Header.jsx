import React, { useEffect, useRef, useState } from 'react'
import { HEADERS } from '../constants/info';
import styles from '../styles/header.module.css';

const Header = () => {
    const [isNavOpen, seIsNavOpen] = useState(false);
    const navRef = useRef(null);
    useEffect(() => {
        const handleOutsideClick =  (event) => {
            if(!navRef.current.contains(event.target)) {
                seIsNavOpen(false);
            }
        }
        const enableScrollOnBody = () => {
            document.body.style.height = 'auto';
            document.body.style.overflow = '';
        }
        if(isNavOpen) {
            document.addEventListener('click', handleOutsideClick);
            document.body.style.height = '100vh';
            document.body.style.overflow = 'hidden';
        } else {
            enableScrollOnBody();
            document.removeEventListener('click', handleOutsideClick);
        }
        return () => {
            document.removeEventListener('click', handleOutsideClick);
            enableScrollOnBody();
        }
    }, [isNavOpen])
    
    return (
        <nav className={styles.container}>
            <div className={styles.logo}>
                <span>{'<'}</span>Vivek<span>{'/>'}</span>
            </div>
            <div ref={navRef}>
            <ul className={`${styles.nav_links} ${isNavOpen ? styles.navOpen: ''}`}>
                {HEADERS.map(header => <a href={header.redirection}><li>{header.displayName}</li></a>)}  
            </ul>
            <div onClick={() => seIsNavOpen(prv => !prv)} className={styles.burger}>
                <div class="line1 "></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
            </div>
        </nav>
    )
}

export default Header