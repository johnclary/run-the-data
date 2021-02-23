import React from "react";
import Container from "react-bootstrap/Container";
import PageHeader from "./PageHeader";
import Footer from "./Footer";
import CategoryRow from "./CategoryRow";
import { SPEND_CATEGORIES } from "./Categories";
import * as DATA from "../data/category_totals_by_year.json";
import Nav from "./Nav";

const filterDataByCategory = (data, category) => {
  // reduce data array to the category of interest
  const dataFiltered = data.filter((row) => row.category === category);
  // and convert calendar year to an `int` while we're at it
  return dataFiltered.map((row) => {
    row.cal_year = parseInt(row.cal_year);
    return row;
  });
};

export default function Home() {
  const [explorerCategory, setExplorerCategory] = React.useState(null);
  return (
    <React.Fragment>
      <Container className="min-vh-100">
        <Nav links={[{ href: "/about", name: "About" }]} />
        <PageHeader />
        {SPEND_CATEGORIES.map((category) => (
          <CategoryRow
            key={category.name}
            data={filterDataByCategory(DATA.rows, category.name)}
            category={category}
            explorerCategory={explorerCategory}
            setExplorerCategory={setExplorerCategory}
          />
        ))}
        <Footer />
      </Container>
    </React.Fragment>
  );
}
