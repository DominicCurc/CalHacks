import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "./Book-Lesson.css";
import Photos from "../../images/person.jpg";
import initiateAgentCall from "./helper/helper.js";
export default function BookLesson() {
  return (
    <div className="cardContainer">
      <Card className="buttonCard">
        {/* <div className="contactInfo">Contact: xxx-xxx-xxxx</div> */}
        <Row>
          <Col xs={3} className="centerAlign">
            <span className="therapistPicture">
              <img src={Photos} className="photos" alt="therapist"></img>
            </span>
            <div className="marginTop">
              <h6>
                <strong>Speaks</strong>: Spanish, English
              </h6>
              <h6>
                <strong>Hourly Rate</strong>: 5.00 USD
              </h6>
            </div>
          </Col>
          <Col>
            <h2>
              <strong> Daniella Martin </strong>
            </h2>
            <h6>Licensed Therapist</h6>
            <hr />
            <h5>
              <strong>About Me</strong>
            </h5>
            <em>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."
              </p>
              <p>
                "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem. Ut enim ad minima veniam, quis nostrum
                exercitationem ullam corporis suscipit laboriosam, nisi ut
                aliquid ex ea commodi consequatur? Quis autem vel eum iure
                reprehenderit qui in ea voluptate velit esse quam nihil
                molestiae consequatur, vel illum qui dolorem eum fugiat quo
                voluptas nulla pariatur?"
              </p>
            </em>
          </Col>
          <Col xs={3} className="centerAlign">
            <Button
              className="bookButton"
              id="initialize-call-agent"
              onClick={() => initiateAgentCall()}
            >
              Start a Video Call
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  );
}
