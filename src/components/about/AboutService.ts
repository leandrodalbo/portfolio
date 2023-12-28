import computer from "../../assets/computer.png";
import cv from "../../assets/cv.pdf";

export class AboutService {
  public content() {
    return {
      aboutme: "About-Me",
      computer: computer,
      text: ABOUT_TEXT,
      cv: cv,
      cvbtn: "Download-CV",
    };
  }
}

const aboutService = new AboutService();

export default aboutService;

const ABOUT_TEXT = `
 True passions become professions.
 I am a passionate programmer always
 designing and architecting solutions that optimize the code
 and increase its performance keeping it clean.
`;
