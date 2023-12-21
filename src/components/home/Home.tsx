import React from "react";
import { HomeService } from "./HomeService";

interface HomeProps {
  service: HomeService;
}

export default function Home({ service }: HomeProps) {
  const { greeting, text, name, whatido } = service.content();
  return (
    <section id="#home" className="home">
      <p className="home-name">{greeting}</p>
      <h1>{name}</h1>
      <h2>{whatido}</h2>
      <p className="home-text">{text}</p>
    </section>
  );
}
