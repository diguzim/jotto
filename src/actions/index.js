import { getLetterMatchCount } from '../helpers';

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
  GUESS_WORD: "GUESS_WORD"
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
