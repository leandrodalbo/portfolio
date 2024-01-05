import { render, screen } from "@testing-library/react";
import ContentService from "../../services/content/ContentService";
import Footer from "./Footer";

jest.mock("../../services/content/ContentService");

const mockService = jest.mocked<ContentService>({ content: jest.fn() }, true);

describe("FooterTest", () => {
  test("should render footer content", () => {
    mockService.content.mockImplementation(() => {
      return "FOOOTERTEXT";
    });

    const spy = jest.spyOn(mockService, "content");

    render(<Footer service={mockService} />);

    expect(screen.getByText("FOOOTERTEXT")).toBeInTheDocument();

    expect(spy).toHaveBeenCalled();
  });
});
