import React from "react";
import img_hero from "../../Images/drive.png";
import styled from "./drivier.module.css";
const Driver = () => {
  return (
    <div className={styled.driver}>
      <div className={styled.left}>
        <img src={img_hero} alt="/" />
      </div>
      <div>
        <h2>
          Find the perfect car <span>to try before you buy</span>
        </h2>
        <p>
          Make sure your future wheels work well with your lifestyle by taking
          your time in the driver's seat.
        </p>
        <button>Browse Cars</button>
      </div>
    </div>
  );
};

export default Driver;
