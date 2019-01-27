export const addItem = item => (
  {
    type: 'ADD_ITEM',
    item
  }
);

export const removeItem = index => (
  {
    type: 'REMOVE_ITEM',
    index
  }
)