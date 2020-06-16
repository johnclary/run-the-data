import React from "react";
import Button from "react-bootstrap/Button";
import { FaDownload } from "react-icons/fa";
import { CSVLink } from "react-csv";

export default function DownloadButton(props) {
  return (
    <Button className="m-1 btn-block" variant="light" size="sm">
      <span className="text-monospace">
        <CSVLink data={props.data}>
          {" "}
          <FaDownload />{" "}
        </CSVLink>
      </span>
    </Button>
  );
}
