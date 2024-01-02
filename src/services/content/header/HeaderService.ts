import ContentService from "../ContentService";
import jsoncontent from "../../../assets/json/headerContent.json";

class HeaderService implements ContentService {
  public content() {
    return { ...jsoncontent };
  }
}

const headerService = new HeaderService();

export default headerService;
