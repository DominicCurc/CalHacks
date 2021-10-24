import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Navigation.css";
import Picture from "../../images/person.jpg";

export default function Navigation() {
  return (
    <div className="centerAlign">
      <Navbar collapseOnSelect expand="lg" className="navigation">
        <Container className="centerAlign">
          <Navbar.Brand href="#home" className="centerAlign">
            <span
              className="navText centerAlign"
              onClick={(event) => (window.location.href = "/patient")}
            >
              CalHacks 2021 Project
            </span>
          </Navbar.Brand>
          {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
          <span>
            <img src={Picture} className="photo" alt="profile"></img>
          </span>
        </Container>
      </Navbar>
    </div>
  );
}
