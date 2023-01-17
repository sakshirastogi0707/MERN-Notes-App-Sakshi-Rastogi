import React from "react";
import "./style.css";
export default function Button(props) {
  return (
    <div className="buttonContainner">
      <button className="button" onClick={props.onClick}>
        {props.title}
      </button>
    </div>
  );
}
