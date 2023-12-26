import React, { useState } from "react";
import { HeaderService } from "./HederService";
import { FaBars } from "react-icons/fa6";
import "./style.css";

interface HeaderProps {
  service: HeaderService;
}

const Header = ({ service }: HeaderProps) => {
  const [navActive, setNavActive] = useState("home");

  return (
    <nav className="navbar navbar-expand-lg fixed-top bg-transparent">
      <div className="container-fluid">
        <a
          className="navbar-brand logo"
          onClick={() => setNavActive("home")}
          href="#home"
        >
          {service.logo()}
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars color="#ededed" className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            {service.navItems().map((item) => (
              <li key={item} className="nav-item">
                <a
                  className={`nav-link ${
                    navActive === item ? "active" : "inactive"
                  }`}
                  key={item}
                  href={`#${item}`}
                  onClick={() => setNavActive(item)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
