import React from 'react'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import styles from './newsfeed.module.scss'

function Newsfeed() {
  return (

    <section className={styles.nfContainer}>
        <Header />
      <main className={styles.nfMainContainer}>
        <div>Will add card here</div>
        <Navbar />
      </main>
    </section>

  )
}

export default Newsfeed
