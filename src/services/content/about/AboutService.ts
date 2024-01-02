import computer from "../../../assets/images/computer.png";
import cv from "../../../assets/pdf/cv.pdf";

import ContentService from "../ContentService";
import jsoncontent from "../../../assets/json/aboutContent.json";

class AboutService implements ContentService {
  public content() {
    const { aboutme, cvbtn } = jsoncontent;

    return {
      aboutme: aboutme,
      computer: computer,
      text: text,
      cv: cv,
      cvbtn: cvbtn,
    };
  }
}

const aboutService = new AboutService();

const text = `
True passions become professions.
I am a passionate programmer always
designing and architecting solutions that optimize the code
and increase its performance keeping it clean.
`;

export default aboutService;
