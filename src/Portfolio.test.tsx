import React from "react";
import { render, screen } from "@testing-library/react";
import Portfolio from "./Portfolio";

test("renders Portfolio", () => {
  render(<Portfolio />);

  expect(screen.getByTestId("portfolio")).toBeInTheDocument();
});
