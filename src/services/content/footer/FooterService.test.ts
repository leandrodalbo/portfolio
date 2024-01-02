import footerService from "./FooterService";

describe("FooterServiceTest", () => {
  test("will return all the content in a string", () => {
    expect(footerService.content()).toBeDefined();
  });
});
