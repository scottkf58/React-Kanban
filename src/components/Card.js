import React from 'react';


const Card = ({ id, title, priority, assignedTo, createdBy, handleDelete, handleMoveLeft, handleMoveRight }) =>
  <div className={priority}>
    <div>{title}</div>

    <div>{priority}</div>

    <div>{assignedTo}</div>

    <div>{createdBy}</div>
    <br/>
    <div>
      <button
        onClick={handleDelete}
        id={id}
        className="button">
        DELETE
      </button>
      <button
        onClick={handleMoveLeft}
        id={id}
        className="button">
        Move Left
      </button>
      <button
        onClick={handleMoveRight}
        id={id}
        className="button">
        Move Right
      </button>
    </div>
  </div>;


export default Card;