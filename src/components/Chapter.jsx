import React from "react";
import Styles from "../styles/Chapter.module.css";

function Chapter(props) {

  const stylesContainer = {
    container :{
      position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
    }
  }

  return (
    <div className={Styles.containerChapter}>
      <div className={Styles.infoChapter}>
        <div style={stylesContainer.container}>
          <h2 className={Styles.infoEpisode}>Name : {props.chapter.name}</h2>
          <h5 className={Styles.infoEpisode}>Number : {props.chapter.id}</h5>
          <h5 className={Styles.infoEpisode}>Air Date : {props.chapter.air_date}</h5>
          <h5 className={Styles.infoEpisode}>Episode : {props.chapter.episode}</h5>
          <h5 className={Styles.infoEpisode}>URL : <a href={props.chapter.url} target="_blank">CLiCk HERE</a></h5>
        </div>
      </div>
    </div>
  );
}

export default Chapter;
