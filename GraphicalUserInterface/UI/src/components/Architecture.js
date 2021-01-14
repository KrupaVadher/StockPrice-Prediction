import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import image from "../Images/Updated_System _Architecture.jpg";

export default class Architecture extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h3 class="heading">System Architecture</h3>
          </Row>

          <div style={{ marginTop: "20px" }}>
            <Row>
              <Col sm={7}>
                <Image
                  width="600px"
                  height="400px"
                  style={{ border: "1px solid #0055a2", padding: "5px" }}
                  src={image}
                ></Image>
              </Col>
              <Col>
                <div style={{ textAlign: "left" }}>
                  <p>Stock prediction model is divided into three modules: ​</p>
                  <p>
                    <b>1. Time series stock data processing</b>
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    a. Collecting data from Yahoo Finance
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    b. Filtering and Normalizing data
                  </p>

                  <p>
                    <b>2. News Data Processing</b>​
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    a. Collecting News data from Thomson Reuters
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    b. Computing Semantic Scores
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    c. Generating vectors using Word2Vec
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    d. Dimensionality Reduction using Sparse Auto-Encoders
                  </p>
                  <p>
                    <b>
                      3. Stock prediction, drift detection and drift adaption.
                    </b>
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    a. Combining News Data Semantic score and Vectors with Stock
                    Data
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    b. RNN, LSTM, LR, ARIMA, KNN, Seq2Seq Model experiments
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    c. Ensemble Model experiments
                  </p>
                  <p style={{ paddingLeft: "20px" }}>
                    {" "}
                    d. Detecting and adapting the drifts in the data
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    );
  }
}
