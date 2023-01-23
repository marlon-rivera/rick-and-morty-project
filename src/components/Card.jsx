import React, {useState} from "react";
import { connect } from "react-redux";
import styles from "./../styles/Card.module.css";
import { getCharacter } from "../js/redux/actionsCreators/actions";
import arrow1 from "../img/arrow1.png";
import arrow2 from "../img/arrow2.png";
import { useEffect } from "react";

const classes = `
    ${styles.selectButton} ${styles.gradientborder}
`;

function Card(props) {

  const [id, setId] = useState(1);

  useEffect(()=>{
    props.getCharacter(1);
  },[])

  function handlePrev(){
    setId(id - 1);
    props.getCharacter(id) 
  }

  function handleNext(){
    setId(id + 1);
    props.getCharacter(id) 
  }

  return (
    <div>
      <div>
        <button className={styles.arrowOne} onClick={()=>handlePrev()}>
          <img src={arrow1} alt="" width="100" />
        </button>
      </div>
      <div className={styles.allCard}>
        <div className={styles.containerCard}>
          <div className={styles.infoCard}>
            <img
              src={props.character.image}
              alt={props.character.image}
              className={styles.imgCharacter}
            />
            <h3 className={styles.characterName}>{props.character.name}</h3>
          </div>
        </div>
        <button className={classes}>SELECT</button>
      </div>
      <div>
        <button className={styles.arrowTwo} onClick={()=>handleNext()}>
          <img src={arrow2} alt="" width="100" />
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    character: state.character,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacter: (id) => dispatch(getCharacter(id)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
