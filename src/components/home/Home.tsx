import React from "react";
import "./style.css";
import { HomeService } from "./HomeService";
import Typed from "react-typed";

interface HomeProps {
  service: HomeService;
}

const Home = ({ service }: HomeProps) => {
  const { hi, profession } = service.content();

  return (
    <section id="home" className="home">
      <div className="home-content">
        <h1>{hi}</h1>

        <Typed
          className="home-typed"
          strings={[profession]}
          typeSpeed={70}
          backSpeed={90}
          loop={true}
        />

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
