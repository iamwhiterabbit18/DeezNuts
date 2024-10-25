import React from "react"
import styles from "./styles.module.scss"
const Team = () => {
  return (
    <div>
      <div className={styles.team}>
        <div className={styles.teamCont}></div>
        <div className={styles.teamCont2}>
          {/* HANDLE MEMBER CARDS HERE */}
          <div className={styles.member}>
            <div className={styles.memberImg}>
              <img src="" alt="" />
            </div>
            <div className={styles.memberName}>
              <h1>Robert Manguera</h1>
            </div>
            <p>Role</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Team
