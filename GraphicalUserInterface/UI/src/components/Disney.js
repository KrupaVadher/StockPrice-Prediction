import React, { Component } from "react";
import {
  Col,
  Container,
  Row,
  Image,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import LeftNavBar from "./LeftNavBar";
import disney from "../Images/disLogo.png";
import "../CSS/components.css";
import CanvasJSReact from "../canvasjs.react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown, faArrowUp } from "@fortawesome/free-solid-svg-icons";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

export default class Disney extends Component {
  constructor(props) {
    super(props);
    this.state = {
      graphdata: [],
      trend: "Year",
      trendData: [],
      yString: "YYYY",
      today: null,
      yesterday: null,
    };
  }
  componentDidMount() {
    var data = [];
    var t_stock = null;
    var y_stock = null;
    axios
      .get(
        "http://ec2-3-21-41-120.us-east-2.compute.amazonaws.com:3001/disneydata"
      )
      .then((response) => {
        response.data.map((d) => {
          var today = new Date(2020, 10, 24);
          var yesterday = new Date(2020, 10, 23);
          var value = d.Close;
          var date = new Date(d.Date);
          if (
            today.getDate() === date.getDate() &&
            today.getMonth() === date.getMonth() &&
            today.getFullYear() === date.getFullYear()
          ) {
            console.log("here");
            t_stock = value;
          } else if (
            yesterday.getDate() === date.getDate() &&
            yesterday.getMonth() === date.getMonth() &&
            yesterday.getFullYear() === date.getFullYear()
          ) {
            y_stock = value;
          }
          var date = new Date(d.Date);
          var object = {
            x: date,
            y: value,
          };
          data.push(object);
          return null;
        });
        this.setState({
          graphdata: data,
          trendData: data,
          today: t_stock,
          yesterday: y_stock,
        });
      });
  }

  trendDropdown = (event) => {
    if (event.target.name !== "") {
      var trendData = [];
      var str = "";
      if (event.target.name === "Month") {
        trendData = this.state.graphdata.filter((data) => {
          var todayDate = new Date();
          todayDate.setFullYear(2020);
          todayDate.setMonth(10);
          todayDate.setDate(25);
          if (
            (todayDate.getTime() - data.x.getTime()) / (1000 * 60 * 60 * 24.0) <
            30
          ) {
            return data;
          }
        });

        str = "DD/MM";
      } else if (event.target.name === "Week") {
        trendData = this.state.graphdata.filter((data) => {
          var todayDate = new Date();
          todayDate.setFullYear(2020);
          todayDate.setMonth(10);
          todayDate.setDate(25);
          if (
            (todayDate.getTime() - data.x.getTime()) / (1000 * 60 * 60 * 24.0) <
            7
          ) {
            return data;
          }
        });
        str = "DD/MM";
      } else if (event.target.name === "Year") {
        trendData = this.state.graphdata.filter((data) => {
          var todayDate = new Date();
          todayDate.setFullYear(2020);
          todayDate.setMonth(10);
          todayDate.setDate(25);
          if (
            (todayDate.getTime() - data.x.getTime()) / (1000 * 60 * 60 * 24.0) <
            365
          ) {
            return data;
          }
        });
        str = "MMM";
      }
      this.setState({
        trend: event.target.name,
        trendData: trendData,
        yString: str,
      });
    }
  };
  render() {
    const options = {
      animationEnabled: true,
      width: 500,
      height: 250,
      theme: "dark2",
      title: {
        text: "",
      },
      axisY: {
        title: "Close price USD($)",
        logarithmic: true,
      },
      axisX: {
        title: "Date",
        valueFormatString: this.state.yString,
        interval: 1,
      },
      data: [
        {
          type: "spline",
          xValueFormatString: this.state.yString,
          dataPoints: this.state.trendData,
        },
      ],
    };
    return (
      <div>
        <Row>
          <Col className="col-sm-3">
            <LeftNavBar active={"Disney"}></LeftNavBar>
          </Col>
          <Col className="col-sm-9">
            <Container>
              <Row
                style={{
                  alignItems: "center",
                  justifyContent: "left",
                  padding: "10px",
                }}
              >
                <Image className="logoImage" src={disney}></Image>
                <h1
                  style={{
                    textAlign: "center",
                    paddingTop: "10px",
                    paddingLeft: "5px",
                  }}
                >
                  Disney
                </h1>
              </Row>
              <Row>
                <Col>
                  <Row
                    style={{
                      alignItems: "center",
                      justifyItems: "right",
                      padding: "10px",
                    }}
                  >
                    <Col className="col-sm-3">
                      <h6>Stock Trend</h6>
                    </Col>
                    <Col className="col-sm-1">
                      <DropdownButton
                        id="dropdown-basic-button"
                        title={this.state.trend}
                        onClick={this.trendDropdown}
                      >
                        <Dropdown.Item name="Year">Year</Dropdown.Item>
                        <Dropdown.Item name="Month">Month</Dropdown.Item>
                        <Dropdown.Item name="Week">Week</Dropdown.Item>
                      </DropdownButton>
                    </Col>
                  </Row>
                  <CanvasJSChart
                    options={options}
                    style={{ height: "200px", width: "200px" }}
                  />
                </Col>
                <Col style={{ padding: "20px", marginLeft: "40px" }}>
                  <Row
                    style={{ alignItems: "center", justifyContent: "center" }}
                  >
                    <h6>Stock Close Price</h6>
                  </Row>
                  <hr></hr>
                  <Row>
                    <Col>
                      <b style={{ float: "right" }}>Yesterday:</b>
                    </Col>
                    <Col>
                      {this.state.yesterday
                        ? Math.round(this.state.yesterday * 100) / 100
                        : ""}{" "}
                      $
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <b style={{ float: "right" }}>Today:</b>
                    </Col>
                    <Col>
                      {this.state.today
                        ? Math.round(this.state.today * 100) / 100
                        : ""}{" "}
                      $
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <b style={{ float: "right" }}>Tomorrow(predicted):</b>
                    </Col>
                    <Col>
                      148.82 $
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        color="red"
                        style={{ marginLeft: "4px" }}
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <div style={{ padding: "10px", paddingTop: "30px" }}>
                  <h4>News Related to Disney</h4>
                </div>
              </Row>
              <Row>
                <p style={{ paddingLeft: "10px" }}>
                  <b>
                    <a
                      href="https://finance.yahoo.com/m/80749fa2-0438-3093-900b-c156301b23ea/disney-considers-moving.html"
                      target="_blank"
                    >
                      1.Disney Considers Moving Releases to Disney+ Instead of
                      Theaters
                    </a>
                  </b>
                </p>
              </Row>
              <Row>
                <p style={{ paddingLeft: "10px" }}>
                  <b>
                    <a
                      href="https://finance.yahoo.com/m/9af57905-b880-3816-af6a-81712287a488/disney-world-bringing-back.html"
                      target="_blank"
                    >
                      2.Disney World Bringing Back Park Hoppers Is Bigger Than
                      You Think
                    </a>
                  </b>
                </p>
              </Row>
              <Row>
                <p style={{ paddingLeft: "10px" }}>
                  <b>
                    <a
                      href="https://finance.yahoo.com/m/2cc35812-a8eb-321b-9a2b-ab6011a5c57e/disney-might-send-3-major.html"
                      target="_blank"
                    >
                      3.Disney Might Send 3 Major Films Direct to Streaming, a
                      Report Says
                    </a>
                  </b>
                </p>
              </Row>
            </Container>
          </Col>
        </Row>
      </div>
    );
  }
}
