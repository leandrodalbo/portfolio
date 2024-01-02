import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import ContentService from "../ContentService";
import jsoncontent from "../../../assets/json/homeContent.json";

export interface SocialItem {
  href: string;
  icon: any;
}

class HomeService implements ContentService {
  public content() {
    const { hi, profession, linkedin, github, xtwitter } = jsoncontent;
    return {
      hi: hi,
      profession: profession,
      socialLinks: [
        { href: linkedin, icon: FaLinkedin },
        { href: github, icon: FaGithub },
        { href: xtwitter, icon: FaXTwitter },
      ],
    };
  }
}

const homeService = new HomeService();

export default homeService;
