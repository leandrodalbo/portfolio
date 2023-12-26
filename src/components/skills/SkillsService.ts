import { FaJava, FaDocker, FaReact, FaCheckDouble } from "react-icons/fa";
import { FaAws } from "react-icons/fa6";
import { SiKotlin, SiSpring, SiTypescript } from "react-icons/si";

export class SkillsService {
  public content() {
    return {
      title: "My Skills",
      items: [
        {
          icon: FaJava,
          title: "Java",
          fill: 100,
        },

        {
          icon: SiKotlin,
          title: "Kotlin",
          fill: 95,
        },

        {
          icon: SiTypescript,
          title: "Typescript",
          fill: 80,
        },

        {
          icon: SiSpring,
          title: "Spring Framework",
          fill: 80,
        },

        {
          icon: FaDocker,
          title: "Docker",
          fill: 75,
        },

        {
          icon: FaAws,
          title: "AWS",
          fill: 60,
        },

        {
          icon: FaReact,
          title: "React",
          fill: 60,
        },

        {
          icon: FaCheckDouble,
          title: "Automated Tests",
          fill: 100,
        },
      ],
    };
  }
}

const skillsService = new SkillsService();

export default skillsService;
