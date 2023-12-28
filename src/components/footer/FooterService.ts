export class FooterService {
  public content() {
    return ` ${new Date().getFullYear()} Leandro Dal Bo`;
  }
}

const footerService = new FooterService();

export default footerService;
