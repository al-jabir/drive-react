import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import styled from "./hero.module.css";

const Hero = () => {
  return (
    <div className={styled.hero}>
      <form>
        <div className={styled.text}>
          <label>Where</label>
          <input
            className={styled.text_input}
            type="text"
            placeholder="search locations"
          />
        </div>

        <div className={styled.from}>
          <span className={styled.border}></span>
          <label>From</label>
          <input type="date" />
        </div>

        <div className={styled.until}>
          <span className={styled.border}></span>
          <label>Until</label>
          <input type="date" />
        </div>

        <div className={styled.search_btn}>
          <button className={styled.btn}>Search for cars</button>
          <AiOutlineSearch size={30} className={styled.icons} />
        </div>
      </form>
    </div>
  );
};

export default Hero;
