import React, { useState } from "react";
import "./style.css";
import { EmailService } from "../../services/email/EmailService";
import { Form } from "react-bootstrap";

interface EmailProps {
  service: EmailService;
}

const Contact = ({ service }: EmailProps) => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isToastDisplayed, setIsToastDisplayed] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const cleanUp = () => {
    setName("");
    setMessage("");
    setSubject("");
    setEmail("");
  };

  const showToast = (result: string) => {
    setToastMessage(result);
    setIsToastDisplayed(true);
  };

  const closeToast = () => {
    setToastMessage("");
    setIsToastDisplayed(false);
  };

  const sendEmail = async () => {
    const result = await service.sendEmail({
      subject,
      name,
      email,
      message,
    });

    showToast(result);
    cleanUp();
  };

  return (
    <section id="contact" className="py-5">
      <div className="container py-5">
        <div className="row py-5 ">
          {isToastDisplayed && (
            <div
              aria-live="polite"
              aria-atomic="true"
              className="toast-polite-area"
            >
              <div className="toast-position">
                <div
                  className="toast show"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <button onClick={() => closeToast()}>{toastMessage}</button>
                </div>
              </div>
            </div>
          )}
          <div className="col py-5">
            <h1 className="d-flex justify-content-center">Message-Me</h1>

            <Form onSubmit={sendEmail} className="email-form">
              <Form.Group className="form-group">
                <Form.Label htmlFor="inputName">Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Enter Name"
                  required={true}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="form-group">
                <Form.Label htmlFor="inputEmail">Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter email"
                  required={true}
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label htmlFor="inputSubject">Subject</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="inputSubject"
                  placeholder="Enter Subject"
                  required={true}
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                  }}
                />
              </Form.Group>

              <Form.Group className="form-group">
                <Form.Label htmlFor="messageArea" className="form-label">
                  Message
                </Form.Label>
                <Form.Control
                  className="form-control"
                  id="messageArea"
                  as="textarea"
                  rows={5}
                  value={message}
                  required={true}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>

              <button type="submit" className="email-btn">
                Submit
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
