import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import { getPersonFromAPI } from "./actions/people";
import Sublist from "./Sublist";

function Person() {
  /**
   * PERSON Component- no props
   * renders info about charact with given id (from query param)
   * will get the personfrom api only if the perosn doesn't exist in the store; will add to store if this is the case
   *
   */
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector(st => st.people[id]);
  const planetState = useSelector(st => st.planets);
  const filmState = useSelector(st => st.films);
  const missing = !person;

  useEffect(
    function() {
      if (missing) {
        dispatch(getPersonFromAPI(id));
      }
    },
    [id, missing, dispatch]
  );

  if (missing) return <h1 className="mt-5">loading...</h1>;

  const hw = person.homeworld;
  const homeworld = {
    id: hw,
    url: `/planets/${hw}`,
    display: planetState[hw] ? planetState[hw].name : "Unknown"
  };

  const films = person.films.map(fid => ({
    id: fid,
    url: `/films/${fid}`,
    display: filmState[fid] ? filmState[fid].name : "Unknown"
  }));

  return (
    <div>
      <h1 className="my-3">
        {person.name}
        <small className="text-muted float-right">{person.id}</small>
      </h1>

      <p>
        <b>Gender: </b>
        {person.gender}
      </p>
      <p>
        <b>Birth Year: </b>
        {person.birthYear}
      </p>
      <p>
        <b>Homeworld: </b>
        <Link to={homeworld.url}>{homeworld.display}</Link>
      </p>

      <Sublist title="Films" items={films} />
    </div>
  );
}

export default Person;
