import { connect } from "react-redux";
import styles from "./../styles/Card.module.css";
import loading from "../img/loading.gif";
import { Link } from "react-router-dom";
const classes = `
    ${styles.selectButton} ${styles.gradientborder}
`;

function Card(props) {
 
  return (
    <div className={styles.allCard}>
      <div className={styles.containerCard}>
        <div className={styles.infoCard}>
          <img
            src={props.character ? props.character.image : loading}
            alt={props.character ? props.character.image : 'Null'}
            className={styles.imgCharacter}
          />
          
          {<h3 className={styles.characterName}>{props.character ? (props.character.name.split(' ').length > 2 ? props.character.name.split(' ').slice(0,2).join(' ') : props.character.name) : 'Cargando...'}</h3>}
        </div>
      </div>
      <button className={classes}>
        <Link to="/description" className={styles.link}>
          SELECT
        </Link>
      </button>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    character: state.character,
    prevCharacter: state.prevCharacter
  };
}

export default connect(mapStateToProps, null)(Card);
