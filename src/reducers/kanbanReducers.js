const kanbanReducers = (state = [], action) => {
  switch (action.type) {

    case 'LOAD_CARDS':
      return [
        ...action.cards
      ];

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


