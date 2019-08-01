import React from "react";
import { connect } from 'react-redux';

import { getSecretWord } from './actions';

import "./App.css";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from './Input';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <Congrats success={this.props.success} />
        <Input />
        <GuessedWords
          guessedWords={this.props.guessedWords}
        />
      </div>
    );
  }
}

const mapStateToProps = ({ success, secretWord, guessedWords }) => ({
  success, secretWord, guessedWords
});

export default connect(mapStateToProps, { getSecretWord })(App);
