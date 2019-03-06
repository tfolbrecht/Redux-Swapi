import {
  FETCHING,
  SUCCESS,
  FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: ""
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return Object.assign({}, state, { fetching: true });
    case SUCCESS:
      return Object.assign({}, state, {
        characters: [...state.characters, ...action.payload],
        fetching: false
      });
    case FAILURE:
      return Object.assign({}, state, {
        fetching: false,
        error: "Error fetching Characters"
      });
    default:
      return state;
  }
};