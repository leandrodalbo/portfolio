import React from "react";

interface SocialIconsProps {
  items: any[];
}

function SocialIcons({ items }: SocialIconsProps) {
  return (
    <ul className="social-icons">
      {items.map((item) => (
        <li key={item.link}>
          <a href={item.link}>{<item.icon size={25} />}</a>
        </li>
      ))}
    </ul>
  );
}

export default SocialIcons;
