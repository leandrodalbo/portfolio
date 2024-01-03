import React, { useState } from "react";
import "./style.css";
import { Carousel, ProgressBar } from "react-bootstrap";
import ContentService from "../../services/content/ContentService";
import { SkillItem } from "../../services/content/skills/SkillsService";
import curlybrc from "../../assets/curly.jpg";

interface SkillsProps {
  service: ContentService;
}

const Skills = ({ service }: SkillsProps) => {
  const { title, items } = service.content();

  return (
    <section data-testid="skills" id="skills" className="py-5">
      <div className="container py-5">
        <div className="row py-5">
          <div className="col py-5">
            <h2 className="skills-title d-flex justify-content-center">
              {title}
            </h2>
          </div>
        </div>
        <div className="row py-5">
          <div className="col">
            <Carousel>
              {items.map((item: SkillItem) => (
                <Carousel.Item key={item.title}>
                  <div className="py-5 my-5 card">
                    <div className="c-item-head">
                      {<item.icon />}
                      <span>{item.title}</span>
                    </div>
                    <div className="c-item-body">
                      <ProgressBar now={item.fill} max={100} min={0} />
                    </div>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
