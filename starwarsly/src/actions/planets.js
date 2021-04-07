import axios from "axios";
import { LOAD_PLANET } from "./types";

function getPlanetFromAPI(id) {
  /**
   * returns a thunk
   * ping api planets endpoint to retrieve info about specific planet with given id
   * dispatches data to store using action creator
   */
  return async function(dispatch) {
    const res = await axios.get(`https://swapi.dev/api/planets/${id}/`);
    let { name, population, climate, residents, films } = res.data;

    // extract resident and film ids from returned data
    residents = residents.map(url => url.match(/\d+/)[0]);
    films = films.map(url => url.match(/\d+/)[0]);

    const planet = { id, name, population, climate, residents, films };
    dispatch(gotPlanet(planet));
  };
}

function gotPlanet(planet) {
  /**
   * action creator to dispatch planet data to planets reducer
   * updates planets state to include this planet
   */
  return { type: LOAD_PLANET, payload: planet };
}

export { getPlanetFromAPI };
