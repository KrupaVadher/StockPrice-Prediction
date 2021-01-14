import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import seq2seq_apple from "../Images/seq2seq_apple.PNG";
import seq2seq_amd from "../Images/seq2seq_amd.PNG";
import seq2seq_tesla from "../Images/seq2seq_tesla.PNG";
import seq2seq_dis from "../Images/seq2seq_disney.PNG";
export default class Seq extends Component {
  render() {
    return (
      <div>
        <Tabs
          defaultActiveKey="apple"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            alignItems: "stretch",
          }}
        >
          <Tab
            eventKey="apple"
            title="Apple"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Sequence to Sequence Model</h3>
              </Row>

              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={seq2seq_apple}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Feature set: Close</p>
                      <p>c. Input Sequence Length: 15</p>
                      <p>d. Target Sequence Length: 15</p>
                      <p>e. Number of neurons in each layer: 35</p>
                      <p>f. Epochs: 15</p>
                      <p>g. Mean Absolute Percentage Error: 10.86</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </Tab>
          <Tab
            eventKey="amd"
            title="AMD"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Sequence to Sequence Model</h3>
              </Row>

              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={seq2seq_amd}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Feature set: Close</p>
                      <p>c. Input Sequence Length: 15</p>
                      <p>d. Target Sequence Length: 15</p>
                      <p>e. Number of neurons in each layer: 35</p>
                      <p>f. Epochs: 15</p>
                      <p>g. Mean Absolute Percentage Error: 10.86</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </Tab>
          <Tab
            eventKey="tesla"
            title="Tesla"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Sequence to Sequence Model</h3>
              </Row>

              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={seq2seq_tesla}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Feature set: Close</p>
                      <p>c. Input Sequence Length: 15</p>
                      <p>d. Target Sequence Length: 15</p>
                      <p>e. Number of neurons in each layer: 35</p>
                      <p>f. Epochs: 15</p>
                      <p>g. Mean Absolute Percentage Error: 10.86</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </Tab>
          <Tab
            eventKey="dis"
            title="Disney"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Sequence to Sequence Model</h3>
              </Row>

              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={seq2seq_dis}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Feature set: Close</p>
                      <p>c. Input Sequence Length: 15</p>
                      <p>d. Target Sequence Length: 15</p>
                      <p>e. Number of neurons in each layer: 35</p>
                      <p>f. Epochs: 15</p>
                      <p>g. Mean Absolute Percentage Error: 10.86</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Container>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
