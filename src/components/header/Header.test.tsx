import { fireEvent, render, screen } from "@testing-library/react";
import Header from "./Header";
import ContentService from "../../services/content/ContentService";

jest.mock("../../services/content/ContentService");

const mockService = jest.mocked<ContentService>({ content: jest.fn() }, true);

describe("HeaderTest", () => {
  test("should render the logo a navigation items", () => {
    mockService.content.mockImplementation(() => {
      return { logo: "logo", navitems: ["a", "b", "c"] };
    });

    const spy = jest.spyOn(mockService, "content");

    render(<Header service={mockService} />);

    expect(screen.getByText("logo")).toBeInTheDocument();

    ["a", "b", "c"].forEach((item) => {
      expect(screen.getByText(item)).toBeInTheDocument();
    });

    expect(spy).toHaveBeenCalledTimes(1);
  });

  test("should show the selected section", () => {
    mockService.content.mockImplementation(() => {
      return { logo: "logo", navitems: ["a", "b", "c"] };
    });

    const spy = jest.spyOn(mockService, "content");

    render(<Header service={mockService} />);

    expect(spy).toHaveBeenCalledTimes(1);

    ["a", "b", "c"].forEach((item) => {
      fireEvent.click(screen.getByText(item));
      expect(screen.getByText(item)).toHaveClass("active");
    });
  });
});
