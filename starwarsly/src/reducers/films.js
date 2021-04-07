import { LOAD_FILM, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

function films(state = INITIAL_STATE, action) {
  /**
   * store the films that have been "explored"; initialized to empty because no planets have been explored yet
   */
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_FILM:
      return {
        ...state,
        [action.payload.id]: { ...action.payload } //take the id and make it the key, with the value of an object containing the rest of the data
      };

    default:
      return state;
  }
}

export default films;
