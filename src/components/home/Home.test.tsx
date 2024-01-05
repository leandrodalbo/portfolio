/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import ContentService from "../../services/content/ContentService";
import Home from "./Home";
import { FaGit } from "react-icons/fa6";

jest.mock("../../services/content/ContentService");

const mockService = jest.mocked<ContentService>({ content: jest.fn() }, true);

describe("HomeTest", () => {
  test("should render Home content", () => {
    mockService.content.mockImplementation(() => {
      return {
        hi: "sayhi",
        profession: "whatdoyoudo",
        socialLinks: [{ href: "https://www.link.com", icon: FaGit }],
      };
    });

    const spy = jest.spyOn(mockService, "content");

    const { container } = render(<Home service={mockService} />);

    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "sayhi"
    );

    expect(container.getElementsByClassName("home-typed").length).toBe(1);

    expect(screen.getAllByRole("link").length).toBeGreaterThan(0);

    expect(spy).toHaveBeenCalled();
  });
});
