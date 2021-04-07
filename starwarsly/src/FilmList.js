import React from "react";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";

function FilmList() {
  /**
   * renders an ItemList
   * using films object from store, maps over the values and for each flim, creates a new object with the data for that film and a url added on using the film's id
   * itemlist uses newly created array as its source of items
   */
  const items = useSelector(st =>
    Object.values(st.films).map(f => ({ ...f, url: `/films/${f.id}` }))
  );
  return <ItemList title="Films" items={items} />;
}

export default FilmList;
