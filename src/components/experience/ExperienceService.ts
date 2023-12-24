export class ExperienceService {
  public content() {
    return {
      title: "My Experience",
      items: [
        {
          company: "Accenture (Argentina)",
          dates: "July 2017 - October 2018",
          role: "Tech Architecture Delivery Associate",
        },
        {
          company: "Agility Multichannel (UK)",
          dates: "May 2019 – March 2020",
          role: "Java Developer",
        },
        {
          company: "CACI (UK)",
          dates: "April 2021 – May 2022",
          role: "Java Developer",
        },
        {
          company: "Flutter International (Pokerstars)",
          dates: "May 2022 - November 2023",
          role: "Java Software Engineer",
        },
      ],
    };
  }
}

const experienceService = new ExperienceService();

export default experienceService;
