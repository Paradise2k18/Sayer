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

export const addComment = (index, comment) => (
  {
    type: 'ADD_COMMENT',
    index,
    comment
  }
)