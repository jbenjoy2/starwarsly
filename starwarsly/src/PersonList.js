import React from "react";
import { useSelector } from "react-redux";

import ItemList from "./ItemList";

function PersonList() {
  /**
   * renders an ItemList
   * using people object from store, maps over the values and for each person, creates a new object with the data for that person and a url added on using the person's id
   * itemlist uses newly created array as its source of items
   */
  const items = useSelector(st =>
    Object.values(st.people).map(p => ({ ...p, url: `/people/${p.id}` }))
  );
  return <ItemList title="People" items={items} />;
}

export default PersonList;
