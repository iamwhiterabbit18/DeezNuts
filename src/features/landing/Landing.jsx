import React from "react"
import styles from "./landing.module.scss"

import {
  Greetings,
  Message,
  Mission,
  ComProjects,
  Team,
  Reason,
  SignIn,
} from "@landing"

function Landing() {
  return (
    <div className={styles.cont}>
      <Greetings />
      <Message />
      <Mission />
      <ComProjects />
      <Team />
      <Reason />
      <SignIn />
    </div>
  )
}

export default Landing
