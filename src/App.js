import "./App.css";
import { connect } from "react-redux";
import CardComplete from "./components/CardComplete";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import Description from "./components/Description";
import Chapters from "./components/Chapters";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import {
  getCharacter,
  getTotalCharacters,
} from "./js/redux/actionsCreators/actions";
import React, { useEffect } from "react";

function App(props) {
  useEffect(() => {
    props.getCharacter(1);
    console.log(props.episodes)
  }, [props.character]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Main></Main>
          <Footer />
        </Route>
        <Route exact path="/loading">
          <Loading />
          <Footer />
        </Route>
        <Route exact path="/home">
          <NavBar />
          <CardComplete />
          <Footer />
        </Route>
        <Route exact path="/description">
          <NavBar />
          <Description />
          <Footer />
        </Route>
        <Route exact path="/chapters">
          <NavBar />
          <Chapters />
          
        </Route>
        <Route>
          <div></div>
        </Route>
      </Switch>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    character: state.character,
    totalCharacters: state.totalCharacters,
    episodes: state.episodes
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacter: (id) => dispatch(getCharacter(id)),
    getTotalCharacters: () => dispatch(getTotalCharacters()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
