import React, { useEffect, useState, CSSProperties } from "react";
import { Link, useNavigate } from "react-router-dom";
import RoundLogo from "../../assets/round.svg";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AiOutlineUser, AiOutlineMail } from "react-icons/ai";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { HiOutlineKey } from "react-icons/hi";
import { LoginStyles } from "../../components/addHotel/LoginStyles";
import swal from "sweetalert";
import Line from "../../assets/Line.svg";
import axios from "axios";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import PropagateLoader from "react-spinners/PropagateLoader";
const AddHotel: React.FC = (): JSX.Element => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [loading, setLoading] = useState(false);
  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const handleCity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCity(e.target.value);
  };
  const handleAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAddress(e.target.value);
  };
  const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };
  const details = {
    name,
    city,
    country,
    address,
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(details);

    try {
      setLoading(true);
      const response = await axios.post(
        "http://localhost:5000/hotels/",
        details,
      );
      console.log(response);
      swal("Hello!", "Your have successful added hotel", "success");
      navigate("/");
      setLoading(false);
    } catch (error: any) {
      swal("Hotel creation failed", "check details", "error");
      console.log(error);
      setLoading(false);
    }
  };
  useEffect(() => {
    // handleGoogleLogin();
  }, []);
  return (
    <LoginStyles>
      <div className="logo">
        {/* link back home */}
        <Link to="/">
          <img src={RoundLogo} className="logo-pic" alt="reward logo" />
        </Link>
      </div>

      <div className="login">
        <h3>Add Hotel</h3>
        <form onSubmit={handleSubmit}>
          <label id="label" htmlFor="">
            Name
          </label>
          <div className="fields">
            <AiOutlineUser className="icon" />
            <input
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
              onChange={handleAddress}
              type="text"
              placeholder="Type your full name"
            />
          </div>

          <input id="login-btn" type="submit" value="Add Hotel" />
        </form>
        <div className="or">
          <img id="line" src={Line} alt="line" />

          <img id="line" src={Line} alt="line" />
        </div>
      </div>
    </LoginStyles>
  );
};

export default AddHotel;
