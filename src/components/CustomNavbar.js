import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";

import Navbar from "react-bootstrap/Navbar";

import PropTypes from "prop-types";

import { Form, FormControl, Button } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

 

export default function CustomNavbar(props) {

  return (

    <Navbar

      expand="lg"

      className="bg-body-tertiary"

      bg={props.mode}

      data-bs-theme={props.mode}

    >

      <Container>

        <Navbar.Brand as={Link} to="/">

          {props.title}

        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">

              Home

            </Nav.Link>

            <Nav.Link as={Link} to="/about">

              About

            </Nav.Link>

          </Nav>

          {/* <Form inline>

            <FormControl type="text" placeholder="Search" className="mr-sm-2" />

            <Button variant="outline-success">Search</Button>

          </Form> */}

        </Navbar.Collapse>

      </Container>

 

      <div className="container">

        <Form>

          <Form.Check // prettier-ignore

            type="switch"

            style={{ color: props.mode === "light" ? "black" : "white" }}

            onClick={props.toggleMode}

            id="custom-switch"

            label={

              props.mode === "light" ? "Enable DarkMode" : "Disable DarkMode"

            }

          />{" "}

        </Form>

      </div>

    </Navbar>

  );

}

 

CustomNavbar.prototype = {

  title: PropTypes.string.isRequired,

};

 

// CustomNavbar.defaultProps = {

//   title: "Test",

// };