let cardId = 0;

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    id: cardId++,
    status: 'queue',
    ...card
  };
};

export const deleteCard = (id) => {
  return {
    type: DELETE_CARD,
    id
  };
};

export const updateCard = (card) => {
  return {
    type: UPDATE_CARD,
    card
  };
};



