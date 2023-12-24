import React from "react";
import "./style.css";
import { ExperienceService } from "./ExperienceService";
import { FaCalendarCheck } from "react-icons/fa";

interface ExperienceProps {
  service: ExperienceService;
}

const Experience = ({ service }: ExperienceProps) => {
  const { title, items } = service.content();

  return (
    <section id="experience" className="experience">
      <h2>{title}</h2>
      <div className="exp-row">
        {items.map((item) => (
          <div key={item.dates} className="content">
            <div className="dates">
              <FaCalendarCheck size={10} />
              <i>{item.dates}</i>
            </div>
            <p>
              Company:<span>{item.company}</span>
            </p>
            <p>
              Role:<span>{item.role}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
