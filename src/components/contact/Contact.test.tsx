/* eslint-disable testing-library/await-async-utils */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EmailService from "../../services/email/EmailService";
import Contact from "./Contact";

jest.mock("../../services/email/EmailService");

const emailService = jest.mocked(EmailService, true);

describe("ContactTest", () => {
  test("should render the form with every field", () => {
    render(<Contact service={emailService} />);

    expect(screen.getByPlaceholderText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Subject")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Message")).toBeInTheDocument();
  });

  test("should not send anything if name is missing", async () => {
    render(<Contact service={emailService} />);

    const nameInput = screen.getByPlaceholderText("Email");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjInput = screen.getByPlaceholderText("Subject");
    const msgInput = screen.getByPlaceholderText("Message");

    fireEvent.change(emailInput, { target: { value: "any@mail.com" } });
    fireEvent.change(subjInput, { target: { value: "something" } });
    fireEvent.change(msgInput, { target: { value: "hello" } });

    fireEvent.submit(screen.getByText("Send Message"));

    waitFor(async () => {
      expect(nameInput).toBeInvalid();
    });
  });

  test("should not send anything if email is missing", async () => {
    render(<Contact service={emailService} />);

    const nameInput = screen.getByPlaceholderText("Email");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjInput = screen.getByPlaceholderText("Subject");
    const msgInput = screen.getByPlaceholderText("Message");

    fireEvent.change(nameInput, { target: { value: "the name" } });
    fireEvent.change(subjInput, { target: { value: "something" } });
    fireEvent.change(msgInput, { target: { value: "hello" } });

    fireEvent.submit(screen.getByText("Send Message"));

    waitFor(async () => {
      expect(emailInput).toBeInvalid();
    });
  });

  test("should not send anything if Subject is missing", async () => {
    render(<Contact service={emailService} />);

    const nameInput = screen.getByPlaceholderText("Email");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjInput = screen.getByPlaceholderText("Subject");
    const msgInput = screen.getByPlaceholderText("Message");

    fireEvent.change(nameInput, { target: { value: "the name" } });
    fireEvent.change(emailInput, { target: { value: "somemail@mail.com" } });
    fireEvent.change(msgInput, { target: { value: "hello" } });

    fireEvent.submit(screen.getByText("Send Message"));

    waitFor(async () => {
      expect(subjInput).toBeInvalid();
    });
  });

  test("should not send anything if Message is missing", async () => {
    render(<Contact service={emailService} />);

    const nameInput = screen.getByPlaceholderText("Email");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjInput = screen.getByPlaceholderText("Subject");
    const msgInput = screen.getByPlaceholderText("Message");

    fireEvent.change(nameInput, { target: { value: "the name" } });
    fireEvent.change(emailInput, { target: { value: "somemail@mail.com" } });
    fireEvent.change(subjInput, { target: { value: "hello" } });

    fireEvent.submit(screen.getByText("Send Message"));

    waitFor(async () => {
      expect(msgInput).toBeInvalid();
    });
  });

  test("should send the message", async () => {
    render(<Contact service={emailService} />);

    const success = jest
      .spyOn(emailService, "sendEmail")
      .mockImplementation(() => Promise.resolve("Success"));

    const nameInput = screen.getByPlaceholderText("Email");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjInput = screen.getByPlaceholderText("Subject");
    const msgInput = screen.getByPlaceholderText("Message");

    fireEvent.change(nameInput, { target: { value: "the name" } });
    fireEvent.change(emailInput, { target: { value: "somemail@mail.com" } });
    fireEvent.change(subjInput, { target: { value: "hello" } });
    fireEvent.change(msgInput, { target: { value: "message" } });

    fireEvent.submit(screen.getByText("Send Message"));

    waitFor(async () => {
      expect(screen.getByText("Success")).toBeInTheDocument();
    });

    expect(success).toBeCalledTimes(1);
  });

  test("should inform when the message failed", async () => {
    render(<Contact service={emailService} />);

    const fails = jest
      .spyOn(emailService, "sendEmail")
      .mockImplementation(() => Promise.resolve("Message Failed"));

    const nameInput = screen.getByPlaceholderText("Email");
    const emailInput = screen.getByPlaceholderText("Email");
    const subjInput = screen.getByPlaceholderText("Subject");
    const msgInput = screen.getByPlaceholderText("Message");

    fireEvent.change(nameInput, { target: { value: "the name" } });
    fireEvent.change(emailInput, { target: { value: "somemail@mail.com" } });
    fireEvent.change(subjInput, { target: { value: "hello" } });
    fireEvent.change(msgInput, { target: { value: "message" } });

    fireEvent.submit(screen.getByText("Send Message"));

    waitFor(async () => {
      expect(screen.getByText("Message Failed")).toBeInTheDocument();
    });

    expect(fails).toBeCalledTimes(1);
  });
});
