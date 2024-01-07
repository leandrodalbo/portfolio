/* eslint-disable testing-library/await-async-utils */
/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */

import axios from "axios";
import emailService, { MailTemplate } from "./EmailService";
import { waitFor } from "@testing-library/react";

describe("EmailServiceTest", () => {
  test("should successfully send a message", () => {
    const postMethod = jest
      .spyOn(axios, "post")
      .mockImplementation(() => Promise.resolve({ status: 201 }));

    const result = emailService.sendEmail({
      name: "name",
      subject: "subject",
      message: "message",
      email: "mail@mail.com",
    } as MailTemplate);

    waitFor(async () => {
      expect(result).toEqual("Message Successfully Sent");
    });
    expect(postMethod).toHaveBeenCalled();
  });

  test("should not send a message and handle it", () => {
    const postMethod = jest
      .spyOn(axios, "post")
      .mockImplementation(() => Promise.resolve({ status: 404 }));

    const result = emailService.sendEmail({
      name: "name",
      subject: "subject",
      message: "message",
      email: "mail@mail.com",
    } as MailTemplate);

    waitFor(async () => {
      expect(result).toContain("Message Failed");
    });
    expect(postMethod).toHaveBeenCalled();
  });
});
