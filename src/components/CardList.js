import React from 'react';
import Card from './Card';

const CardList = ({cards}) => {
  console.log('Card List', cards);
  return (
    <ul>
      {cards.map( (card) => {
          return (
            <li>
              {card}
            </li>
          )
        })
      }
    </ul>
    );
}

export default CardList;