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
              <img src={props.character.image} width="270px"/>
            </div>
          </div>
          <div>
            <h1>{props.character.name}</h1>
            <h3>STATUS: {props.character.status}</h3>
            <h3>SPECIES: {props.character.species}</h3>
            <h3>CREATED: {props.character.created}</h3>
            <h3>GENDER: {props.character.gender}</h3>
            <h3>ORIGIN: {props.character.origin.name}</h3>
            <h3>URL: <a href={props.character.url} target="_blank">{props.character.url}</a></h3>
            <h3>EPISODES:   <Link to="/chapters">{props.character.episode.length}</Link></h3>
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
