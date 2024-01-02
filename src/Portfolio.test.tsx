import React from "react";
import { render, screen } from "@testing-library/react";
import Portfolio from "./Portfolio";

test("renders Portfolio", () => {
  render(<Portfolio />);

  expect(screen.getByTestId("header")).toBeInTheDocument();
  expect(screen.getByTestId("home")).toBeInTheDocument();
  expect(screen.getByTestId("about")).toBeInTheDocument();
  expect(screen.getByTestId("skills")).toBeInTheDocument();
  expect(screen.getByTestId("contact")).toBeInTheDocument();
  expect(screen.getByTestId("footer")).toBeInTheDocument();
});
