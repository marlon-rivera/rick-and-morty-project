import React, { useState, useEffect } from "react";
import { Redirect} from "react-router-dom";

import styles from "../styles/LoadingBar.module.css";

function LoadingBar() {
  let [progress, setProgress] = useState(0);
  
  useEffect(() => {
    if(progress < 100){
      setTimeout(()=>{
        setProgress(progress+1);
      }, 90)
    }
  }, [progress]);

  if(progress === 100){
    return(
      <Redirect to="/home" />
    );
  }
  
  const styleProgress = {
    progressBar : {
      width : progress * 9.3
    },
    portalProgress : {
      left : (progress * 9.3) - 40
    }
  }

  return (
    <div className="container">
      <h3 className={styles.numberProgress}>{progress} %</h3>
      <div className={styles.bar}>
        <div className={styles.progress} style={styleProgress.progressBar}></div>
        <div className={styles.portalProgress} style={styleProgress.portalProgress}></div>
      </div>
    </div>
  );
}

export default LoadingBar;
