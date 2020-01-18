import {
  SET_UNAUTEHNTICATED,
  LOADING_UI,
  SET_USER,
  SET_AUTHENTICATED
} from "../types";

const initialState = {
  authenticated: false,
  creadential: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true
      };
    case SET_UNAUTEHNTICATED:
      return initialState;
    case SET_USER:
      return {
        ...action.payload,
        authenticated: true
      };
    default:
      return state;
  }
}
