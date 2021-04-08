import { LOAD_PLANET, RESET_ALL } from "../actions/types";

const INITIAL_STATE = {};

function planets(state = INITIAL_STATE, action) {
  /**
   * store the planets that have been "explored"; initialized to empty because no planets have been explored yet
   */
  switch (action.type) {
    case RESET_ALL:
      return { ...INITIAL_STATE };

    case LOAD_PLANET:
      return {
        ...state,
        [action.payload.id]: { ...action.payload }
      };

    default:
      return state;
  }
}

export default planets;
