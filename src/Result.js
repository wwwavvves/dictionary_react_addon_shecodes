import React from "react";
import Meaning from "./Meaning";
import Gallery from "./Gallery";
import "./Result.css";

export default function Result(props) {
  if (!props.result) {
    return null;
  } else {
    return (
      <div className="Result">
        <section className="result-word">
          <h2>{props.result.word}</h2>
          <h6>/{props.result.phonetic}/</h6>
        </section>

        <Meaning meaning={props.result.meanings} />
      </div>
    );
  }
}
