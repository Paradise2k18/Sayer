import { combineReducers } from 'redux';

const INITIAL_STATE = {
  text: []
}

const itemReducer = (state = INITIAL_STATE, action) => {
  const {
    text 
  } = state;

  switch (action.type) {
    
    case 'ADD_ITEM':

    const addedItem = action.item
    text.push({id: text.length === 0 ? 0 : text[text.length-1].id + 1, value: addedItem, comments: []});

    
    return { text };

    case 'REMOVE_ITEM':

    text.splice(text.findIndex(element => element.id === action.index), 1)
    return { text };

    case 'ADD_COMMENT':

    text[action.index].comments.push(action.comment)
    return { text };

    default:
      return state
  }
};

export default combineReducers({
  items: itemReducer,
});