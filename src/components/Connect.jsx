import React from "react";
import styles from "../styles/connect.module.css";
import linkedInIcon from "../assets/connectLinkedIn.svg";
import githhubIcon from "../assets/connectGithub.svg";
import instagramIcon from "../assets/connectInstagram.svg";
import facebookIcon from "../assets/connectFacebook.svg";
import { CONNET_INFO } from "../constants/info";

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
          href={CONNET_INFO.linkedIn}
          target="blank"
        >
          <img src={linkedInIcon} alt="linkedIn" />
        </a>
        <a href={CONNET_INFO.github} target="blank">
          <img src={githhubIcon} alt="github" />
        </a>
        <a href={CONNET_INFO.instagram} target="blank">
          <img src={instagramIcon} alt="instagram" />
        </a>
        <a
          className={styles.facebook}
          href={CONNET_INFO.facebook}
          target="blank"
        >
          <img src={facebookIcon} alt="facebook" />
        </a>
      </div>
      <div className={styles.contactLinks}>
        <div className={styles.contact}>
          <div className={styles.contactIcon}>call</div>
          <a href={`tel:${CONNET_INFO.mobile}`}>{CONNET_INFO.mobile}</a>
        </div>
        <div className={styles.contact}>
          <div className={styles.contactIcon}>Email</div>
          <a href={`mailto:${CONNET_INFO.email}`}>
            {CONNET_INFO.email}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
