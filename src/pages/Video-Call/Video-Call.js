import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Row, Col, Card, Button } from "react-bootstrap";

export default function VideoCall() {
  return (
    <div>
      <Navigation />
      <Row className="rows">
        <Col className="cols1">
          <div className="videoscreen">
            The video of the patient should appear here
            <bookLesson />
          </div>
          <Button className="buttons marginRight">Open Camera</Button>
          <Button className="buttons marginRight">Close Camera</Button>
        </Col>
        <Col className="cols2">
          <div className="videoscreen">
            The video of the therapist should appear here
          </div>
        </Col>
      </Row>
    </div>
  );
}
