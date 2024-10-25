import React from "react"
import styles from "./styles.module.scss"
const ComProjects = () => {
  return (
    <div className={styles.comProjects}>
      <div className={styles.comProjectsCont}>
        <div className={styles.green}></div>
        <h1>COMMUNITY PROJECTS</h1>
      </div>
      <div className={styles.comProjectsImg}>
        {/* HANDLE THE CAROUSEL OF IMAGES HERE */}
        <a href="*">
          <img src="/landingPage/img3.jpg" alt="" />
        </a>
      </div>
    </div>
  )
}

export default ComProjects
