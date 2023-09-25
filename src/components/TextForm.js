import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{
          background: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            type="text"
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              background: props.mode === "dark" ? "#042743" : "white",
              color: props.mode === "light" ? "#042743" : "white",
            }}
          />
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to upcase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowcase
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          background: props.mode === "dark" ? "#042743" : "white",
          color: props.mode === "light" ? "#042743" : "white",
        }}
      >
        <h1>Text summary</h1>
        <p>
          {text.split(" ").length} words and {text.length} characters.
        </p>
        <p>{text.split(" ").length * 0.008} minutes read.</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
