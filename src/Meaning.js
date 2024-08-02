import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      {props.meaning.map(function (meaning, index) {
        return (
          <div key={index}>
            <div className="part-of-speech">
              <strong>{meaning.partOfSpeech}</strong>
            </div>
            <div className="result-text result-definition">{meaning.definition}</div>
            <Example example={meaning.example} />
            <Synonyms synonyms={meaning.synonyms} />
          </div>
        );
      })}
    </div>
  );
}
