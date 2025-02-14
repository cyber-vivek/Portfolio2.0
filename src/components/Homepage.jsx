import React from "react";
import styles from "../styles/homepage.module.css";
import Header from "./Header";
import Code from "./Code";
import linkedInIcon from "../assets/linkedIn.svg";
import githubLogo from "../assets/github.svg";
import leetcodeIcon from "../assets/leetcode.svg";
import codeforcesIcon from "../assets/codeforces.svg";
import { RESUME_URL } from "../constants/info";

const Homepage = () => {
  return (
    <>
      <div className={styles.container}>
        <Header />
        <div className={styles.intoContainer}>
          <div className={styles.descriptionContainer}>
            <span>Hello World!</span>
            <span>
              This is <span className={styles.pinkText}>Vivek Kumar Verma</span>
              , I'm a Sofoware Developer
            </span>
            <div className={styles.navUrls}>
              <a
                href="https://www.linkedin.com/in/vivek-kv-2002/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedInIcon} alt="linkedIn" />
              </a>
              <a
                href="https://github.com/cyber-vivek"
                target="_blank"
                rel="noreferrer"
              >
                <img src={githubLogo} alt="github" />
              </a>
              <a
                href="https://leetcode.com/u/VivekKV/"
                target="_blank"
                rel="noreferrer"
              >
                <img src={leetcodeIcon} alt="leetcode" />
              </a>
              <a
                href="https://codeforces.com/profile/Vivek_KV"
                target="_blank"
                rel="noreferrer"
              >
                <img src={codeforcesIcon} alt="codeforces" />
              </a>
            </div>
            <div className={styles.downloadWrapper}>
              <a
                className={styles.downloadButton}
                role="button"
                target="_blank"
                rel="noopener noreferrer"
                href={RESUME_URL}
              >
                <span>Get Resume</span>
                <svg
                  className={styles.downloadIcon}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
                </svg>
              </a>
            </div>
          </div>
          <Code />
        </div>
      </div>
    </>
  );
};

export default Homepage;
