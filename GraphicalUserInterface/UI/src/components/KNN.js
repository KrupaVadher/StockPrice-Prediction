import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import knn_apple_1 from "../Images/KNN_APP_1.png";
import knn_apple_2 from "../Images/KNN_APP_2.png";
import knn_amd_1 from "../Images/KNN_AMD_1.png";
import knn_amd_2 from "../Images/KNN_AMD_2.png";
import knn_tsla_1 from "../Images/KNN_TSLA_1.png";
import knn_tsla_2 from "../Images/KNN_TSLA_2.png";
import knn_dis_1 from "../Images/KNN_dis_1.png";
import knn_dis_2 from "../Images/KNN_dis_2.png";
export default class KNN extends Component {
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
                <h3 class="heading">K - Nearest Neighbors (KNN)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock prediction using KNN with k=20 </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={knn_apple_1}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. N-Neighbors: 20</p>
                      <p>d. Feature-set: Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Stock prediction using KNN with k=5</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={knn_apple_2}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. N-Neighbors: 5</p>
                      <p>d. Feature-set: Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
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
                <h3 class="heading">K - Nearest neighbors (KNN)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock prediction using KNN with k=20 </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={knn_amd_1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. N-Neighbors: 20</p>
                      <p>d. Feature-set: Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Stock prediction using KNN with k=5</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={knn_amd_2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. N-Neighbors: 5</p>
                      <p>d. Feature-set: Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
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
                <h3 class="heading">K - Nearest neighbors (KNN)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock prediction using KNN with k=20 </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={knn_tsla_1}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. N-Neighbors: 20</p>
                      <p>d. Feature-set: Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Stock prediction using KNN with k=5</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image
                      width="600px"
                      height="400px"
                      src={knn_tsla_2}
                    ></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. N-Neighbors: 5</p>
                      <p>d. Feature-set: Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
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
                <h3 class="heading">K - Nearest neighbors (KNN)</h3>
              </Row>
              <Row>
                <div class="exp">
                  <h5>1. Stock prediction using KNN with k=20 </h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={knn_dis_1}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. N-Neighbors: 20</p>
                      <p>d. Feature-set: Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
                    </div>
                  </Col>
                </Row>
              </div>
              <hr></hr>
              <Row>
                <div class="exp">
                  <h5>2. Stock prediction using KNN with k=5</h5>
                </div>
              </Row>
              <div style={{ marginBottom: "10px" }}>
                <Row>
                  <Col sm={7}>
                    <Image width="600px" height="400px" src={knn_dis_2}></Image>
                  </Col>
                  <Col>
                    <div style={{ textAlign: "left" }}>
                      <p>a. Train:Test Ratio: 80:20</p>
                      <p>b. Window Size: 60</p>
                      <p>c. N-Neighbors: 5</p>
                      <p>d. Feature-set: Close, Volume</p>
                      <p>e. Data Scaling: Before Train:Test split</p>
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
