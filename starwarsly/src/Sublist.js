import React from "react";
import { Link } from "react-router-dom";

function Sublist({ title, items }) {
  /**
   * Sublist component
   * Props: title(string), items(array) passed down from parent (film, person, or planet)
   * returns a list of router links to all relevant endpoints having to do with the parent
   */
  return (
    <>
      <h3>{title}</h3>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            <Link to={item.url}>{item.display}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Sublist;
