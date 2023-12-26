import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export class HomeService {
  public content() {
    return {
      hi: "Hi, I'm Leandro Dal Bo",
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
