import { combineReducers} from 'redux';

const INITIAL_STATE = {
  text: [
    {
      id: 0,
      value: 'hazard'
    },
     {
       id: 1,
       value: 'second text'
     },
     {
      id: 2,
      value: 'first text'
    },
    {
      id: 3,
      value: 'first text'
    },
    {
      id: 4,
      value: 'first text'
    },
    {
      id: 5,
      value: 'first text'
    },
  ]
}

const itemReducer = (state = INITIAL_STATE, action) => {
  const {
    text 
  } = state;

  switch (action.type) {
    
    case 'ADD_ITEM':

    const addedItem = action.item
    text.push({id: text[text.length-1].id + 1, value: addedItem});

    
    return { text };

    case 'REMOVE_ITEM':

    text.splice(text.findIndex(element => element.id === action.index), 1)
    return { text };

    default:
      return state
  }
};

export default combineReducers({
  items: itemReducer,
});