import React from "react";
import styles from "./../styles/NavBar.module.css";
import Logo from "./../img/logo.jpg";
import Searchicon from "./../img/searchicon.png";
import { Link, useLocation } from "react-router-dom";

const classesLink =  `${styles.options} ${styles.selected}`;

export default function NavBar(props) {

  let location = useLocation();

  return (
    <div className={styles.containerOptions}>
      <div>
        <img
          src={Logo}
          alt="Ric and morty Logo"
          width="250"
          height="70"
          className={styles.logo}
        />
      </div>
      <nav className={styles.navbar}>
        <Link to="/home" className={location.pathname == '/home' ? classesLink : styles.options}>
          HOME
        </Link>
        <Link to="/description" className={location.pathname == '/description' ? classesLink : styles.options}>
          DESCRIPTION
        </Link>
        <Link to="/chapters" className={location.pathname == '/chapters' ? classesLink : styles.options}>
          CHAPTERS
        </Link>
      </nav>
      <form action="" className={styles.searchF}>
        <input type="text" className={styles.searchBar} placeholder="Search" />
        <button className={styles.buttonSearch}>
          <img src={Searchicon} alt="search-icon" width="18" height="18" />
        </button>
      </form>
    </div>
  );
}
