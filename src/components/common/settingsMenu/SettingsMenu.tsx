import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { VscAccount } from "react-icons/vsc";
import { IoIosHelpCircleOutline, IoMdLogOut } from "react-icons/io";
import { AiOutlineSetting } from "react-icons/ai";
import "./SettingsMenu.css";

const SettingsMenu = () => {
  const navigate = useNavigate();
  function logout1() {
    localStorage.clear();
    navigate("/login");
  }
  return (
    <div className="settingsMenu">
      <ul className="list-items">
        <Link to="/dashboard/account/profile">
          <li className="item">
            <VscAccount />
            <span className="text">Account</span>
          </li>
        </Link>
        <Link to="/update-teacher-profile">
          <li className="item">
            <AiOutlineSetting />
            <span className="text">Settings</span>
          </li>
        </Link>
        <Link to={""}>
          <li className="item">
            <IoIosHelpCircleOutline />
            <span className="text">Help Centre</span>
          </li>
        </Link>

        <li onClick={logout1} className="item">
          <IoMdLogOut />
          <span className="text">Logout</span>
        </li>
      </ul>
    </div>
  );
};

export default SettingsMenu;
