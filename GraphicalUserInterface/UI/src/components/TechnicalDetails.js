import React, { Component } from "react";
import { Col, Container, Image, Nav, Row, Tab, Tabs } from "react-bootstrap";
import "../CSS/technicalDetails.css";
import Ensemble from "./Ensemble";
import LinearRegression from "./LinearRegression";
import LSTM from "./LSTM";
import RNN from "./RNN";
import KNN from "./KNN";
import ARIMA from "./ARIMA";
import Seq from "./Seq";
import SVM from "./SVM";
import Architecture from "./Architecture";

export default class TechnicalDetails extends Component {
  render() {
    return (
      <div>
        <Tab.Container id="left-tabs-example" defaultActiveKey="arc">
          <Row>
            <Col sm={2} class="left_tab">
              <div style={{ position: "fixed", top: "67px", bottom: "0px" }}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item id="td">
                    <Nav.Link eventKey="arc">Architecure</Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item id="td">
                    <Nav.Link eventKey="RNN">RNN</Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item id="td">
                    <Nav.Link eventKey="SVM">SVM</Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item id="td">
                    <Nav.Link eventKey="LinearRegression">
                      Linear Regression
                    </Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item id="td">
                    <Nav.Link eventKey="KNN">KNN</Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item id="td">
                    <Nav.Link eventKey="ARIMA">ARIMA</Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item id="td">
                    <Nav.Link eventKey="seq">Seq to Seq</Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item id="td">
                    <Nav.Link eventKey="LSTM">LSTM</Nav.Link>
                  </Nav.Item>
                  <hr />
                  <Nav.Item id="td">
                    <Nav.Link eventKey="Ensemble">Ensemble</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
            </Col>
            <Col sm={10} style={{ padding: "10px" }}>
              <Tab.Content>
                <Tab.Pane eventKey="Ensemble">
                  <Ensemble></Ensemble>
                </Tab.Pane>
                <Tab.Pane eventKey="LSTM">
                  <LSTM></LSTM>
                </Tab.Pane>
                <Tab.Pane eventKey="LinearRegression">
                  <LinearRegression></LinearRegression>
                </Tab.Pane>
                <Tab.Pane eventKey="RNN">
                  <RNN></RNN>
                </Tab.Pane>
                <Tab.Pane eventKey="KNN">
                  <KNN></KNN>
                </Tab.Pane>
                <Tab.Pane eventKey="ARIMA">
                  <ARIMA></ARIMA>
                </Tab.Pane>
                <Tab.Pane eventKey="seq">
                  <Seq></Seq>
                </Tab.Pane>
                <Tab.Pane eventKey="SVM">
                  <SVM></SVM>
                </Tab.Pane>
                <Tab.Pane eventKey="arc">
                  <Architecture></Architecture>
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>
      </div>
    );
  }
}
