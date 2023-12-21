import logo from "../../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export class NavigationService {
  public logo() {
    return logo;
  }

  public socialIcons() {
    return [
      {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/leandrodalbo",
      },
      {
        icon: FaGithub,
        link: "https://github.com/leandrodalbo",
      },
      {
        icon: FaXTwitter,
        link: "https://twitter.com/cleandeveloper",
      },
    ];
  }

  public navItems() {
    return [
      {
        title: "Home",
        href: "#",
      },
      {
        title: "About",
        href: "#",
      },
      {
        title: "Skills",
        href: "#",
      },
      {
        title: "Experience",
        href: "#",
      },
      {
        title: "Contact",
        href: "#",
      },
    ];
  }
}

const navigationService = new NavigationService();

export default navigationService;
