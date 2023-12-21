import React from "react";
import Navigation from "./components/navigation/Navigation";
import navigationService from "./components/navigation/NavigationService";
import Home from "./components/home/Home";
import homeService from "./components/home/HomeService";

function Portfolio() {
  return (
    <div data-testid="portfolio">
      <Navigation service={navigationService} />
      <Home service={homeService} />
    </div>
  );
}

export default Portfolio;
