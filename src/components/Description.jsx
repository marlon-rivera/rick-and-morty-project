import React from "react";
import Styles from "./../styles/Description.module.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Description(props) {
  if (props.character) {
      return (
        <div className={Styles.description}>
          <div className={Styles.background}>
            <div  className={Styles.image}>
              <img src={props.character.image} width="250px" alt={props.character.image}/>
            </div>
          </div>
          <div>
            <h1>{props.character.name}</h1>
            <h3>STATUS: <span className={Styles.info}>{props.character.status}</span></h3>
            <h3>SPECIES: <span className={Styles.info}>{props.character.species}</span></h3>
            <h3>CREATED: <span className={Styles.info}>{props.character.created}</span></h3>
            <h3>GENDER: <span className={Styles.info}>{props.character.gender}</span></h3>
            <h3>ORIGIN: <span className={Styles.info}>{props.character.origin.name}</span></h3>
            <h3>URL: <span className={Styles.info}><a href={props.character.url} target="_blank" rel="noreferrer">{props.character.url}</a></span></h3>
            <h3>EPISODES:   <span className={Styles.info}><Link to="/chapters">{props.character.episode.length}</Link></span></h3>
          </div>
        </div>
      );
  }else{
    return (<h1>LOADING</h1>)
  }
}
function mapStateToProps(state) {
  return {
    character: state.character,
  };
}

export default connect(mapStateToProps, null)(Description);
