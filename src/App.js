import "./App.css";
import { connect } from "react-redux";
import CardComplete from "./components/CardComplete";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import { getCharacter, getTotalCharacters } from "./js/redux/actionsCreators/actions";
import Description from "./components/Description";
import React, { useEffect } from "react";

function App(props) {
  useEffect(() => {
    props.getCharacter(1);
  }, []);

  return (
    <div className="App">
      <Route path="/">
        <NavBar />
      </Route>
      <Route exact path="/home">
        <CardComplete />
      </Route>
      <Route exact path="/description">
        <Description />
      </Route>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    character: state.character,
    totalCharacters : state.totalCharacters
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getCharacter: (id) => dispatch(getCharacter(id)),
    getTotalCharacters: () => dispatch(getTotalCharacters())
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
