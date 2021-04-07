import { combineReducers } from "redux";
import films from "./films";
import planets from "./planets";
import people from "./people";
// combine other reducers to central store
export default combineReducers({
  films,
  planets,
  people
});
