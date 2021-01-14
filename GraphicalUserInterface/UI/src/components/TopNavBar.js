import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../Images/Spartans_logo.png";

export default class TopNavBar extends Component {
  render() {
    return (
      <>
        <Navbar
          variant="dark"
          className="justify-content-between"
          style={{ backgroundColor: "#0055a2" }}
        >
          <Navbar.Brand
            href="/"
            style={{ fontWeight: "bold", fontSize: "1.5rem" }}
          >
            <img
              alt=""
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />{" "}
            Spartan Stock Prediction
          </Navbar.Brand>
          <Nav>
            <Nav.Link id="top" href="/TechnicalDetails">
              Technical Details
            </Nav.Link>
            <Nav.Link id="top" href="/help">
              Help
            </Nav.Link>
            <Nav.Link id="top" href="/aboutUs">
              About Us
            </Nav.Link>
          </Nav>
        </Navbar>
      </>
    );
  }
}
