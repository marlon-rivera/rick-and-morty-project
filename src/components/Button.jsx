import React from "react";
import styles from "../styles/Button.module.css"

const styleButton = {
    background : 'black'
}

function Button(props){

    return(
        <div >
           <button style={styleButton} onClick={props.handler} className={styles.button}><div className={styles.text}>{props.text}</div></button> 
        </div>
    );
}

export default Button;