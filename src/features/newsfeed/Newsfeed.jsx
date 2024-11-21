import React from 'react'
import Header from '@components/Header'
import Navbar from '@components/Navbar'
import styles from './newsfeed.module.scss'
import PostCard from '@components/PostCard'

function Newsfeed() {
  return (

    <section className={styles.nfContainer}>
        <Header />
      <main className={styles.nfMainContainer}>
        <div className={styles.nfPostCardContainer}>
          <PostCard />
          <PostCard />

        </div>
        <Navbar />
      </main>
    </section>

  )
}

export default Newsfeed
