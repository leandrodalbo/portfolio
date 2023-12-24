import React from "react";
import "./style.css";
import { AboutService } from "./AboutService";

interface AboutProps {
  service: AboutService;
}

const About = ({ service }: AboutProps) => {
  const { aboutme, computer, text } = service.content();

  return (
    <section id="about" className="about">
      <h2 className="about-title">{aboutme}</h2>

      <div className="about-img">
        <img src={computer} alt="computer-img" />
      </div>

      <div className="about-content">
        <p>{text}</p>
      </div>
    </section>
  );
};

export default About;
