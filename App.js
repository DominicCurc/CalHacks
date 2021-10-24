import * as React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Patient from "./pages/Dashboard/Patient";
import Landing from "./pages/Landing/Landing";
import Therapist from "./pages/Therapist-Info/Therapist-Info";
import VideoCall from "./pages/Video-Call/Video-Call";
import "./styles.css";
import TherapistInfo from "./pages/Therapist-Info/Therapist-Info";
// import Login from "./components/Login/login";

// required components are therpist IDs
// no request handlers are necessary
const client = require("braintree-web/client");
const paymentRequest = require("braintree-web/payment-request");

// colum (similar to div) with book button,
// video, and therapist info

export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Landing />
            </Route>
            <Route exact path="/TherapistInfo">
              <TherapistInfo />
            </Route>
            <Route exact path="/patient">
              <Patient />
            </Route>
            <Route exact path="/therapist">
              <Therapist />
            </Route>
            <Route exact path="/videocall">
              <VideoCall />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
