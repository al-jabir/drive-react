import React, { useState } from "react";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineUser,
} from "react-icons/ai";
import Logo from "../../Images/logo.png";
import styled from "./navbar.module.css";
const Navbar = () => {
  const [bar, setBar] = useState(false);
  return (
    <header className={styled.header}>
      <img src={Logo} alt="/" />
      <nav>
        <ul
          className={
            bar ? [styled.menu, styled.active].join(" ") : [styled.menu]
          }
        >
          <li>
            <a href="/#">Learn More</a>
          </li>
          <li>
            <a href="/#">Log in</a>
          </li>
          <li>
            <a href="/#">Sign up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{ marginTop: "6px" }} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{ marginTop: "6px" }} />
          </li>
        </ul>
      </nav>
      <div className={styled.btn_mobile} onClick={() => setBar(!bar)}>
        {bar ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </header>
  );
};

export default Navbar;
