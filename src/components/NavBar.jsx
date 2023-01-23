import React from "react";
import styles from "./../styles/NavBar.module.css";
import Logo from "./../img/logo.jpg";
import Searchicon from "./../img/searchicon.png"

export default function NavBar(props) {
  return (
    <div className={styles.containerOptions}>
      <div >
        <img src={Logo} alt="Ric and morty Logo" width="250" height="70" className={styles.logo} />
      </div>
      <nav className={styles.navbar}>
        <a href="#" className={styles.options}>HOME</a>
        <a href="#" className={styles.options}>DESCRiPTiON</a>
        <a href="#" className={styles.options}>CHAPTERS</a>
      </nav>
      <form action="" className={styles.searchF}>
        <input type="text" className={styles.searchBar} placeholder="Search" />
        <button className={styles.buttonSearch}><img src={Searchicon} alt="search-icon" width="18" height="18" /></button>
      </form>
    </div>
    
  );
}
