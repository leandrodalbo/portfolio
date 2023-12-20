import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

interface NavigationItemsProps {
  items: any[];
}

export default function NavigationItems({ items }: NavigationItemsProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ul className="default-nav">
        {items.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>

      {menuOpen ? (
        <FaTimes
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="mobile-menu"
        />
      ) : (
        <FaBars
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
          className="mobile-menu"
        />
      )}
      <ul className={menuOpen ? "mobile-nav" : "hidden"}>
        {items.map((item) => (
          <li key={item.title}>
            <a href={item.href}>{item.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
