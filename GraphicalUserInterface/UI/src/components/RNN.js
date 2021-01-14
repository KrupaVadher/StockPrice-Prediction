import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import apple1 from "../Images/apple_with_80-20_60.png";
import apple2 from "../Images/apple_semantic.png";
import apple3 from "../Images/apple_50_vec.png";
import apple4 from "../Images/apple_50_vec_epoch.png";
import amd1 from "../Images/amd_rnn.png";
import amd2 from "../Images/AMD_50_vec.png";
import amd3 from "../Images/amd_50_epoch.png";
import dis1 from "../Images/disney_rnn.png";
import dis2 from "../Images/Dis_50.png";
import dis3 from "../Images/Dis_50_epoch.png";
import tesla1 from "../Images/tesla_rnn.png";
import tesla2 from "../Images/Tesla_50.png";
import tesla3 from "../Images/Tesla_50_Epoch.png";
export default class RNN extends Component {
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
                <h3 class="heading">Recurrent Neural Network (RNN)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock data analysis with RNN</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    2. Stock data analysis along with News semantic scores{" "}
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. News Semantic scores are included </p>
                      <p>b. 60 window size</p>
                      <p>c. 90% accuracy</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Stock data analysis with 50 News Vectors</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. News is convered to vectors</p>
                      <p>b. 300 Vectors</p>
                      <p>c. Accuracy decreased</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    4. Stock data analysis with 50 News Vectors with epoch
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 50 Vectors </p>
                      <p>b. Dimention reduction using encoders</p>
                      <p>c. Better performance compared to 300 vectors</p>
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
                <h3 class="heading">Recurrent Neural Network (RNN)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock data analysis with RNN</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={amd1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    2. Stock data analysis along with News semantic scores{" "}
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={amd1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Stock data analysis with 50 News Vectors</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={amd2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    4. Stock data analysis with 50 News Vectors with epoch
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={amd3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
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
                <h3 class="heading">Recurrent Neural Network (RNN)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock data analysis with RNN</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    2. Stock data analysis along with News semantic scores{" "}
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Stock data analysis with 50 News Vectors</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    4. Stock data analysis with 50 News Vectors with epoch
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
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
                <h3 class="heading">Recurrent Neural Network (RNN)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock data analysis with RNN</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={dis1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    2. Stock data analysis along with News semantic scores{" "}
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={dis1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Stock data analysis with 50 News Vectors</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={dis2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    4. Stock data analysis with 50 News Vectors with epoch
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={dis3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. 80-20 training and test data split </p>
                      <p>b. 60 window size</p>
                      <p>c. 88% accuracy</p>
                      <p>d. 1.13 RMSE</p>
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
