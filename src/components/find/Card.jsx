import React from "react";
import styled from "./Find.module.css";

const Card = ({ image, brand }) => {
  return (
    <div className={styled.card}>
      <img src={image} alt="/" />
      <p>{brand}</p>
    </div>
  );
};

export default Card;
