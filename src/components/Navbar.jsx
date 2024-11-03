import React from "react";
import styles from "./components.module.scss"

function Navbar() {
    return(
        <nav className={styles.nfNav}>
            <span className={`${styles.navIcon} material-icons-outlined`}>
                home
            </span>
            <span className={`${styles.navIcon} material-icons-outlined`}>
                notifications
            </span>
            <span className={`${styles.navIcon} material-icons-outlined`}>
                add
            </span>
            <span className={`${styles.navIcon} material-icons-outlined`}>
                sms
            </span>
            <span className={`${styles.navIcon} material-icons-outlined`}>
                person
            </span>
        </nav>
    );
};

export default Navbar;