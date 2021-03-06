import React from "react";
import { Link } from "react-router-dom";

function ItemList({ items, title }) {
  /**
   * renders a generic list of router links
   * props: items(array of objects), title(string)
   * Maps over items and extracts data to create links to other endpoints;
   * Alternatively, if nothing in items array, renders a message saying nothing has been explored
   */
  return (
    <>
      <h1 className="my-3">{title}</h1>
      {items.length !== 0 ? (
        <ul style={{ fontSize: "120%" }}>
          {items.map(item => (
            <li key={item.id}>
              <Link to={item.url}>
                {item.name} <small className="text-muted">{item.id}</small>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't explored any items of this type yet.</p>
      )}
    </>
  );
}

export default ItemList;
