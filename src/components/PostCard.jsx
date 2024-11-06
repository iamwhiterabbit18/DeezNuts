import React from "react";
import { Icon } from "@iconify/react";
import styles from "./components.module.scss"

function PostCard() {
    return(
        <article className={styles.nfPostCardFrame}>
            <slot className={styles.nfPostCardHeader}>
                <div className={styles.nfPostCardHeaderInfo}>
                    <img className={styles.nfPostCardUserProfilePicture}></img>
                    <div className={styles.nfPostCardUserProfileText}>
                        <h1>
                            User.Name
                        </h1>
                        <p>
                           22 Hours Ago
                        </p>
                    </div>
                </div>

                <div className={styles.nfPostCardHeaderBtns}>
                    <button className={styles.nfPostCardFollow}>
                        + Follow
                    </button>

                    
                    <Icon icon="solar:menu-dots-bold" className={styles.nfPostMiscBtn} />
                    
                </div>
            </slot>

            <div className={styles.nfPostCardImage}>

            </div>

            <slot className={styles.nfPostCardBottom}>
                <div className={styles.nfPostCardBottomTop}>
                    <h1 className={styles.nfPostCardTitle}>
                        Post Title
                    </h1>
                    
                    <div className={styles.nfPostCardEngagements}>
                        <Icon icon="solar:heart-angle-linear" className={styles.PostCardIcon} />
                        <Icon icon="solar:chat-round-line-linear" className={styles.PostCardIcon} />
                        <Icon icon="solar:share-linear" className={styles.PostCardIcon} />
                    </div>          
                </div>

                <p className={styles.nfPostCardCaption}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </slot>
        </article>
    );
};

export default PostCard;