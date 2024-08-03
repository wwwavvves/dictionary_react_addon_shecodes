import React from "react";
import "./Gallery.css";

export default function Gallery(props) {
  if (!props.photos) {
    return null;
  } else {
    console.log(props.photos);
    return (
      <div className="Gallery row">
        {props.photos.map(function (photo, index) {
          console.log({ photo });
          return (
            <div className="col-sm-4 p-1">
              <a href={photo.src.landscape} target="_blank" rel="noreferrer">
                <img
                  src={photo.src.landscape}
                  alt=""
                  key={index}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  }
}
