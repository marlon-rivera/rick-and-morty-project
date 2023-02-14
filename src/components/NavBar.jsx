import React, { useState, useEffect } from "react";
import styles from "./../styles/NavBar.module.css";
import Logo from "./../img/logo.jpg";
import Searchicon from "./../img/searchicon.png";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { getCharacter } from "../js/redux/actionsCreators/actions";
import { Redirect } from "react-router-dom";

const LINK_API_CHARACTER_BY_NAME =
  "https://rickandmortyapi.com/api/character/?name=";
const classesLink = `${styles.options} ${styles.selected}`;

function NavBar(props) {
  let location = useLocation();
  let [focus, setFocus] = useState(false);
  let [results, setResults] = useState([]);

  async function changeHandler(e) {
    if (e.target.value.length > 0) {
      setFocus(true);
    } else {
      setFocus(false);
    }
    await fetch(LINK_API_CHARACTER_BY_NAME + e.target.value)
      .then((r) => r.json())
      .then((r) => (r.results ? r.results.length > 5? setResults(r.results.slice(0, 5)) : setResults(r.results) : setResults([])));
  }

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
        <Link
          to="/home"
          className={
            location.pathname === "/home" ? classesLink : styles.options
          }
        >
          HOME
        </Link>
        <Link
          to="/description"
          className={
            location.pathname === "/description" ? classesLink : styles.options
          }
        >
          DESCRIPTION
        </Link>
        <Link
          to="/chapters"
          className={
            location.pathname === "/chapters" ? classesLink : styles.options
          }
        >
          CHAPTERS
        </Link>
      </nav>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={styles.searchF}
      >
        <div className={styles.search}>
          <div>
            <input
              type="text"
              className={styles.searchBar}
              placeholder="Search"
              id="searchBar"
              onBlur={()=>{setTimeout(()=>{
                setFocus(false)
              }, 100)}}
              onChange={(e) => changeHandler(e)}
            />
            <button className={styles.buttonSearch}>
              <img src={Searchicon} alt="search-icon" width="18" height="18" />
            </button>
          </div>

          <div
            className={styles.results}
            hidden={focus ? false : true}
            style={{ zIndex: "1" }}
          >
            <div id="resultsCon" className={styles.containerResults}>
              <ul id="listResults">
                {results.length > 0 ? (
                  results.map((r) => {
                    return (
                      //rick-and-morty-project
                      <Link to="/home" key={r.id} onClick={()=>{props.getCharacter(r.id)}} className={styles.infoResult}>
                        {r.name}
                      </Link>
                    );
                  })
                ) : (
                  <li className={styles.infoResult}>NO HAY RESULTADOS</li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacter: (id) => dispatch(getCharacter(id)),
  };
}

export default connect(null, mapDispatchToProps)(NavBar);
