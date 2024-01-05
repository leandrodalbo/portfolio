import { render, screen } from "@testing-library/react";
import ContentService from "../../services/content/ContentService";
import About from "./About";

jest.mock("../../services/content/ContentService");

const mockService = jest.mocked<ContentService>({ content: jest.fn() }, true);

describe("AboutTest", () => {
  test("should render about content", () => {
    mockService.content.mockImplementation(() => {
      return {
        aboutme: "aboutme",
        cvbtn: "btncontent",
        text: "some text",
        computer: "/img",
        cv: "#/cv",
      };
    });

    const spy = jest.spyOn(mockService, "content");

    render(<About service={mockService} />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "aboutme"
    );

    expect(screen.getByRole("img")).toBeInTheDocument();

    expect(screen.getByAltText("computer-img")).toBeInTheDocument();

    expect(screen.getByText("some text")).toBeInTheDocument();

    expect(screen.getByRole("link", { name: "btncontent" })).toHaveAttribute(
      "href",
      "#/cv"
    );

    expect(spy).toHaveBeenCalled();
  });
});
