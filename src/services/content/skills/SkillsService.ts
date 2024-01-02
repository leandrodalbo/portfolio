import { FaJava, FaDocker, FaReact, FaCheckDouble } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { SiKotlin, SiSpring, SiTypescript } from "react-icons/si";
import jsoncontent from "../../../assets/json/skillsContent.json";

export interface SkillItem {
  title: string;
  fill: number;
  icon: any;
}

class SkillsService {
  public content() {
    const {
      title,
      java,
      kotlin,
      aws,
      typescript,
      docker,
      testing,
      spring,
      react,
    } = jsoncontent;

    return {
      title: title,
      items: [
        {
          icon: FaJava,
          ...java,
        },

        {
          icon: SiKotlin,
          ...kotlin,
        },

        {
          icon: SiTypescript,
          ...typescript,
        },

        {
          icon: SiSpring,
          ...spring,
        },

        {
          icon: FaDocker,
          ...docker,
        },

        {
          icon: FaAws,
          ...aws,
        },

        {
          icon: FaReact,
          ...react,
        },

        {
          icon: FaCheckDouble,
          ...testing,
        },
      ],
    };
  }
}

const skillsService = new SkillsService();

export default skillsService;
