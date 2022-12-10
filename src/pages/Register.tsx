import React from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  return (
    <div style={{ marginLeft: "30%" }}>
      <h1 style={{ marginTop: "7rem" }}>REGISTER PAGE</h1>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Register;
