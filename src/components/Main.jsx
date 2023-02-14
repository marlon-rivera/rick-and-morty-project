import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Main.module.css";
import Logo from "../img/logo.jpg";

function Main() {
  return (
    <div className={styles.landing}>
      <div className={styles.logo}>
        <img src={Logo} alt="Logo" width="800" />
      </div>
      <Link to="/loading" className={styles.go}>
        <div className={styles.button}>
          <span className={styles.enter}>GO AHEAD</span>
        </div>
      </Link>
    </div>
  );
}

export default Main;
