import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import apple from "../Images/apple_svm.png";
import amd from "../Images/amd_svm.png";
import tesla from "../Images/tesla_svm.png";
import disney from "../Images/disney_svm.png";
export default class SVM extends Component {
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
                <h3 class="heading">Support Vector Machine (SVM)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>Stock data analysis with SVM</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. Accuracy is very low</p>
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
                <h3 class="heading">Support Vector Machine (SVM)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>Stock data analysis with SVM</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={amd}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. Accuracy is very low</p>
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
                <h3 class="heading">Support Vector Machine (SVM)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>Stock data analysis with SVM</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. Accuracy is very low</p>
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
                <h3 class="heading">Support Vector Machine (SVM)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>Stock data analysis with SVM</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={disney}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. Accuracy is very low</p>
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
