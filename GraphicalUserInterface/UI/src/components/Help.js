import React, { Component } from "react";
import { Container } from "react-bootstrap";

export default class Help extends Component {
  render() {
    return (
      <div>
        <Container>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "200px",
            }}
          >
            <h5>If you need any support or help, Please reach out to</h5>
            <p>
              <b>mahima.agumbesuresh@sjsu.edu</b>
            </p>
            <p>aditeevasant.jadhav@sjsu.edu</p>
            <p>kavyashree.chandrashekar@sjsu.edu</p>
            <p>krupadhirajlal.vadher@sjsu.edu</p>
            <p>pranavsudhir.dixit@sjsu.edu</p>
          </div>
        </Container>
      </div>
    );
  }
}
