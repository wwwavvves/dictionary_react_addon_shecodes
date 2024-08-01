import React from "react";

export default function Synonyms(props) {
  if (!props.synonyms) {
    return null;
  } else {
    return (
      <div className="Synonyms">
        <strong>Synonyms: </strong>
        {props.synonyms.map(function (synonym, index) {
          return (
              <span key={index}>{synonym} </span>
          );
        })}
      </div>
    );
  }
}
