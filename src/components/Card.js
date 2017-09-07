import React from 'react';
import Draggable from 'react-draggable';


const Card = ({ id, title, priority, createdBy, assignedTo, handleDelete, handleMoveLeft, handleMoveRight }) =>
  <div className={priority}>
    <div>{title}</div>

    <div>{priority}</div>

    <div>{assignedTo}</div>

    <div>{createdBy}</div>
    <br/>
    <div
      onClick={handleDelete}
      id={id}
      className="link">
      DELETE
    </div>
    <br/>
    <div
      onClick={handleMoveLeft}
      id={id}
      className="link">
      Move Left
    </div>
    <br/>
    <div
      onClick={handleMoveRight}
      id={id}
      className="link">
      Move Right
    </div>
  </div>;


export default Card;