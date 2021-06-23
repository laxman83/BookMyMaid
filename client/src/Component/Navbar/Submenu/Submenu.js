import React from "react";
import { NavDropdown } from "react-bootstrap";
import "./submenu.css";
class Submenu extends React.Component {
  render() {
    return (
      <NavDropdown title="Services">
        <NavDropdown.Item href="/Cleaning">Cleaning</NavDropdown.Item>
        <NavDropdown.Item href="/Cooking">Cooking</NavDropdown.Item>
        <NavDropdown.Item href="/BabyCare">Baby sitting</NavDropdown.Item>
        <NavDropdown.Item href="/ElderCare">Elder Care</NavDropdown.Item>
        <NavDropdown.Item href="/WardBoy">Ward Boy</NavDropdown.Item>
      </NavDropdown>
    );
  }
}

export default Submenu;
