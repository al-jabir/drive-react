import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Logo from "../../Images/logo.png";
import styled from "./navbar.module.css";
const Navbar = () => {
  return (
    <header className={styled.header}>
      <img src={Logo} alt="/" />
      <nav>
        <ul className={styled.menu}>
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
      <div className={styled.btn_mobile}>
        <AiOutlineMenu />
      </div>
    </header>
  );
};

export default Navbar;
