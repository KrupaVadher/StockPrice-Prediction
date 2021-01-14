import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import lr_apple_1 from "../Images/LR_APP_1.png";
import lr_apple_2 from "../Images/lr_apple_2.png";
import lr_apple_3 from "../Images/LR_APP_3.png";
import lr_amd_1 from "../Images/LR_AMD_1.png";
import lr_amd_2 from "../Images/LR_AMD_2.png";
import lr_amd_3 from "../Images/LR_AMD_3.png";
import lr_tsla_1 from "../Images/LR_TSLA_1.png";
import lr_tsla_2 from "../Images/LR_TSLA_2.png";
import lr_tsla_3 from "../Images/LR_TSLA_3.png";
import lr_dis_1 from "../Images/LR_DIS_1.png";
import lr_dis_2 from "../Images/LR_DIS_2.png";
import lr_dis_3 from "../Images/LR_DIS_3.png";
export default class LinearRegression extends Component {
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
                <h3 class="heading">Linear Regression</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Linear Regression with stock data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={lr_apple_1}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Close, Adj.Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
                      <p>f. Accuracy: 1.00</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Linear Regression with Weight Vectors</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={lr_apple_2}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Close, Adj.Close, Volume</p>
                      <p>e. Data Scaling: After Train:Test split</p>
                      <p>f. Accuracy: 0.99</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Linear Regression with Feature-Set</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={lr_apple_3}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Volume</p>
                      <p>e. Data Scaling: After Train:Test split</p>
                      <p>f. Accuracy: 0.16</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
            </Container>
          </Tab>
          <Tab
            eventKey="amd"
            title="AMD"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Linear Regression</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Linear Regression with stock data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_amd_1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R2</p>
                      <p>d. Feature-set: Close, Adj.Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
                      <p>f. Accuracy: 1.00</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Linear Regression with Weight Vectors</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_amd_2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R2</p>
                      <p>d. Feature-set: Close, Adj.Close, Volume</p>
                      <p>e. Data Scaling: After Train:Test split</p>
                      <p>f. Accuracy: 0.99</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Linear Regression with Feature-Set</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_amd_3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Volume</p>
                      <p>e. Data Scaling: After Train:Test split</p>
                      <p>f. Accuracy: 0.16</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
            </Container>
          </Tab>
          <Tab
            eventKey="tesla"
            title="Tesla"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Linear Regression</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Linear Regression with stock data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_tsla_1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Close, Adj.Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
                      <p>f. Accuracy: 1.00</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Linear Regression with Weight Vectors</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_tsla_2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Close, Adj.Close, Volume</p>
                      <p>e. Data Scaling: After Train:Test split</p>
                      <p>f. Accuracy: 0.99</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Linear Regression with Feature-Set</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_tsla_3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Volume</p>
                      <p>e. Data Scaling: After Train:Test split</p>
                      <p>f. Accuracy: 0.16</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
            </Container>
          </Tab>
          <Tab
            eventKey="dis"
            title="Disney"
            style={{ flex: 1, textAlign: "center" }}
          >
            <Container>
              <Row>
                <h3 class="heading">Linear Regression</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Linear Regression with stock data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_dis_1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Close, Adj.Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
                      <p>f. Accuracy: 1.00</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Linear Regression with Weight Vectors</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_dis_2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Close, Adj.Close, Volume</p>
                      <p>e. Data Scaling: After Train:Test split</p>
                      <p>f. Accuracy: 0.99</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Linear Regression with Feature-Set</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={lr_dis_3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. Regression Score Function: R&sup2;</p>
                      <p>d. Feature-set: Volume</p>
                      <p>e. Data Scaling: After Train:Test split</p>
                      <p>f. Accuracy: 0.16</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
            </Container>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
