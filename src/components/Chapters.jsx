import React, { useEffect, useState } from "react";
import Styles from "../styles/Chapters.module.css";
import Chapter from "./Chapter";
import Footer from "./Footer";
import { connect } from "react-redux";

function Chapters(props) {
  let [episodes, setEpisodes] = useState([]);
  
  useEffect(()=>{
    let total = props.character.episode.length;
    (async ()=>{
      for (let i = 0; i < total; i++) {
        await fetch(props.character.episode[i]).then(r=>r.json()).then(r=>{
          episodes.push(r);
          let result = episodes.map((ep)=>{
            return ep;
          })
          setEpisodes(result)
        })
      }
    })()
    
  }, [])

  return (
    <div className={Styles.containerChapters}>
      <div className={Styles.chapters}>
        {episodes.length > 0 ? (
          episodes.map((ep) => {
            return <Chapter key={ep.id} chapter={ep} />;
          })
        ) : (
          <h3>LOADiNG</h3>
        )}
      </div>
      <Footer />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    character: state.character,
  };
}

export default connect(mapStateToProps, null)(Chapters);
