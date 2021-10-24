import React from "react";
import Navigation from "../../components/Navigation/Navigation";
import { Link } from "react-router-dom";
import { Row, Col, Button } from "react-bootstrap";

export default function VideoCall() {
  return (
    <div>
      <Navigation sticky="top" />
      <Link to="/patient">
        <p>
          <h6>
            <strong> Back to Dashboard </strong>
          </h6>
        </p>
      </Link>
      <Row className="rows">
        <Col className="cols1">
          <div className="videoscreen">
            The video of the patient should appear here
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
