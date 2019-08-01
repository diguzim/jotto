import React from 'react';
import { shallow } from 'enzyme';

import { storeFactory } from '../test/testUtils';
import App from './App';

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<App store={store} />).dive().dive();
  return wrapper;
}

it('renders without crashing', () => {
  const wrapper = setup();
});

describe('redux props', () => {
  test('has success piece of state as prop', () => {
    const success = true;
    const wrapper = setup({ success });
    const successProp = wrapper.instance().props.success;

    expect(successProp).toBe(success);
  });

  test('has secretWord piece of state as prop', () => {
    const secretWord = 'party';
    const wrapper = setup({ secretWord });
    const secretWordProp = wrapper.instance().props.secretWord;

    expect(secretWordProp).toBe(secretWord);
  });

  test('has guessedWords piece of state as prop', () => {
    const guessedWords = [];
    const wrapper = setup({ guessedWords });
    const guessedWordsProp = wrapper.instance().props.guessedWords;

    expect(guessedWordsProp).toBe(guessedWords);
  });

  test(' getSecretWord action creator us a function on the props', () => {
    const wrapper = setup();
    const getSecretWordProp = wrapper.instance().props.getSecretWord;

    expect(getSecretWordProp).toBeInstanceOf(Function);
  });
});
