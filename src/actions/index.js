export const ADD_CARD = 'ADD_CARD';
export const REMOVE_CARD = 'REMOVE_CARD';

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    card: card
  };
};