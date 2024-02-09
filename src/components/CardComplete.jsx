import React from "react";
import { connect } from "react-redux";
import Card from "./Card";
import Button from "./Button";
import styles from "../styles/CardComplete.module.css";
import { deleteCharacter, getCharacter } from "../js/redux/actionsCreators/actions";

function CardComplete(props) {
  function nextHandler() {
    props.deleteCharacter()
    if (props.character.id !== props.totalCharacters) {
      props.getCharacter(props.character.id + 1);
    } else {
      props.getCharacter(1);
    }
  }

  function prevHandler() {
    props.deleteCharacter()
    if (props.character.id !== 1) {
      props.getCharacter(props.character.id - 1);
    } else {
      props.getCharacter(props.totalCharacters);
    }
  }

  return (
    <div className={styles.containerCard}>
      <div className={styles.arrowL}>
        <Button text="<" handler={prevHandler} />
      </div>

      <div className={styles.card}>
        <Card />
      </div>
      <div className={styles.arrowR}>
        <Button text=">" handler={nextHandler} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    character: state.character,
    totalCharacters: state.totalCharacters,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacter: (id) => dispatch(getCharacter(id)),
    deleteCharacter : () => dispatch(deleteCharacter())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardComplete);
