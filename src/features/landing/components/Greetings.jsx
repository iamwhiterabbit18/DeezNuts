import React from "react"
import styles from "./styles.module.scss"
export const Greetings = () => {
  return (
    <>
      <div className={styles.greetings}>
        <div className={styles.greetingsCont}>
          <div>
            <h1>Greetings!</h1>
            <div>
              <h2>WHERE YOUR NUTS</h2>
            </div>
            <h1>getz Nutz</h1>
          </div>
          <button className={styles.btn}>LEARN NUTS!</button>
        </div>
      </div>
      <div className={styles.overlay}></div>
    </>
  )
}

export default Greetings
