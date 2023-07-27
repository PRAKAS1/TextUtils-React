import { useState } from "react";

import Alert from "react-bootstrap/Alert";

import Button from "react-bootstrap/Button";
function AlertDismissible(props) {

  if (props.alert) {

    return (

      <Alert variant={props.alert.type}>

        <Alert.Heading>{props.alert.heading}</Alert.Heading>

        <p>{props.alert.msg}</p>

      </Alert>

    );

  }

}

 

export default AlertDismissible;