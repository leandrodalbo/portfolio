import React, { useState } from "react";
import "./style.css";
import { EmailService } from "../../services/email/EmailService";
import { Button, Form, Modal } from "react-bootstrap";

interface EmailProps {
  service: EmailService;
}

const Contact = ({ service }: EmailProps) => {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isModalDisplayed, setIsModalDisplayed] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const cleanUp = () => {
    setName("");
    setMessage("");
    setSubject("");
    setEmail("");
  };

  const showModal = (result: string) => {
    setModalMessage(result);
    setIsModalDisplayed(true);
  };

  const closeModal = () => {
    setModalMessage("");
    setIsModalDisplayed(false);
  };

  const sendEmail = async () => {
    const result = await service.sendEmail({
      subject,
      name,
      email,
      message,
    });

    showModal(result);
    cleanUp();
  };

  return (
    <section data-testid="contact" id="contact" className="py-5">
      <Modal show={isModalDisplayed}>
        <Modal.Header className="bg-info justify-content-center">
          <Modal.Title className="text-dark">Message Info</Modal.Title>
        </Modal.Header>

        <Modal.Body className="px-3 bg-info text-dark d-flex justify-content-between ">
          <p>{modalMessage}</p>
          <span>
            <Button className="text-dark bg-secondary" onClick={closeModal}>
              Close
            </Button>
          </span>
        </Modal.Body>
      </Modal>
      <div className="container py-5">
        <div className="row py-5 ">
          <div className="col py-5">
            <h1 className="d-flex justify-content-center">Message-Me</h1>

            <Form onSubmit={sendEmail} className="email-form">
              <Form.Group className="form-group">
                <Form.Label htmlFor="inputName">Name</Form.Label>
                <Form.Control
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Name"
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
                  placeholder="Email"
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
                  placeholder="Subject"
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
                  placeholder="Message"
                  rows={5}
                  value={message}
                  required={true}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                ></Form.Control>
              </Form.Group>

              <button type="submit" className="email-btn btn">
                Send Message
              </button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
