import aboutService from "./AboutService";

describe("AboutServiceTest", () => {
  test("will return all the content in a single object", () => {
    const { cv, computer, cvbtn, aboutme, text } = aboutService.content();

    expect(cv).toBeDefined();
    expect(computer).toBeDefined();
    expect(cvbtn).toBeDefined();
    expect(aboutme).toBeDefined();
    expect(text).toBeDefined();
  });
});
