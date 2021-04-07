import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getFilmFromAPI } from "./actions/films";
import Sublist from "./Sublist";

function Film() {
  /**
   * FILM Component- no props
   * renders info about film with given id (from query param)
   * will get the film from api only if the film doesn't exist in the store; will add to store if this is the case
   *
   */
  const { id } = useParams();
  const film = useSelector(st => st.films[id]);
  const planetState = useSelector(st => st.planets);
  const characterState = useSelector(st => st.people);
  const dispatch = useDispatch();
  const missing = !film;

  // this will run if the film is missing, or if the missing status changes, if the id changes, or if the dispatch function changes
  useEffect(
    function() {
      console.log("running");
      if (missing) {
        dispatch(getFilmFromAPI(id));
      }
    },
    [missing, id, dispatch]
  );

  // display h1 until its done loading
  if (missing) return <h1 className="mt-5">loading...</h1>;

  // define planets and characts to create sublists
  const planets = film.planets.map(pid => ({
    id: pid,
    url: `/planets/${pid}`,
    display: planetState[pid] ? planetState[pid].name : "Unknown"
  }));

  const characters = film.characters.map(cid => ({
    id: cid,
    url: `/people/${cid}`,
    display: characterState[cid] ? characterState[cid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="mt-3 mb-3">
        {film.name}
        <small className="text-muted float-right">{id}</small>
      </h1>

      <p className="lead">{film.openingCrawl}</p>

      <p>
        <b>Director: </b>
        {film.director}
      </p>

      <Sublist title="Planets" items={planets} />
      <Sublist title="People" items={characters} />
    </div>
  );
}

export default Film;
