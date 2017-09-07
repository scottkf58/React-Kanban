let cardId = 0;

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const MOVE_RIGHT = 'MOVE_RIGHT';

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

export const moveCardRight = (card) => {
  return {
    type: MOVE_RIGHT,
    status: 'progress',
    ...card
  };
};



