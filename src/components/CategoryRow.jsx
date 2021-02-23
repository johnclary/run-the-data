import React from "react";
import Row from "react-bootstrap/Row";
import CategoryChartRow from "./CategoryChartRow";
import DataTable from "./DataTable";
import { useRouteMatch } from "react-router-dom";

const CategoryRow = React.memo(function CategoryRow({ data, category }) {
  let match = useRouteMatch("/details/:category");
  let categoryRoute = match ? match.params.category : null;
  // only apply bottom margin when details are collapsed (ie no category has been specified in route)
  const marginBottom = match ? "" : "mb-2";

  return (
    <React.Fragment>
      <Row className={`bg-light ${marginBottom}`} id={category.name}>
        <CategoryChartRow
          data={data}
          category={category}
          categoryRoute={categoryRoute}
        />
      </Row>
      <Row>
        <DataTable
          categoryRoute={categoryRoute}
          category={category}
          limit={9999999}
        />
      </Row>
    </React.Fragment>
  );
});
export default CategoryRow;
