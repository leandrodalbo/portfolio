import React from "react";
import "./style.css";
import { AboutService } from "./AboutService";

interface AboutProps {
  service: AboutService;
}

const About = ({ service }: AboutProps) => {
  const { aboutme, computer, text } = service.content();

  return (
    <section id="about" className="py-5">
      <div className="container py-5">
        <div className="row py-5 ">
          <div className="col py-5">
            <h2 className="about-title d-flex justify-content-center">
              {aboutme}
            </h2>
          </div>
        </div>

        <div className="row py-5 no-gutters">
          <div className="col-sm-12 col-md-4 col-lg-4 py-5 col d-flex justify-content-center">
            <div className="about-image center">
              <img src={computer} alt="computer-img" />
            </div>
          </div>
          <div className="mx-auto col-sm-12 col-md-4 col-lg-4 py-5 col d-flex justify-content-center">
            <div className="about-text py-5 text-center">
              <p>{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
