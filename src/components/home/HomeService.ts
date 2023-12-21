export class HomeService {
  public content() {
    return {
      greeting: "Hi, my name is",
      name: "Leandro",
      whatido: "I am ....",
      text: "everything else here",
    };
  }
}

const homeService = new HomeService();

export default homeService;
