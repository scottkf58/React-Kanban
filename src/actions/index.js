let nextCardId = 0;

export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';

export const addCard = (card) => {
  return {
    type: ADD_CARD,
    id: nextCardId++,
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



