import React, { useState } from "react";
import { HeaderService } from "./HederService";
import { FiAlignJustify } from "react-icons/fi";

interface HeaderProps {
  service: HeaderService;
}

const Header = ({ service }: HeaderProps) => {
  const [navActive, setNavActive] = useState(service.navItems()[0]);

  return (
    <header className="header">
      <a className="logo" href="#home">
        {service.logo()}
      </a>

      <FiAlignJustify className="menu-icon" />

      <nav className="navbar">
        {service.navItems().map((item) => (
          <a
            className={navActive === item ? "active" : "inactive"}
            key={item}
            href={`#${item}`}
            onClick={() => setNavActive(item)}
          >
            {item}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
