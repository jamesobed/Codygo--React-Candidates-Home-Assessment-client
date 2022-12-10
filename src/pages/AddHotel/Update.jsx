/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import RoundLogo from "../../assets/round.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AiOutlineUser } from "react-icons/ai";
import { LoginStyles } from "../../components/addHotel/LoginStyles";
import swal from "sweetalert";
import Line from "../../assets/Line.svg";
import axios from "axios";
const Update = () => {
  const { id } = useParams();
  const hotelCity = localStorage.getItem("hotelCity");
  const hotelName = localStorage.getItem("hotelName");
  const hotelAddress = localStorage.getItem("hotelAddress");
  const hotelCountry = localStorage.getItem("hotelCountry");
  // eslint-disable-next-line
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [name, setName] = useState(hotelName);
  const [city, setCity] = useState(hotelCity);
  const [address, setAddress] = useState(hotelAddress);
  const [country, setCountry] = useState(hotelCountry);
  // eslint-disable-next-line
  let [loading, setLoading] = useState(false);
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleCity = (e) => {
    setCity(e.target.value);
  };
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  const details = {
    name,
    city,
    country,
    address,
  };
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);

    try {
      setLoading(true);
      // eslint-disable-next-line
      const response = await axios.patch(
        `http://localhost:5000/hotels/${id}`,
        details,
      );
      swal(
        `Hello!", "Your have successful updated the hotel with id ${id}`,
        "success",
      );
      navigate("/");
      setLoading(false);
    } catch (error) {
      swal("Hotel update failed", "check details", "error");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <LoginStyles>
      <div className="logo">
        {/* link back home */}
        <Link to="/">
          <img src={RoundLogo} className="logo-pic" alt="reward logo" />
        </Link>
      </div>

      <div className="login">
        <h3>Update Hotel Record</h3>
        <form onSubmit={handleSubmit}>
          <label id="label" htmlFor="">
            Name
          </label>
          <div className="fields">
            <AiOutlineUser className="icon" />
            <input
              value={name}
              onChange={handleName}
              type="text"
              placeholder="Type your full name"
            />
          </div>
          <label id="label" htmlFor="">
            City
          </label>
          <div className="fields">
            <AiOutlineUser className="icon" />
            <input
              value={city}
              onChange={handleCity}
              type="text"
              placeholder="Type your full name"
            />
          </div>
          <label id="label" htmlFor="">
            Country
          </label>
          <div className="fields">
            <AiOutlineUser className="icon" />
            <input
              value={country}
              onChange={handleCountry}
              type="text"
              placeholder="Type your full name"
            />
          </div>
          <label id="label" htmlFor="">
            Address
          </label>
          <div className="fields">
            <AiOutlineUser className="icon" />
            <input
              value={address}
              onChange={handleAddress}
              type="text"
              placeholder="Type your full name"
            />
          </div>

          <input id="login-btn" type="submit" value="Update Hotel" />
        </form>
        <div className="or">
          <img id="line" src={Line} alt="line" />

          <img id="line" src={Line} alt="line" />
        </div>
      </div>
    </LoginStyles>
  );
};

export default Update;
