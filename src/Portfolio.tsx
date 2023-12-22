import React from "react";
import Header from "./components/header/Header";
import headerService from "./components/header/HederService";

function Portfolio() {
  return (
    <div data-testId="portfolio">
      <Header service={headerService} />
    </div>
  );
}

export default Portfolio;
