import React from "react";

export default function Result(props) {
  if (!props.result) {
    return null;
  } else {
    console.log(props.result);
    return (
      <div className="Result">
        <h2>{props.result.word}</h2>
        <h5>{props.result.phonetic}</h5>
        {props.result.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <p>
                <strong>{meaning.partOfSpeech}</strong> <br />
                {meaning.definition}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}
