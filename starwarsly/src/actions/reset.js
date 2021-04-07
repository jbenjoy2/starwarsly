import { RESET_ALL } from "./types";

function resetAll() {
  /**
   * action creator
   * returns reset action to trigger reset of ALL state
   */
  return { type: RESET_ALL };
}

export { resetAll };
