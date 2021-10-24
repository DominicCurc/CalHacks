import React from "react";
import { Card, Button } from "react-bootstrap";
import "./Book-Lesson.css";

export default function BookLesson() {
  return (
    <div className="cardContainer">
      <Card className="buttonCard">
        <Button
          className="bookButton"
          onClick={(event) => (window.location.href = "/Video-Call")}
        >
          Join Appointment
        </Button>
      </Card>
      <Card className="contactInfo">Contact: xxx-xxx-xxxx</Card>
    </div>
  );
}

//Need to fix: positioning, button color change, link
