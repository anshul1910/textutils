import "./App.css";
import Navbar from "./Components/Navbar";
import Alert from "./Components/Alert";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#3f3f3f";
      showAlert("Dark Mode has been enabled", "success");
      // document.title = "TextUtils - Home - (Dark Mode)";
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      // document.title = "TextUtils - Home";
    }
  };

  return (
    <>
      <Router>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Alert alert={alert} />

        <div className="container">
          <Routes>
            <Route exact path="/about" element={<About mode={mode} />} />
            {/* <About /> */}

            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="TextUtils - Word Counter | Character Counter | Lowercase to Uppercase |
      Uppercase to Lowercase"
                  mode={mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
