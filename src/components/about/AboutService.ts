import computer from "../../assets/computer.png";

export class AboutService {
  public content() {
    return {
      aboutme: "About-Me",
      computer: computer,
      text: ABOUT_TEXT,
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
