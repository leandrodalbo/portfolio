import React from "react";
import Navigation from "./components/navigation/Navigation";
import navigationService from "./components/navigation/NavigationService";

function Portfolio() {
  return (
    <div data-testid="portfolio">
      <Navigation service={navigationService} />
    </div>
  );
}

export default Portfolio;
