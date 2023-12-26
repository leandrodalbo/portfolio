import React from "react";
import "./style.css";
import { SkillsService } from "./SkillsService";

interface SkillsProps {
  service: SkillsService;
}

const Experience = ({ service }: SkillsProps) => {
  const { title, items } = service.content();

  return (
    <section id="skills" className="skills">
      <h2>{title}</h2>
      <div className="row">
        {items.map((item) => (
          <div className="col-sm-12 col-md-6 col-lg-6"></div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
