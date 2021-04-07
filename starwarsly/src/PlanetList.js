import React from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";

function PlanetList() {
  /**
   * renders an ItemList
   * using planets object from store, maps over the values and for each planet, creates a new object with the data for that planet and a url added on using the person's id
   * itemlist uses newly created array as its source of items
   */
  const items = useSelector(st =>
    Object.values(st.planets).map(p => ({ ...p, url: `/planets/${p.id}` }))
  );
  return <ItemList title="Planets" items={items} />;
}

export default PlanetList;
