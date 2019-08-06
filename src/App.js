import React from "react";
import { connect } from 'react-redux';

import { getSecretWord } from './actions';

import "./App.css";

import GuessedWords from "./GuessedWords";
import Congrats from "./Congrats";
import Input from './Input';

export class UnconnectedApp extends React.Component {
  componentDidMount() {
    this.props.getSecretWord();
  }

  render() {
    return (
      <div className="container">
        <h1>Jotto</h1>
        <div>The secret word is {this.props.secretWord}</div>
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

export default connect(mapStateToProps, { getSecretWord })(UnconnectedApp);
