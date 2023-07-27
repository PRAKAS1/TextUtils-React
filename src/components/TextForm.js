import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";

import React, { useState } from "react";

 

function TextForm(props) {

  const handleUpClick = () => {

    let newText = text.toUpperCase();

    setText(newText);

    props.showAlert("Convert to Uppercase", "", "success");

  };

  const handleLowerClick = () => {

    let newText = text.toLocaleLowerCase();

    setText(newText);

    props.showAlert("Convert to Lowercase", "", "success");

  };

  const handleResetClick = () => {

    setText("");

    props.showAlert("Clear Text", "", "success");

  };

 

  const handleOnChange = (event) => {

    setText(event.target.value);

  };

 

  const handleCopy = () => {

    var text = document.getElementById("myBox");

    text.select();

    navigator.clipboard.writeText(text.value);

    props.showAlert("Copy Text", "", "success");

  };

 

  const handleExtraSpaces = () => {

    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));

    props.showAlert("Remove Extra Spaces", "", "success");

  };

 

  const [text, setText] = useState("Enter text here");

 

  return (

    <>

      <div

        className="container"

        style={{ color: props.mode === "dark" ? "white" : "black" }}

      >

        <Form>

          <Form.Group className="mb-3">

            <Form.Label htmlFor="myBox">

              <h1>{props.header}</h1>

            </Form.Label>

            <Form.Control

              style={{

                caretColor: props.mode === "dark" ? "white" : "black",

                color: props.mode === "dark" ? "white" : "black",

                backgroundColor: props.mode === "dark" ? "gray" : "white",

              }}

              onChange={handleOnChange}

              id="myBox"

              value={text}

              as="textarea"

              rows={8}

            />

          </Form.Group>

          <Button className="mb-3" onClick={handleUpClick} variant="primary">

            Convert to Uppercase

          </Button>{" "}

          <Button className="mb-3" onClick={handleLowerClick} variant="primary">

            Convert to Lowercase

          </Button>{" "}

          <Button className="mb-3" onClick={handleCopy} variant="primary">

            Copy Text

          </Button>{" "}

          <Button

            className="mb-3"

            onClick={handleExtraSpaces}

            variant="primary"

          >

            Remove Extra Spaces

          </Button>{" "}

          <Button className="mb-3" onClick={handleResetClick} variant="primary">

            Clear Text

          </Button>{" "}

        </Form>

      </div>

      <div

        className="container"

        style={{ color: props.mode === "light" ? "black" : "white" }}

      >

        <h1> Your text summary</h1>

        <p>

          {text.length === 0 ? 0 : text.split(" ").length} Word and{" "}

          {text.length} Characters

        </p>

        <p>

          {text.length === 0 ? 0 : 0.008 * text.split(" ").length} Minutes read{" "}

        </p>

        <h1>Preview</h1>

        <p>{text}</p>

      </div>

    </>

  );

}

 

export default TextForm;