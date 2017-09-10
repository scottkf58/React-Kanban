import axios from 'axios';
import { addCardsToDB } from '../lib/cards.db.js';
let queryString = require('querystring');

let cardId = 0;

export const LOAD_CARDS = 'LOAD_CARDS';
export const ADD_CARD = 'ADD_CARD';
export const DELETE_CARD = 'DELETE_CARD';
export const UPDATE_CARD = 'UPDATE_CARD';

export const loadCards = (cards) => {
  return {
    type: LOAD_CARDS,
    cards: cards
  };
};

export const getCards = () => {
  return (dispatch) => {
    return axios.get("http://localhost:3000/cards")
      .then(response => {
        dispatch(loadCards(response.data));
      })
      .catch(error => {
        throw(error);
      });
  };
};

export const addCard = (card) => {
  card.status = 'queue';

  return (dispatch) => {
    axios.post("http://localhost:3000/cards", queryString.stringify(card))
      .then( (cards) => {
        dispatch({
          type: LOAD_CARDS,
          cards: cards.data
        });
      });
  };
};

export const deleteCard = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3000/cards/${id}`)
      .then( (cards) => {
        console.log('delete data', cards.data);
        dispatch({
          type: LOAD_CARDS,
          cards: cards.data
        });
      });
  };
};


export const updateCard = (card) => {
  return {
    type: UPDATE_CARD,
    card
  };
};





