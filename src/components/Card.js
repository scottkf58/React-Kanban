import React from 'react';

const Card = ({ id, title, priority, createdBy, assignedTo, handleDelete }) =>
  <div className={priority}>
    <div>
      {title}
    </div>
    <div>
      {priority}
    </div>
    <div>
      {assignedTo}
    </div>
    <div>
      {createdBy}
    </div>
    <div onClick={handleDelete} id={id} className="link">
      DELETE
    </div>
  </div>;

export default Card;