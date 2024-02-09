import React from "react";
import styles from "../styles/Loading.module.css"
import LoadingBar from "./LoadingBar";

function Loading(){

    return(
        <div className={styles.loading}>
            <div className={styles.imageLoading}>
            </div>
            <div>
                <LoadingBar />
            </div>
        </div>
    );
}

export default Loading;