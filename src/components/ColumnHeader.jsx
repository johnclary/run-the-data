import React from "react";
import Button from "react-bootstrap/Button";
import { FaChevronCircleDown, FaChevronCircleUp } from "react-icons/fa";

function getSortIcon(sortAsc, sortKey, thisKey) {
  if (thisKey !== sortKey) {
    return null;
  } else if (sortAsc) { 
    return <FaChevronCircleDown/>
  } else {
    return <FaChevronCircleUp/>
  }
}

export default function ColumnHeader(props) {
  // you have to define sort function here and pass it up
  function onClick() {
    props.setSortKey(props._key);
    props.setSortAsc(!props.sortAsc);
  }

  return (
    <th>
      <Button variant="dark" size="sm" onClick={onClick}>
        {props.title} {getSortIcon(props.sortAsc, props.sortKey, props._key)}
      </Button>
    </th>
  );
}
