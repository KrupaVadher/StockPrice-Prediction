import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import arima_apple from "../Images/arima_apple.PNG";
import arima_amd from "../Images/arima_amd.PNG";
import arima_tesla from "../Images/arima_tesla.PNG";
import arima_dis from "../Images/arima_disney.PNG";
export default class ARIMA extends Component {
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
                <h3 class="heading">
                  Auto Regressive Integrated Moving Average (ARIMA)
                </h3>
              </Row>

              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={arima_apple}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Feature set: Close</p>
                      <p>c. p,d,q : 1,1,1</p>
                      <p>d. Mean Absolute Percentage Error: 29.208</p>
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
                <h3 class="heading">
                  Auto Regressive Integrated Moving Average (ARIMA)
                </h3>
              </Row>

              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={arima_amd}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Feature set: Close</p>
                      <p>c. p,d,q : 1,1,1</p>
                      <p>d. Mean Absolute Percentage Error: 29.208</p>
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
                <h3 class="heading">
                  Auto Regressive Integrated Moving Average (ARIMA)
                </h3>
              </Row>

              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={arima_tesla}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Feature set: Close</p>
                      <p>c. p,d,q : 1,1,1</p>
                      <p>d. Mean Absolute Percentage Error: 29.208</p>
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
                <h3 class="heading">
                  Auto Regressive Integrated Moving Average (ARIMA)
                </h3>
              </Row>

              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={arima_dis}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Feature set: Close</p>
                      <p>c. p,d,q : 1,1,1</p>
                      <p>d. Mean Absolute Percentage Error: 29.208</p>
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
