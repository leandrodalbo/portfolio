import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import headerService from "../../services/content/header/HeaderService";

describe("HeaderTest", () => {
  test("should render the logo a navigation items", () => {
    const { logo, navitems } = headerService.content();
    render(<Header service={headerService} />);

    expect(screen.getByText(logo)).toBeInTheDocument();

    navitems.forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });
  });

  test("should show the selected section", () => {
    const { navitems } = headerService.content();
    render(<Header service={headerService} />);

    navitems.forEach((item) => {
      fireEvent.click(screen.getByText(item));
      expect(screen.getByText(item)).toHaveClass("active");
    });
  });
});
