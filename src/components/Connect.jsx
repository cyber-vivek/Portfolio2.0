import React from "react";
import styles from "../styles/connect.module.css";
import linkedInIcon from "../assets/connectLinkedIn.svg";
import githhubIcon from "../assets/connectGithub.svg";
import instagramIcon from "../assets/connectInstagram.svg";
import facebookIcon from "../assets/connectFacebook.svg";

const Connect = () => {
  return (
    <div id="conncetSection" className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.innerContainer}>
          <span className={styles.line}></span>
          <span className={styles.text}>Get In Touch</span>
          <span className={styles.line}></span>
        </div>
      </div>
      <div className={styles.socialMediaLinks}>
        <a
          className={styles.linkedIn}
          href="https://www.linkedin.com/in/vivek-kv-2002/"
          target="blank"
        >
          <img src={linkedInIcon} alt="linkedIn" />
        </a>
        <a href="https://github.com/cyber-vivek" target="blank">
          <img src={githhubIcon} alt="github" />
        </a>
        <a href="https://www.instagram.com/vivek_verma.830/" target="blank">
          <img src={instagramIcon} alt="instagram" />
        </a>
        <a
          className={styles.facebook}
          href="https://www.facebook.com/profile.php?id=100010384099029"
          target="blank"
        >
          <img src={facebookIcon} alt="facebook" />
        </a>
      </div>
      <div className={styles.contactLinks}>
        <div className={styles.contact}>
          <div className={styles.contactIcon}>call</div>
          <a href="tel:8303511211">8303511211</a>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactIcon}>Email</div>
          <a href="mailto: vivekkr.verma14@gmail.com">
            vivekkr.verma14@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
