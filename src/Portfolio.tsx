import React from "react";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import emailService from "./services/email/EmailService";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import aboutService from "./services/content/about/AboutService";
import footerService from "./services/content/footer/FooterService";
import headerService from "./services/content/header/HeaderService";
import homeService from "./services/content/home/HomeService";
import skillsService from "./services/content/skills/SkillsService";

const Portfolio = () => {
  return (
    <div>
      <Header service={headerService} />
      <Home service={homeService} />
      <About service={aboutService} />
      <Skills service={skillsService} />
      <Contact service={emailService} />
      <Footer service={footerService} />
    </div>
  );
};

export default Portfolio;
