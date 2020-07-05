import React from "react";
import "./styles.css";

function CleanRating({ name, image, selected, onClick }) {
  return (
    <div className={`container-clean ${selected ? "selected" : ""}`} onClick={() => onClick(name)}>
      <img src={image} alt="Images" />
      <p>{name}</p>
    </div>
  );
}

export default CleanRating;
