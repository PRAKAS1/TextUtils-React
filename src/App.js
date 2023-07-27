
import About from "./components/About";

import CustomNavbar from "./components/CustomNavbar";

import AlertDismissible from "./components/AlertDismissible";

import TextForm from "./components/TextForm";

import React, { useState } from "react";

import {

  BrowserRouter as Router,

  Routes,

  Route,

  Link,

  useRouteMatch,

  useParams,

} from "react-router-dom";

 

function App() {

  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

 

  const showAlert = (heading, message, type) => {

    setAlert({

      heading: heading,

      msg: message,

      type: type,

    });

  };

  setTimeout(() => {

    setAlert(null);

  }, 3000);

 

  const toggleMode = () => {

    if (mode === "dark") {

      setMode("light");

      showAlert("Light mode has been enabled", "success");

      document.body.style.backgroundColor = "#fff";

    } else {

      setMode("dark");

      showAlert("Dark mode has been enabled", "danger");

      document.body.style.backgroundColor = "gray";

    }

  };

  return (

    <>

      <Router>

        <CustomNavbar mode={mode} title="TextUtils" toggleMode={toggleMode} />

        <AlertDismissible alert={alert} />

        <Routes>

          <Route exact path="/about" element={<About />} />

          <Route

            exact

            path="/"

            element={

              <div className="container my-3">

                <TextForm

                  showAlert={showAlert}

                  mode={mode}

                  header="Enter the Text to Analyze below"

                />

              </div>

            }

          />

        </Routes>

      </Router>

    </>

  );

}
export default App;