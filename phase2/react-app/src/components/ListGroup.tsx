import { Fragment } from "react/jsx-runtime";
import { MouseEvent } from "react";

function ListGroup() {
  let items = [
    "New York",
    "Nairobi",
    "Kisumu",
    "Paris",
    "Stockholm",
    "Windhoek",
  ];

  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <Fragment>
      <h1>
        <b>List</b>
      </h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li className="list-group-item" key={item} onClick={handleClick}>{item}</li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
