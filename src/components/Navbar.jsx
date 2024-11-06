import React from "react";
import { Icon } from "@iconify/react";
import styles from "./components.module.scss"

function Navbar() {
    return(
        <nav className={styles.nfNav}>
            <Icon icon="solar:home-smile-angle-linear" className={styles.navIcon} />
            <Icon icon="solar:bell-bing-linear" className={styles.navIcon} />
            <Icon icon="solar:add-circle-linear" className={styles.navIcon} />
            <Icon icon="solar:chat-line-linear" className={styles.navIcon} />
            <Icon icon="solar:user-circle-linear" className={styles.navIcon} />
        </nav>
    );
};

export default Navbar;