const kanbanReducers = (state = [], action) => {
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          priority: action.priority,
          createdBy: action.createdBy,
          assignedTo: action.assignedTo,
          status: action.status
        }
      ];

    case 'DELETE_CARD':
      let remove = state.filter(card => card.id !== parseInt(action.id));
      return remove;

    case 'UPDATE_CARD':
      let updateStatus = state.filter(card => card.id === parseInt(action.id));

      return [
        ...state.filter(card => card.id !== parseInt(action.card.id)),
          {...action.card}
      ];

    default:
      return state;
  }
};

export default kanbanReducers;


