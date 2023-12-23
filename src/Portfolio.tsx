import React from "react";
import Header from "./components/header/Header";
import headerService from "./components/header/HederService";
import Home from "./components/home/Home";
import homeService from "./components/home/HomeService";

const Portfolio = () => {
  return (
    <div data-testId="portfolio">
      <Header service={headerService} />
      <Home service={homeService} />
    </div>
  );
};

export default Portfolio;
