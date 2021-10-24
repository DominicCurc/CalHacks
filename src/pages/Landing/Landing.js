import React, { useState } from "react";
import "./Landing.css";
import { Button, Modal } from "react-bootstrap";
import Picture from "../../images/counseling.png";

export default function Landing() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="brand">
      <img src={Picture} alt="landing" className="brandPic"></img>
      <br />
      <br />
      <h1 className="logo">
        <strong>Welcome to the Website!</strong>
      </h1>
      <br />
      <Button className="getStarted" onClick={handleShow}>
        Get Started
      </Button>

      <div className="centerAlignment">
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className="header">
            <h3 className="centerAlignment">
              <strong>Login with your Account</strong>
            </h3>
            <span className="closeKey" onClick={handleClose}>
              <strong> X </strong>
            </span>
          </Modal.Header>
          <Modal.Body className="popUp">
            <span> Confused with something? Talk to a tutor! </span>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}
