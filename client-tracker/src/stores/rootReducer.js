import { combineReducers } from 'redux';

import exampleReducer from './sampleReducer/reducer';

export default function rootReducer(history) {
  const reducerMap = {
    exampleReducer: exampleReducer
  };

  return combineReducers(reducerMap);
}