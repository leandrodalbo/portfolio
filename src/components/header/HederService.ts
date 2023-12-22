export class HeaderService {
  public navItems() {
    return ["home", "about", "skills", "experience", "contact"];
  }

  public logo() {
    return "leandro.";
  }
}

const headerService = new HeaderService();

export default headerService;
