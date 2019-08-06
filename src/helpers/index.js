export function getLetterMatchCount(guessesWord, secretWord) {
  console.log('secretWord: ', secretWord);
  const secretLettersSet = new Set(secretWord.split(''));
  const guessedLettersSet = new Set(guessesWord.split(''));
  return [...secretLettersSet].filter(letter => guessedLettersSet.has(letter)).length;
}
