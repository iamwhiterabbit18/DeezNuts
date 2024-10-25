import React from "react"
import styles from "./styles.module.scss"
const images = ["/landingPage/img1.jpg", "/landingPage/img2.jpg"]
const Message = () => {
  return (
    <div className={styles.message}>
      <div className={styles.messageImg}>
        <div className={styles.img1}>
          <img src={images[0]} alt="" />
        </div>
        <div className={styles.img2}>
          <img src={images[1]} alt="" />
        </div>
      </div>
      <div className={styles.messageCont}>
        <div className={styles.gray}>
          <h1>Deez Nuts would break your jaw</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
            voluptas aut nostrum, sed non deserunt maiores dolores labore nam
            accusamus fugiat quos quas. Sapiente delectus officia nobis ad
            molestias cumque.
          </p>
          <h2>Project Manager, Gene</h2>
        </div>
        <div className={styles.black}></div>
      </div>
    </div>
  )
}

export default Message
