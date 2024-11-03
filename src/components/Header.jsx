import React from 'react'
import styles from "./components.module.scss"

function Header() {
  return (
    <header className={styles.nfHeader}>
      <div className='header-logo'>Logo</div>

      <span className={`${styles.headerIcon} material-icons-outlined`}>
        search
      </span>
    </header>
  )
}

export default Header;