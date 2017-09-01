import { ADD_CARD } from '../actions';
import { REMOVE_CARD } from '../actions';

const initialState = { cards: ['Hearts', 'Clubs', 'Diamonds', 'Spades'] };

const cards = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        cards: [...state.cards, action.card]
      };
      break;

    case REMOVE_CARD:
      return {
        cards: state.cards.filter( (card) => {
          return card !== action.card;
        })
      };
      break;

    default:
      return state;
  }
};


export default cards;

