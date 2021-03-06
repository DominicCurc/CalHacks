import React from "react";
import { Card, Row, Col, Button } from "react-bootstrap";
import "./Therapist-Card.css";
import Picture from "../../images/person.jpg";

export default function TherapistCard() {
  return (
    <Card
      className="therapist"
      onClick={(event) => (window.location.href = "/therapist")}
    >
      <Row>
        <Col xs={2} className="centerAlign middleAlign">
          <img src={Picture} className="picture" alt="therapist"></img>
          {/* <Button size="sm" className="buttons">
            Read More
          </Button> */}
        </Col>
        <Col className="middleAlign">
          <h3>
            <strong> Daniella Martin </strong>
          </h3>
          <h6>
            <strong> Licensed Therapist </strong>
          </h6>
          <hr />
          <h6>
            <strong>Speaks fluently in</strong>: English, Spanish
          </h6>
          <h6>
            <strong>Hourly Rate</strong>: 5.00 USD
          </h6>
        </Col>
        <Col className="centerAlign middleAlign">
          <p>
            <h6>
              <em>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua."
                <br /> <br />
                <Button
                  size="sm"
                  className="buttons marginRight"
                  onClick={(event) => (window.location.href = "/therapist")}
                >
                  Read More
                </Button>
                {/* <Button
                  size="sm"
                  className="buttons"
                  onClick={(event) => (window.location.href = "/videocall")}
                >
                  Video Call
                </Button> */}
              </em>
            </h6>
          </p>
        </Col>
      </Row>
    </Card>
  );
}
