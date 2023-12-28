import React from "react";
import "./style.css";
import { SkillsService } from "./SkillsService";
import { ProgressBar } from "react-bootstrap";

interface SkillsProps {
  service: SkillsService;
}

const Skills = ({ service }: SkillsProps) => {
  const { title, items } = service.content();

  return (
    <section id="skills" className="py-5">
      <div className="container py-5">
        <div className="row py-5 ">
          <div className="col py-5">
            <h2 className="skills-title d-flex justify-content-center">
              {title}
            </h2>
          </div>
        </div>
        <div className="row py-5">
          {items.map((item) => (
            <div
              key={item.title}
              className="col-sm-6 col-md-3 col-lg-3 col d-flex justify-content-center"
            >
              <div className="card my-3 px-1">
                <div className="card-header">
                  {<item.icon />}
                  <span className="card-title">{item.title} </span>
                </div>
                <div className="card-body">
                  <ProgressBar now={item.fill} max={100} min={0} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
