export const initialState = []
export const ADD_BAR = 'ADD_BAR';

export const addBar = data => {
  return {
    type: ADD_BAR,
    data,
  };
};

export const barReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case ADD_BAR:
      return state.concat(action.data)
    default:
      return state;
  }
};
