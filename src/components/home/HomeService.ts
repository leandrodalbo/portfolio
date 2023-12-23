import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export class HomeService {
  public content() {
    return {
      hometext: HOME_TEXT,
      hi: " Hi, I'm ",
      myname: "Leandro Dal Bo",
      profession: "Software Developer",
    };
  }

  public socialLinks() {
    return [
      { href: "https://www.linkedin.com/in/leandrodalbo", icon: FaLinkedin },
      { href: "https://github.com/leandrodalbo", icon: FaGithub },
      { href: "https://twitter.com/cleandeveloper", icon: FaXTwitter },
    ];
  }
}

const homeService = new HomeService();

export default homeService;

const HOME_TEXT = `
True passions become professions. I am a passionate programmer
            always designing and architecting solutions that optimize the code
            and increase its performance keeping it clean.

`;
