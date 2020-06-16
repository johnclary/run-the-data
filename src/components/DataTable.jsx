import React from "react";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import Spinner from "react-bootstrap/Spinner";
import * as d3Format from "d3-format";
import ColumnHeader from "./ColumnHeader";

const formatDollars = d3Format.format("$,.2r");

const formatDate = (d, start = 2, end = 10) => {
  // from: 0015-04-06T00:00:00.000Z
  // to: 04-06-2015
  const substr = d.substring(start, end);
  return `20${substr}`;
};

function generateRows(data, limit = 9999999) {
  return data.slice(0, limit).map((row, i) => {
    return (
      <tr className="text-monospace" key={i}>
        <td>{formatDate(row.chk_eft_iss_dt)}</td>
        <td>{row.actg_ln_dscr}</td>
        <td>{formatDollars(row.amount)}</td>
      </tr>
    );
  });
}

function getData(name, setError, setIsLoaded, setData, sortKey) {
  const baseUrl = "https://runt-the-data.s3.amazonaws.com";
  const endpoint = `${baseUrl}/${name}.json`;
  return fetch(endpoint)
    .then((res) => res.json())
    .then(
      (data) => {
        setIsLoaded(true);
        setData(data);
      },
      (error) => {
        setIsLoaded(true);
        setError(error);
      }
    );
}

const sortStrings = (data, key, sortAsc) => {
  if (sortAsc) {
    return data.sort((a, b) => (a[key] < b[key] ? 1 : -1));
  } else {
    return data.sort((a, b) => (b[key] < a[key] ? 1 : -1));
  }
};

const sortNumbers = (data, key, sortAsc) => {
  if (sortAsc) {
    return data.sort((a, b) => b[key] - a[key]);
  } else {
    return data.sort((a, b) => a[key] - b[key]);
  }
};

const SORT_METHODS = {
  actg_ln_dscr: sortStrings,
  amount: sortNumbers,
  chk_eft_iss_dt: sortStrings,
};

function sortHandler(data, sortKey, sortAsc) {
  let sortMethod = SORT_METHODS[sortKey];
  return sortMethod(data, sortKey, sortAsc);
}

export default function DataTable(props) {
  let [data, setData] = React.useState([]);
  let [error, setError] = React.useState(null);
  let [isLoaded, setIsLoaded] = React.useState(false);
  let [sortKey, setSortKey] = React.useState("chk_eft_iss_dt"); // default sort: check issued date
  let [sortAsc, setSortAsc] = React.useState(true);

  // only render table if this components category matches the route (/:category) a
  if (props.categoryRoute !== props.category.name) {
    return null;
  }

  if (!isLoaded && data.length === 0) {
    getData(props.category.name, setError, setIsLoaded, setData);
  }
  if (error) {
    return <p>Error: {error.message}</p>;
  } else if (!isLoaded) {
    return (
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    );
  }
  return (
    <Col className="p-0">
      <Table striped className="table-sm">
        <thead className="thead-dark">
          <tr>
            <ColumnHeader
              _key="chk_eft_iss_dt"
              title="Date"
              sortKey={sortKey}
              setSortKey={setSortKey}
              sortAsc={sortAsc}
              setSortAsc={setSortAsc}
            />
            <ColumnHeader
              _key="actg_ln_dscr"
              title="Description"
              sortKey={sortKey}
              setSortKey={setSortKey}
              sortAsc={sortAsc}
              setSortAsc={setSortAsc}
            />
            <ColumnHeader
              _key="amount"
              title="Amount"
              sortKey={sortKey}
              setSortKey={setSortKey}
              sortAsc={sortAsc}
              setSortAsc={setSortAsc}
            />
          </tr>
        </thead>
        <tbody>
          {generateRows(sortHandler(data, sortKey, sortAsc), props.limit)}
        </tbody>
      </Table>
    </Col>
  );
}
