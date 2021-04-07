import axios from "axios";
import { LOAD_PERSON } from "./types";

function getPersonFromAPI(id) {
  /**
   * returns a thunk
   * ping api people endpoint to retrieve info about specific character with given id
   * dispatches data to store using action creator
   */
  return async function(dispatch) {
    const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
    let { name, gender, birth_year: birthYear, homeworld, films } = res.data;

    // extract film and homeworld(planet) ids from returned data

    films = films.map(url => url.match(/\d+/)[0]);
    homeworld = homeworld.match(/\d+/)[0];

    const person = { id, name, gender, birthYear, homeworld, films };
    dispatch(gotPerson(person));
  };
}

function gotPerson(person) {
  /**
   * action creator to dispatch character data to people reducer
   * updates people state to include this character
   */
  return { type: LOAD_PERSON, payload: person };
}

export { getPersonFromAPI };
