import logo from "../../assets/logo.png";

export class NavigationService {
  public logo() {
    return logo;
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
