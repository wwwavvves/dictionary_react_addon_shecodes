import React from "react";
import "./Example.css"

export default function Example(props) {
  if (!props.example) {
    return null;
  } else {
    return (
      <div className="Example">
        <div className="result-text result-example">{props.example}</div>
      </div>
    );
  }
}
