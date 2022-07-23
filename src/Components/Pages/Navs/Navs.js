import React from "react";
// import Colors from '../Color.js'
import "./Navs.css";
import logo from "../../../images/logoss.png";
import {
  Button,
  Container,
  Navbar,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Stack,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Colors } from "../Color";

const Navs = () => {
  return (
    <Navbar
      className="bar"
      expand="lg"
      sticky="top"
      style={{ backgroundColor: "#eef2ff" }}
    >
      <Container>
        <Navbar.Brand href="#home">
          <img className="logo" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ms-auto my-3 links ">
            <Nav.Link href="#home" className="properties text-white ">
              <Link
                to="/"
                className="text-decoration-none properties"
                style={{ color: "#d8810f" }}
              >
                Home
              </Link>
            </Nav.Link>

            <Nav.Link href="#link" className="properties  text-decoration-none">
              <Link to="/contact" className="text-decoration-none properties">
                Car Insurance
              </Link>
            </Nav.Link>

            <Nav.Link href="#home" className="  ">
              <Link to="/contact" className="text-decoration-none properties">
                Van Insurance
              </Link>
            </Nav.Link>

            <Nav.Link href="#home" className="  ">
              <Link to="/contact" className="text-decoration-none properties">
                Bike Insurance
              </Link>
            </Nav.Link>
            <Nav.Link href="#home" className="  ">
              <Link to="/contact" className="text-decoration-none properties">
                Hot Food
              </Link>
            </Nav.Link>

            <Nav.Link href="#home" className="  ">
              <Link to="/contact" className="text-decoration-none properties">
                Temporary Insurance
              </Link>
            </Nav.Link>
          </Nav>
          {/* <Form className="d-flex ms-auto">
         <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
          
        <Button variant="outline-success">Search</Button>
      </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navs;
