/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render, screen } from "@testing-library/react";
import ContentService from "../../services/content/ContentService";
import Skills from "./Skills";
import { FaJava } from "react-icons/fa6";

jest.mock("../../services/content/ContentService");

const mockService = jest.mocked<ContentService>({ content: jest.fn() }, true);

describe("SkillsTest", () => {
  test("should render Skill content", () => {
    mockService.content.mockImplementation(() => {
      return {
        title: "sometitle",
        items: [
          {
            icon: FaJava,
            title: "Java",
            fill: 100,
          },
        ],
      };
    });

    const spy = jest.spyOn(mockService, "content");

    render(<Skills service={mockService} />);

    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "sometitle"
    );

    expect(screen.getByText("Java")).toBeInTheDocument();

    expect(spy).toHaveBeenCalled();
  });
});
