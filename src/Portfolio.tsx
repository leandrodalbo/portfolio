import React from "react";
import Header from "./components/header/Header";
import headerService from "./components/header/HederService";
import Home from "./components/home/Home";
import homeService from "./components/home/HomeService";
import About from "./components/about/About";
import aboutService from "./components/about/AboutService";

const Portfolio = () => {
  return (
    <div data-testId="portfolio">
      <Header service={headerService} />
      <Home service={homeService} />
      <About service={aboutService} />
    </div>
  );
};

export default Portfolio;
