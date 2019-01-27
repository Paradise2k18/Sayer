import { combineReducers} from 'redux';

const INITIAL_STATE = {
  text: [
    {
      id: 0,
      value: 'hazard',
      comments: []
    },
     {
       id: 1,
       value: 'second text',
       comments: []
     },
     {
      id: 2,
      value: 'first text',
      comments: []
    },
    {
      id: 3,
      value: 'super long title to test how it is displayed on the screen ',
      comments: []
    },
    {
      id: 4,
      value: 'first text',
      comments: []
    },
    {
      id: 5,
      value: 'first text',
      comments: []
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
    text.push({id: text.length === 0 ? 0 : text[text.length-1].id + 1, value: addedItem});

    
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