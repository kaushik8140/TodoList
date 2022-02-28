export const Add = item => dispatch => {
  dispatch(add(item));
};

export const Remove = index => dispatch => {
  dispatch(remove(index));
};

export const add = item => ({
  type:"ADD",
  todo: item
});

export const remove = index => ({
  type:"REMOVE",
  index: index
});