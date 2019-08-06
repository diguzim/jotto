import { getLetterMatchCount } from '../helpers';
import axios from 'axios';

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD"
};

export const guessWord = (guessWord) => {
  return function(dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessWord, letterMatchCount }
    });

    if (guessWord === secretWord) {
      dispatch({
        type: actionTypes.CORRECT_GUESS
      });
    }
  };
};

export const getSecretWord = () => {
  return (dispatch) => {
    // Nah I don't wanna a server
    // return axios.get('http://localhost:3030')
    //   .then(response => {
    //     dispatch({
    //       type: actionTypes.SET_SECRET_WORD,
    //       payload: response.data
    //     })
    //   })
    dispatch({
      type: actionTypes.SET_SECRET_WORD,
      payload: 'train'
    })
  }
}
