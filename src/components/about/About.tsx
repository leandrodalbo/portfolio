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
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="about-img">
            <img src={computer} alt="computer-img" />
          </div>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <div className="about-content">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
