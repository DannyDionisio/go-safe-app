import React from "react";
import "./styles.css";

function Occupation({ name, image, selected, onClick }) {
  return (
    <div className={`container-occupation ${selected ? "selected" : ""}`} onClick={() => onClick(name)}>
      <img src={image} alt="Images" />
      <p>{name}</p>
    </div>
  );
}

export default Occupation;
