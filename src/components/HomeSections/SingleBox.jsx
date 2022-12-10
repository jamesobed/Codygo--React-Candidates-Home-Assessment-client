import React from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

import { Each } from "./HomeSectionStyle";
import icon1 from "../../assets/up-right-arrow.png";
import icon2 from "../../assets/fund-wallet-icon.png";
import icon3 from "../../assets/airplane-arrow.png";
import RoundLogo from "../../assets/round.svg";

import axios from "axios";

const SingleBox = ({ id, name, city, country, address }) => {
  const navigate = useNavigate();
  const btnClick = () => {
    // save item details in localstorage
    localStorage.setItem("hotelId", id);
    localStorage.setItem("hotelName", name);
    localStorage.setItem("hotelCity", city);
    localStorage.setItem("hotelCountry", country);
    localStorage.setItem("hotelAddress", address);
    // set timeout three seconds then navigate
    navigate(`/update/${id}`);
  };
  const deleteHotel = () => {
    axios
      .delete(`http://localhost:5000/hotels/${id}`)
      .then((res) => {
        swal(
          `Hello!", "Your have successful deleted the hotel with id ${id}`,
          "success",
        );
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addHotel = () => {
    navigate(`/addbrand/${id}`);
  };
  return (
    <Each>
      <h4 className="instruction">Name: {name}</h4>
      <br />
      <p className="context">
        City: <b>{city}</b>
      </p>
      <br />
      <p className="context">
        Country: <b>{country}</b>
      </p>
      <br />
      <p className="context">Address: {address}</p>
      <br />
      <div className="iconBtn">
        <img
          onClick={btnClick}
          src={icon2}
          className="icon"
          alt="steps_icon"
          title="edit hotel"
        />
        <img
          onClick={deleteHotel}
          src={icon1}
          className="icon"
          alt="steps_icon"
          title="delete hotel"
        />
        <img
          src={icon3}
          className="icon"
          alt="steps_icon"
          title="view hotel address"
        />
        <img
          onClick={addHotel}
          src={RoundLogo}
          className="icon"
          alt="steps_icon"
          title="add hotel brand"
        />
      </div>
    </Each>
  );
};

export default SingleBox;
