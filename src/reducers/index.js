import { combineReducers } from 'redux';
import cards from './kanbanReducers';

// Explain import cards
const reducers = combineReducers({
  cards
});

export default reducers;