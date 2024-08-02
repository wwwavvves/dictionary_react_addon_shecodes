import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (!props.synonyms) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        <div className="synonyms-title">
          synonyms
        </div>
        <div>
          {props.synonyms.map(function (synonym, index) {
            return (
              <div key={index} className="result-text synonym-word">
                {synonym}{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
