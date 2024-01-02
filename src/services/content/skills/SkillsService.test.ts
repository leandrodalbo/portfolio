import skillsService from "./SkillsService";

describe("SkillsServiceTest", () => {
  test("will return all the content in a single object", () => {
    const { title, items } = skillsService.content();

    expect(items.length).toBeGreaterThan(0);
    expect(title).toBeDefined();
  });
});
