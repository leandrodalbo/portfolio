import "cypress-real-events/support";

describe("portfolio", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://www.*", (req) => {
      const links = [
        "https://www.linkedin.com/in/leandrodalbo",
        "https://github.com/leandrodalbo",
        "https://twitter.com/leadevt_dal",
      ];
      expect(links).includes(req.url);
    });

    cy.intercept("POST", "default", (req) => {
      const { subject, name, email, message } = req.body.template_params;

      expect(subject).equals("mysubject");
      expect(name).equals("myname");
      expect(message).equals("shortmessage");
      expect(email).equals("myemail@mail.com");
    });

    cy.intercept(/.*\.pdf$/, (req) => {
      const pdfName = req.url.split("/").at(-1);

      expect(pdfName).contain("cv");

      req.continue((res) => {
        res.headers["Content-Disposition"] = `attachment; filename=${pdfName};`;
      });
    });
  });

  it("can navigate using the header", () => {
    cy.visit("http://localhost:3000");
    cy.get(".logo").should("be.visible").click();
    cy.contains("home").and("have.class", "active");
    cy.contains("about").click().and("have.class", "active");
    cy.contains("skills").click().and("have.class", "active");
    cy.contains("contact").click().and("have.class", "active");
  });

  it("can visit linkedin from home section", () => {
    cy.visit("http://localhost:3000");
    cy.contains("home").click();
    cy.get(
      '.social > a[href="https://www.linkedin.com/in/leandrodalbo"]'
    ).click();
  });

  it("can visit github from home section", () => {
    cy.visit("http://localhost:3000");
    cy.contains("home").click();
    cy.get('.social > a[href="https://github.com/leandrodalbo"]').click();
  });

  it("can visit X from home section", () => {
    cy.visit("http://localhost:3000");
    cy.contains("home").click();
    cy.get('.social > a[href="https://twitter.com/leadevt_dal"]').click();
  });

  it("can check skills cards from the skilss section", () => {
    cy.visit("http://localhost:3000");
    cy.contains("skills").click();
    cy.get(".carousel-item.active").find("span").should("be.visible");
  });

  it("send a message cards from the contact section", () => {
    cy.visit("http://localhost:3000");
    cy.contains("contact").click();

    cy.get("[id^=inputName]").type("myname");
    cy.get("[id^=inputEmail]").type("myemail@mail.com");
    cy.get("[id^=inputSubject]").type("mysubject");
    cy.get("[id^=messageArea]").type("shortmessage");

    cy.get(".email-btn").click();
  });

  it("can download the cv from about section", () => {
    cy.visit("http://localhost:3000");
    cy.contains("about").click();
    cy.contains("Download-CV").click();
  });
});
