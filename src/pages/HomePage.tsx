import React from "react";
import Navbar from "../components/common/Navbar/Navbar";
// import Navbar from "../components/common/Navbar/Navbar";
import GetStarted from "../components/HomeSections/GetStarted";

const HomePage: React.FC = () => {
  return (
    <>
      <Navbar />
      <GetStarted />
    </>
  );
};

export default HomePage;
