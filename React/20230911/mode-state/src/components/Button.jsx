import React from "react";
import "../css/Button.css";

export default function Button(props) {
  const handleClickButton = () => {
    props.setCurrentMood(props.mood);
  };

  return (
    <li>
      <button className="mood-btn" onClick={handleClickButton}>
        기분이 : {props.mood}
      </button>
    </li>
  );
}
