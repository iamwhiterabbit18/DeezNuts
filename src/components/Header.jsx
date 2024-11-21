import React from 'react'
import { Icon } from "@iconify/react";
import styles from "./components.module.scss"

function Header() {
  return (
    <header className={styles.nfHeader}>
      <div className='header-logo'>Logo</div>
      <Icon icon="solar:magnifer-outline" className={styles.headerIcon} />
    </header>
  )
}

export default Header;