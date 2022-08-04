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
      mb-5
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
            <NavDropdown className="properties " title="Vehicle Insurance" id="basic-nav-dropdown"  >
        
        <NavDropdown.Item  className="my-2 " style={{ fontWeight:"bold", fontSize:"20px" ,color: "#d8810f" }}>
        <Link to ="/car" className="text-decoration-none properties ">
          Car Insurance
          </Link>
          </NavDropdown.Item>

       
        <NavDropdown.Item href="#action/3.2" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
        <Link to ="/bike" className="text-decoration-none properties">
          Bike Insurance
          </Link>
          </NavDropdown.Item>

       
        <NavDropdown.Item href="#emergency" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
        <Link to ="/van" className="text-decoration-none properties">
          Van Insurance
          </Link>
          </NavDropdown.Item>
      
        <NavDropdown.Item href="#action/3.3" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
        <Link to ="/food" className="text-decoration-none properties">
          Hot Food
          </Link>
          </NavDropdown.Item>
        
        <NavDropdown.Item href="#action/3.4" className="my-2 " style={{ fontWeight:"bold", fontSize:"20px"}}>
        <Link to ="/others" className="text-decoration-none properties">
          Others
          </Link>
          </NavDropdown.Item>
      </NavDropdown>

      <Nav.Link href="#home" className="properties  ">
              <Link
                to="/about"
                className="text-decoration-none properties"
           
              >
        About US
              </Link>
            </Nav.Link>
            <Nav.Link href="#home" className="properties  ">
              <Link
                to="/Contact"
                className="text-decoration-none properties"
             
              >
                      Contact
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
