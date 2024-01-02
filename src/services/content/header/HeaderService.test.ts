import headerService from "./HeaderService";

describe("HeaderServiceTest", () => {
  test("will return all the content in a single object", () => {
    const { navitems, logo } = headerService.content();

    expect(navitems.length).toBeGreaterThan(0);
    expect(logo).toBeDefined();
  });
});
