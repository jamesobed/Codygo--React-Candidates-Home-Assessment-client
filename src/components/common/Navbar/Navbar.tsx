import React, { useState } from "react";
import { Link } from "react-router-dom";
import RoundLogo from "../../../assets/round.svg";
import Search from "../../search/Search";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Nav,
  LeftContent,
  RightContent,
  HamburgerContainer,
  ShowNavbar,
} from "./NavbarStyle";

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean | undefined>(
    false,
  );
  const handleSideBar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };
  return (
    <Nav className="navbar">
      <LeftContent>
        <Link className="link" to="/">
          <img src={RoundLogo} alt="" className="logo" />
        </Link>
      </LeftContent>
      <RightContent>
        <ul className="list_items">
          <li className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/about">
              about
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/contact">
              contact us
            </Link>
          </li>
          <li className="item">
            <Search placeholder="Search" className="link" />
          </li>
          <li className="item">
            <Link className="link" to="/register">
              add hotel
            </Link>
          </li>
        </ul>
      </RightContent>
      <HamburgerContainer onClick={handleSideBar}>
        <GiHamburgerMenu className="Hamburger" />
      </HamburgerContainer>

      <ShowNavbar className={isSidebarOpen ? "show_navbar" : undefined}>
        <ul className="list_items">
          <li className="item">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/about">
              about
            </Link>
          </li>
          <li className="item">
            <Link className="link" to="/contact">
              contact us
            </Link>
          </li>

          <li className="item">
            <Link className="link" to="/register">
              add hotel
            </Link>
          </li>
        </ul>
      </ShowNavbar>
    </Nav>
  );
};

export default Navbar;
