import './App.css';
import { connect } from "react-redux";
import Card from './components/Card'
import NavBar from './components/NavBar';
import { useEffect } from "react";
import { getCharacter } from './js/redux/actionsCreators/actions';

function App(props) {

  

  return (
    <div className="App">
      <NavBar />
      <Card />
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


export default connect(mapStateToProps, mapDispatchToProps)(App);
