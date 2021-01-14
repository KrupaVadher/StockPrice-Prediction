import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import en1 from "../Images/ensemble1.png";
import en2 from "../Images/ensemble2.png";
import en3 from "../Images/ensemble3.png";
import en4 from "../Images/ensemble4.png";
import en5 from "../Images/ensemble5.png";
import en6 from "../Images/ensemble6.png";
import en7 from "../Images/ensemble7.png";
import apple1 from "../Images/Ensemble_APPLE_1.png";
import apple2 from "../Images/Ensemble_APPLE_2.png";
import apple3 from "../Images/Ensemble_APPLE_3.png";
import apple4 from "../Images/Ensemble_APPLE_4.png";
import apple5 from "../Images/Ensemble_APPLE_5.png";
import apple6 from "../Images/Ensemble_APPLE_6.png";
import apple7 from "../Images/Ensemble_APPLE_7.png";
import tesla1 from "../Images/ensemble_tesla_1 2.PNG";
import tesla2 from "../Images/ensemble_tesla_2 2.PNG";
import tesla3 from "../Images/Ensemble_Tesla_3.png";
import tesla4 from "../Images/Ensemble_Tesla_4.png";
import tesla5 from "../Images/Ensemble_Tesla_5.png";
import tesla6 from "../Images/Ensemble_Tesla_6.png";
import tesla7 from "../Images/Ensemble_Tesla_7.png";
import disney1 from "../Images/Ensemble_dis_1.png";
import disney2 from "../Images/Ensemble_dis_2.png";
import disney3 from "../Images/Ensemble_dis_3.png";
import disney4 from "../Images/Ensemble_dis_4.png";
import disney5 from "../Images/Ensemble_dis_5.png";
import disney6 from "../Images/Ensemble_dis_6.png";
import disney7 from "../Images/Ensemble_dis_7.png";

export default class Ensemble extends Component {
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
                <h3 class="heading">Ensemble Model</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock data analysis with Ensemble Model</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Set of base classifiers: LSTM, LR, RNN </p>
                      <p>b. Aggregated voting</p>
                      <p>c. Better results than individual models</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Stock data analysis with weighted Ensemble</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Set of base classifiers: LSTM, LR, RNN </p>
                      <p>b. Weighted aggregated voting</p>
                      <p>c. Similar performance as ensemble</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Drift detection</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Error rate monitoring</p>
                      <p>b. Temporal data monitoring</p>
                      <p>c. Degrades performance of system</p>
                      <p>d. Need methods to adapt new concepts</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>4. Drift Adaption with no retraining</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts not adapted </p>
                      <p>b. Drifts continue to be detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>5. Drift Adaption with retraining on past data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple5}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts not adapted </p>
                      <p>b. Lesser drifts detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>6. Drift Adaption with retraining on recent data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple6}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts adapted; past concepts forgotten </p>
                      <p>b. More drifts detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    7. Drift Adaption with retraining on past and recent data
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={apple7}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New and past concepts adapted</p>
                      <p>b. Least drifts detected</p>
                      <p>c. Improved performance</p>
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
                <h3 class="heading">Ensemble Model</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock data analysis with Ensemble Model</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={en1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Set of base classifiers: LSTM, LR, RNN </p>
                      <p>b. Aggregated voting</p>
                      <p>c. Better results than individual models</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Stock data analysis with weighted Ensemble</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={en2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Set of base classifiers: LSTM, LR, RNN </p>
                      <p>b. Weighted aggregated voting</p>
                      <p>c. Similar performance as ensemble</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Drift detection</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={en3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Error rate monitoring</p>
                      <p>b. Temporal data monitoring</p>
                      <p>c. Degrades performance of system</p>
                      <p>d. Need methods to adapt new concepts</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>4. Drift Adaption with no retraining</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={en4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts not adapted </p>
                      <p>b. Drifts continue to be detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>5. Drift Adaption with retraining on past data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={en5}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts not adapted </p>
                      <p>b. Lesser drifts detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>6. Drift Adaption with retraining on recent data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={en6}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts adapted; past concepts forgotten </p>
                      <p>b. More drifts detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    7. Drift Adaption with retraining on past and recent data
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={en7}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New and past concepts adapted</p>
                      <p>b. Least drifts detected</p>
                      <p>c. Improved performance</p>
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
                <h3 class="heading">Ensemble Model</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock data analysis with Ensemble Model</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Set of base classifiers: LSTM, LR, RNN </p>
                      <p>b. Aggregated voting</p>
                      <p>c. Better results than individual models</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Stock data analysis with weighted Ensemble</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Set of base classifiers: LSTM, LR, RNN </p>
                      <p>b. Weighted aggregated voting</p>
                      <p>c. Similar performance as ensemble</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Drift detection</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Error rate monitoring</p>
                      <p>b. Temporal data monitoring</p>
                      <p>c. Degrades performance of system</p>
                      <p>d. Need methods to adapt new concepts</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>4. Drift Adaption with no retraining</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts not adapted </p>
                      <p>b. Drifts continue to be detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>5. Drift Adaption with retraining on past data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla5}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts not adapted </p>
                      <p>b. Lesser drifts detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>6. Drift Adaption with retraining on recent data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla6}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts adapted; past concepts forgotten </p>
                      <p>b. More drifts detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    7. Drift Adaption with retraining on past and recent data
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={tesla7}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New and past concepts adapted</p>
                      <p>b. Least drifts detected</p>
                      <p>c. Improved performance</p>
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
                <h3 class="heading">Ensemble Model</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock data analysis with Ensemble Model</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={disney1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Set of base classifiers: LSTM, LR, RNN </p>
                      <p>b. Aggregated voting</p>
                      <p>c. Better results than individual models</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Stock data analysis with weighted Ensemble</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={disney2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Set of base classifiers: LSTM, LR, RNN </p>
                      <p>b. Weighted aggregated voting</p>
                      <p>c. Similar performance as ensemble</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>

              <Row>
                <div class="exp">
                  <h5>3. Drift detection</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={disney3}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Error rate monitoring</p>
                      <p>b. Temporal data monitoring</p>
                      <p>c. Degrades performance of system</p>
                      <p>d. Need methods to adapt new concepts</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>4. Drift Adaption with no retraining</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={disney4}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts not adapted </p>
                      <p>b. Drifts continue to be detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>5. Drift Adaption with retraining on past data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={disney5}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts not adapted </p>
                      <p>b. Lesser drifts detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>6. Drift Adaption with retraining on recent data</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={disney6}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New concepts adapted; past concepts forgotten </p>
                      <p>b. More drifts detected</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>
                    7. Drift Adaption with retraining on past and recent data
                  </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={disney7}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. New and past concepts adapted</p>
                      <p>b. Least drifts detected</p>
                      <p>c. Improved performance</p>
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
