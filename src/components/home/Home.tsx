import React from "react";
import "./style.css";
import Typed from "react-typed";
import ContentService from "../../services/content/ContentService";
import { SocialItem } from "../../services/content/home/HomeService";

interface HomeProps {
  service: ContentService;
}

const Home = ({ service }: HomeProps) => {
  const { hi, profession, socialLinks } = service.content();

  return (
    <section data-testid="home" id="home" className="py-5">
      <div className="container py-5">
        <div className="row py-5 ">
          <div className="col py-5">
            <h1 className="d-flex justify-content-center py-2">{hi}</h1>

            <Typed
              className="home-typed my-2 d-flex justify-content-center"
              strings={[profession]}
              typeSpeed={70}
              backSpeed={90}
              loop={true}
            />

            <div className="social my-2">
              {socialLinks.map((item: SocialItem) => (
                <a key={item.href} href={item.href}>
                  {<item.icon size={30} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
