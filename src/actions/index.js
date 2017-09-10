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
    return axios.get("/cards")
      .then( (response) => {
        dispatch(loadCards(response.data));
      })
      .catch( (error) => {
        console.log(error);
      });
  };
};

export const addCard = (card) => {
  card.status = 'queue';
  return (dispatch) => {
    axios.post("/cards", queryString.stringify(card))
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
    axios.delete(`/cards/${id}`)
      .then( (cards) => {
        dispatch({
          type: LOAD_CARDS,
          cards: cards.data
        });
      });
  };
};

export const updateCard = (card) => {
  return (dispatch) => {
    axios.put(`/cards/${card.id}/edit`, queryString.stringify(card))
    .then( (cards) => {
      dispatch({
        type: LOAD_CARDS,
        cards: cards.data
      });
    })
    .catch( (err) => {
      console.log(err);
    });
  };
};




