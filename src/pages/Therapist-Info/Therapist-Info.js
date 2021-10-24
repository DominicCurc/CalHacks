import React from "react";
import "./Therapist-Info.css";
// import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Navigation from "../../components/Navigation/Navigation";
import BookLesson from "../../components/Book-Lesson/Book-Lesson";
// import Rating from "./routesArticles.js";

export default function TherapistInfo() {
  return (
    <div>
      <Navigation />
      <br />
      <div className="wholeBody">
        <div className="backToDash">
          <Link to="/patient">
            <p>
              <h6>
                <strong> Back to Dashboard </strong>
              </h6>
            </p>
          </Link>
        </div>
        <div className="infoTherapy">
          <BookLesson />
        </div>
        <div className="bottomSpace">
          <h1>
            <strong> Ratings </strong>
          </h1>
        </div>
        {/* <div>
          <Rating />
        </div> */}
      </div>
    </div>
  );
}
