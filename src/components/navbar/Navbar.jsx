import React from "react";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import styled from "./navbar.module.css";
const Navbar = () => {
  return (
    <header className={styled.header}>
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
          <AiOutlineSearch />
        </li>
        <li>
          <AiOutlineUser />
        </li>
        <li>
          <AiOutlineMenu />
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
