import axios from "axios";
import { LOAD_FILM } from "./types";

function getFilmFromAPI(id) {
  /**
   * returns a thunk
   * ping api films endpoint to retrieve info about specific film with given id
   * dispatches data to store using action creator
   */
  return async function(dispatch) {
    const res = await axios.get(`https://swapi.dev/api/films/${id}/`);
    let { title: name, director, opening_crawl: openingCrawl, characters, planets } = res.data;

    // extract character and planet ids from the returned character and planet urls
    characters = characters.map(url => url.match(/\d+/));
    planets = planets.map(url => url.match(/\d+/)[0]);

    const film = { id, name, director, openingCrawl, characters, planets };
    dispatch(gotFilm(film));
  };
}

function gotFilm(film) {
  /**
   * action creator to dispatch film data to films reducer
   * updates films state to include this film
   */
  return { type: LOAD_FILM, payload: film };
}

export { getFilmFromAPI };
