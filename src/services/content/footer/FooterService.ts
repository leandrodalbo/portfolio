import ContentService from "../ContentService";
import jsoncontent from "../../../assets/json/footerContent.json";

class FooterService implements ContentService {
  public content() {
    const { name } = jsoncontent;

    return ` ${new Date().getFullYear()} ${name}`;
  }
}

const footerService = new FooterService();

export default footerService;
