import React from "react";
import Header from "./components/header/Header";
import headerService from "./components/header/HederService";
import Home from "./components/home/Home";
import homeService from "./components/home/HomeService";
import About from "./components/about/About";
import aboutService from "./components/about/AboutService";
import Skills from "./components/skills/Skills";
import skillsService from "./components/skills/SkillsService";
import emailService from "./services/email/EmailService";
import Contact from "./components/contact/Contact";

const Portfolio = () => {
  return (
    <div data-testId="portfolio">
      <Header service={headerService} />
      <Home service={homeService} />
      <About service={aboutService} />
      <Skills service={skillsService} />
      <Contact service={emailService} />
    </div>
  );
};

export default Portfolio;
