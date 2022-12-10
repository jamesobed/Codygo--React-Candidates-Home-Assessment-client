import React, { useEffect, useState, CSSProperties } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
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
const AddHotelBrand: React.FC = (): JSX.Element => {
  const { id } = useParams();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  const [name, setName] = useState("None");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let [loading, setLoading] = useState(false);
  const details = {
    name,
    hotelID: id,
  };
  const navigate = useNavigate();

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log(details);

    try {
      setLoading(true);
      const response = await axios.post("http://localhost:5000/brand", details);
      console.log(response);
      swal("Hello!", "Your have successful added hotel brand", "success");
      navigate("/");
      setLoading(false);
    } catch (error: any) {
      swal("Hotel brand creation failed", "check details", "error");
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
        <h3>Add Hotel Brand</h3>
        <form onSubmit={handleSubmit}>
          {/* create a select for name with five options */}
          <select
            className="selection"
            name="category"
            id="category"
            onChange={(e) => setName(e.target.value)}
          >
            <option value="None Star">None</option>
            <option value="Two Star">Two</option>
            <option value="Three Star">Three</option>
            <option value="Four Star">Four</option>
            <option value="Five Star">Five</option>
          </select>

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

export default AddHotelBrand;
