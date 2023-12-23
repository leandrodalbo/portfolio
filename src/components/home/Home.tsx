import React from "react";
import "./style.css";
import { HomeService } from "./HomeService";

interface HomeProps {
  service: HomeService;
}

const Home = ({ service }: HomeProps) => {
  const { hometext, hi, profession, myname } = service.content();

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>
          {hi}
          <span>{myname}</span>
        </h1>
        <div>
          <h3>{profession}</h3>
          <p>{hometext}</p>
        </div>
        <div className="social">
          {service.socialLinks().map((item) => (
            <a key={item.href} href={item.href}>
              {<item.icon size={30} />}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
