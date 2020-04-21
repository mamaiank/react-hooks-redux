import { createStore } from "redux";

const initState = {
  isMobile: false,
};

export const actionTypes = {
  CHANGE_STATE: "CHANGE_STATE",
};

// REDUCERS
export const reducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_STATE:
      return {
        ...state,
        [action.stateName]: action.value,
      };
    default:
      return state;
  }
};

export const initStore = (initialState = initState) =>
  createStore(reducer, initialState);
