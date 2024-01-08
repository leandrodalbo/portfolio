import profile from "../../../assets/images/profile.jpeg";
import cv from "../../../assets/pdf/cv.pdf";

import ContentService from "../ContentService";
import jsoncontent from "../../../assets/json/aboutContent.json";

class AboutService implements ContentService {
  public content() {
    const { aboutme, cvbtn } = jsoncontent;

    return {
      aboutme: aboutme,
      profile: profile,
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
