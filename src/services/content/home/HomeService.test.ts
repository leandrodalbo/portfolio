import homeService from "./HomeService";

describe("HomeServiceTest", () => {
  test("will return all the content in a single object", () => {
    const { hi, profession, socialLinks } = homeService.content();

    expect(socialLinks.length).toBeGreaterThan(0);
    expect(hi).toBeDefined();
    expect(profession).toBeDefined();
  });
});
