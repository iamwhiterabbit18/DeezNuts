import React from "react";
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

                    <button className={styles.nfPostMiscBtn}></button>
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
                        <span className={`${styles.PostCardIcon} material-icons-outlined`}>
                            favorite_outline
                        </span>
                        <span className={`${styles.PostCardIcon} material-icons-outlined`}>
                            maps_ugc_outline
                        </span>
                        <span className={`${styles.PostCardIcon} material-icons-outlined`}>
                            ios_share_outline
                        </span>
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