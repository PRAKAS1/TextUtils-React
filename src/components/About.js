import React, { useState } from "react";

import Button from "react-bootstrap/Button";

import Accordion from "react-bootstrap/Accordion";

 

export default function About() {

  const [customStyle, setcustomStyle] = useState({

    color: "white",

    backgroundColor: "black",

  });

  const [btnText, setbtnText] = useState("Enable Light Mode");

  const toggleStyleClick = () => {

    if (customStyle.color === "white") {

      setcustomStyle({

        color: "black",

        backgroundColor: "white",

      });

      setbtnText("Enable Dark Mode");

    } else {

      setcustomStyle({

        color: "white",

        backgroundColor: "black",

      });

      setbtnText("Enable Light Mode");

    }

  };

  return (

    <div className="container" style={customStyle}>

      <h1 className="my-3">About us</h1>

      <Accordion defaultActiveKey="0">

        <Accordion.Item eventKey="0" style={customStyle}>

          <Accordion.Header style={customStyle}>

            Accordion Item #1

          </Accordion.Header>

          <Accordion.Body>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim

            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut

            aliquip ex ea commodo consequat. Duis aute irure dolor in

            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla

            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in

            culpa qui officia deserunt mollit anim id est laborum.

          </Accordion.Body>

        </Accordion.Item>

        <Accordion.Item eventKey="1" style={customStyle}>

          <Accordion.Header>Accordion Item #2</Accordion.Header>

          <Accordion.Body>

            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do

            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim

            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut

            aliquip ex ea commodo consequat. Duis aute irure dolor in

            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla

            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in

            culpa qui officia deserunt mollit anim id est laborum.

          </Accordion.Body>

        </Accordion.Item>

      </Accordion>

      <div className="container my-3">

        <Button onClick={toggleStyleClick} variant="primary">

          {btnText}

        </Button>{" "}

      </div>

    </div>

  );

}