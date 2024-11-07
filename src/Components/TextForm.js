import React, { useState } from "react";

export default function TextForm(props) {
  //Sentence Case Function
  function toSentenceCase(str) {
    if (!str || typeof str !== "string") {
      return "";
    }
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  //Capitalized Case function
  function toCapitalizedCase(str) {
    if (!str || typeof str !== "string") {
      return "";
    }
    return str
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      })
      .join(" ");
  }

  //Event handler --> Sentence Click
  const handleSenClick = () => {
    let newText = toSentenceCase(text);
    setText(newText);
    props.showAlert("Converted to Sentence Case", "success");
  };

  //Event handler --> Capitalized Click
  const handleCapClick = () => {
    let newText = toCapitalizedCase(text);
    setText(newText);
    props.showAlert("Converted to Capitalized Case", "success");
  };

  //Event handler --> UpperCase Click
  const handleUpClick = () => {
    // console.log("Uppercase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  //Event handler --> LowerCase Click
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  //Event handler --> Copy Click
  const handleCopy = () => {
    let text = document.getElementById("mybox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard", "success");
  };

  //Event handler --> Clear Click
  const handleClearClick = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Cleared Text", "success");
  };

  //Event handler --> OnChange
  const handleOnChange = (event) => {
    console.log("OnChange was clicked");
    setText(event.target.value);
  };
  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container my-2"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2 className="mb-3">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#575757" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
            onChange={handleOnChange}
            id="mybox"
            rows="3"
            placeholder="Enter your text here"
          ></textarea>
        </div>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleSenClick}
        >
          Convert to Sentence Case
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCapClick}
        >
          Convert to Capitalized Case
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleUpClick}
        >
          Convert to Uppercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleLoClick}
        >
          Convert to Lowercase
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleCopy}
        >
          Copy Text
        </button>

        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-1 my-1"
          onClick={handleClearClick}
        >
          Clear Text
        </button>
      </div>

      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          Your sentence has{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "Nothing to Preview!!"}</p>
      </div>
    </>
  );
}
