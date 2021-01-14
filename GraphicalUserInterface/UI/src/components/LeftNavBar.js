import React, { Component } from "react";
import { Nav, Image } from "react-bootstrap";
import apple from "../Images/Apple.png";
import amd from "../Images/amd.png";
import disney from "../Images/disney.png";
import tesla from "../Images/tesla.jpg";
import "../CSS/leftNav.css";

export default class LeftNavBar extends Component {
  render() {
    return (
      <div className="leftNav">
        <Nav className="navItems">
          {this.props.active === "Apple" ? (
            <Nav.Item className="row navItem active" name="Apple">
              <Image src={apple} className="logo" roundedCircle></Image>
              <Nav.Link href="/">Apple</Nav.Link>
            </Nav.Item>
          ) : (
            <Nav.Item className="row navItem" name="Apple">
              <Image src={apple} className="logo" roundedCircle></Image>
              <Nav.Link href="/">Apple</Nav.Link>
            </Nav.Item>
          )}

          {this.props.active === "AMD" ? (
            <Nav.Item className="row navItem active" name="AMD">
              <Image src={amd} className="logo" roundedCircle></Image>
              <Nav.Link href="/amd">AMD</Nav.Link>
            </Nav.Item>
          ) : (
            <Nav.Item className="row navItem" name="AMD">
              <Image src={amd} className="logo" roundedCircle></Image>
              <Nav.Link href="/amd">AMD</Nav.Link>
            </Nav.Item>
          )}

          {this.props.active === "Disney" ? (
            <Nav.Item className="row navItem active" name="Disney">
              <Image src={disney} className="logo" roundedCircle></Image>
              <Nav.Link href="/disney">Disney</Nav.Link>
            </Nav.Item>
          ) : (
            <Nav.Item className="row navItem" name="Disney">
              <Image src={disney} className="logo" roundedCircle></Image>
              <Nav.Link href="/disney">Disney</Nav.Link>
            </Nav.Item>
          )}

          {this.props.active === "Tesla" ? (
            <Nav.Item className="row navItem active" name="Tesla">
              <Image src={tesla} className="logo" roundedCircle></Image>
              <Nav.Link href="/tesla">Tesla</Nav.Link>
            </Nav.Item>
          ) : (
            <Nav.Item className="row navItem" name="Tesla">
              <Image src={tesla} className="logo" roundedCircle></Image>
              <Nav.Link href="/tesla">Tesla</Nav.Link>
            </Nav.Item>
          )}
        </Nav>
      </div>
    );
  }
}
