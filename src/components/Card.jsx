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
            alt={props.character ? props.character.image : null}
            className={styles.imgCharacter}
            loading="lazy"
          />
          {props.character && <h3 className={styles.characterName}>{props.character.name.split(' ').length > 2 ? props.character.name.split(' ').slice(0,2).join(' ') : props.character.name}</h3>}
          {!props.character && <h3 className={styles.characterName}>Cargando...</h3>}
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
  };
}

export default connect(mapStateToProps, null)(Card);
