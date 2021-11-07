import { useState } from "react";
import "./radioButton.css";

const RadioButton = ({ setColor }) => {
  const handleChange = (e) => {
    setColor(e.target.value);
  };
  return (
    <form className="radio-buttons">
      <label className="container">
        <input
          type="radio"
          name="radio"
          value="#f06292"
          onChange={handleChange}
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "#f06292" }}
        ></span>
      </label>
      <label className="container">
        <input
          type="radio"
          name="radio"
          value="#ba68c8"
          onChange={handleChange}
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "#ba68c8" }}
        ></span>
      </label>
      <label className="container">
        <input
          type="radio"
          name="radio"
          value="#ffd54f"
          onChange={handleChange}
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "#ffd54f" }}
        ></span>
      </label>
      <label className="container">
        <input
          type="radio"
          name="radio"
          value="#4fc3f7"
          onChange={handleChange}
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "#4fc3f7" }}
        ></span>
      </label>
      <label className="container">
        <input
          type="radio"
          name="radio"
          value="#aed581"
          onChange={handleChange}
        />
        <span
          className="checkmark"
          style={{ backgroundColor: "#aed581" }}
        ></span>
      </label>
    </form>
  );
};

export default RadioButton;
