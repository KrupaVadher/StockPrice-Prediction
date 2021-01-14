import React, { Component } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import aditi from "../Images/aditee-page-001.jpg";
import kavya from "../Images/kavya.jpg";
import krupa from "../Images/krupa-page-001.jpg";
import pranav from "../Images/pranav-page-001.jpg";

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col
              sm={3}
              style={{
                padding: "20px",
              }}
            >
              <Image width="200" height="250" src={aditi}></Image>
            </Col>
            <Col
              style={{ padding: "2opx", display: "flex", alignItems: "center" }}
            >
              <Row>
                <p>
                  <b>Aditee Vasant Jadhav </b>
                  is graduate student of San Jose State University for Computer
                  Engineering major. Her research interests include data mining,
                  machine learning, recommendation systems. She has previously
                  carried out research work in the field of data science and she
                  has published 5 research papers.
                </p>
              </Row>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col
              sm={3}
              style={{
                padding: "20px",
              }}
            >
              <Image width="200" height="250" src={kavya}></Image>
            </Col>
            <Col
              style={{ padding: "2opx", display: "flex", alignItems: "center" }}
            >
              <Row>
                <p>
                  <b>Kavyashree ChandraShekar </b>
                  is a graduate student of SJSU for the Computer Engineering
                  major. Her research interests lies in machine learning, web
                  and mobile application development.
                </p>
              </Row>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col
              sm={3}
              style={{
                padding: "20px",
              }}
            >
              <Image width="200" height="250" src={krupa}></Image>
            </Col>
            <Col
              style={{ padding: "2opx", display: "flex", alignItems: "center" }}
            >
              <Row>
                <p>
                  <b>Krupa Dhirajlal Vadher </b>
                  is graduate student of San Jose State University for Computer
                  Engineering major. Her research interests include data mining,
                  machine learning, large scale analytics.
                </p>
              </Row>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <Col
              sm={3}
              style={{
                padding: "20px",
              }}
            >
              <Image width="200" height="250" src={pranav}></Image>
            </Col>
            <Col
              style={{ padding: "2opx", display: "flex", alignItems: "center" }}
            >
              <Row>
                <p>
                  <b>Pranav Sudhir Dixit </b>
                  received the B.E. degree from Savitribai Phule Pune University
                  in India. He is currently pursuing an M.S. degree in Computer
                  Engineering at San Jose State University. His research
                  interests include Neural Network, Deep Learning, Computer
                  Networks, and Computer Systems.
                </p>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
