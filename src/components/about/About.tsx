import React from "react";
import "./style.css";
import ContentService from "../../services/content/ContentService";

interface AboutProps {
  service: ContentService;
}

const About = ({ service }: AboutProps) => {
  const { aboutme, computer, text, cv, cvbtn } = service.content();

  return (
    <section data-testid="about" id="about" className="py-5">
      <div className="container py-3">
        <div className="row py-3 ">
          <div className="col py-3">
            <h2 className="about-title d-flex justify-content-center">
              {aboutme}
            </h2>
          </div>
        </div>

        <div className="row py-3 no-gutters">
          <div className="col-sm-12 col-md-4 col-lg-4 py-3 col d-flex justify-content-center">
            <div className="about-image center">
              <img src={computer} alt="computer-img" />
            </div>
          </div>
          <div className="mx-auto col-sm-12 col-md-4 col-lg-4 py-5 col d-flex justify-content-center">
            <div className="about-info text-center">
              <p>{text}</p>
              <a href={cv}>{cvbtn}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
