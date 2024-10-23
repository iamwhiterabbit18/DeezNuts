import React from "react"
import styles from "./styles.module.scss"
const SignIn = () => {
  return (
    <div className={styles.signIn}>
      <div className={styles.signInCont}>
        <h1>EAT OUR NUTS, AND WE'LL EAT YOURS ALSO.</h1>
        <p>nuts nuts and nuts nuts</p>
        <button className={styles.btn}>Enter your email address</button>
        <button className={styles.btn2}>Sign me on DeezNuts!</button>
      </div>
      <div className={styles.footer}>
        <div className={styles.sites}>{/* HANDLE SITES HERE */}</div>
        <h2>ALL RIGHTS RESERVED ON THESE NUTS 2024</h2>
      </div>
    </div>
  )
}

export default SignIn
