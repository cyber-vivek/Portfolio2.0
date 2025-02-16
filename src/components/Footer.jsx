import React from "react";
import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <footer>
      <div>&copy; {new Date().getFullYear()} Portfolio</div>
      <div className={styles.footMadeinfo}> Made with ❤️ by Vivek</div>
    </footer> 
  );
};

export default Footer;
