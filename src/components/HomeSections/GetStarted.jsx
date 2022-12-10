import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaYoutube, FaTwitter, FaInstagram } from "react-icons/fa";

import {
  Section,
  SectionTwo,
  SectionThree,
  SectionFour,
  Footer,
  HowItWorks,
  RightArticle,
  Steps,
} from "./HomeSectionStyle";
import RoundLogo from "../../assets/round.svg";
import DudePhone from "../../assets/dude_phone.png";
import Motherdaughter from "../../assets/imgg.jpg";
import PurpleBackground from "../../assets/banner.png";
import LeftArrow from "../../assets/left-arrow.svg";
import WomenPointing from "../../assets/women_pointing.png";
import Abeg from "../../assets/abeg.png";
import Accessbank from "../../assets/access_bank.png";
import Bolt from "../../assets/bolt.svg";

import SingleBox from "./SingleBox";
import axios from "axios";

const SitesURl = {
  instagram: "https://github.com/jamesobed",
  twitter: "https://github.com/jamesobed",
  youtube: "http://www.youtube.com/@sirobed",
};

const GetStarted = () => {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/hotels")
      .then((res) => {
        setHotels(res.data.records);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const currentYear = new Date().getFullYear();
  return (
    <>
      <Section>
        <RightArticle>
          <img
            src={Motherdaughter}
            alt="photoImg"
            className="photoImgi"
            style={{
              width: "658px",
              height: "590px",
            }}
          />
        </RightArticle>
      </Section>
      <br />
      <HowItWorks>
        <h2 className="title">Hotel List</h2>
        <br />
        <br />
        <p className="content">
          the easiest way to get the best place to relax
        </p>
      </HowItWorks>
      <Steps>
        {hotels.map((item) => (
          <SingleBox
            key={item.id}
            id={item.id}
            name={item.name}
            city={item.city}
            country={item.country}
            address={item.address}
          />
        ))}
      </Steps>
      <SectionTwo>
        <img src={PurpleBackground} alt="" className="banner" />
        <div className="content_wrapper">
          <div className="left_content">
            <h1 className="heading">
              Search from our list of available five star hotels
            </h1>
            <p className="textContent">
              A digital platform that digitizes the process of showing you the
              best relaxation spot with ease.
            </p>
            <br />
            <button className="start_btn">
              <Link className="link" to="/register">
                get hotel
              </Link>
            </button>
          </div>
          <div className="right_content">
            <img className="image" src={DudePhone} alt="frontPageImg" />
          </div>
        </div>
      </SectionTwo>
      <SectionThree>
        <div className="left_content">
          <h1 className="heading">
            You do not need to stress yourself to get to a secure and perfect
            hotel
          </h1>
          <div className="list_items">
            <div className="item">
              <img src={LeftArrow} alt="frontPageImg" className="icon" />
              <p className="text">
                The Hotel <b>Exclusive</b>{" "}
              </p>
            </div>
            <div className="item">
              <img src={LeftArrow} className="icon" alt="frontPageImg" />
              <p className="text">
                The Hotel <b>Secured</b>{" "}
              </p>
            </div>
            <div className="item">
              <img src={LeftArrow} alt="" className="icon" />
              <p className="text">
                The Hotel <b>Condusive</b>{" "}
              </p>
            </div>
            <div className="item">
              <img src={LeftArrow} alt="" className="icon" />
              <p className="text">
                The Hotel <b>loves</b>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="right_content">
          <img className="imageUno" src={WomenPointing} alt="frontPageImg" />
        </div>
      </SectionThree>
      <SectionFour>
        <h1 className="title">our partners:</h1>
        <br />
        <div className="sponsors">
          <img src={Abeg} alt="sponsor_logo" />
          <img src={Accessbank} alt="sponsor_logo" />
          <img src={Bolt} className="bolt" alt="sponsor_logo" />
          {/* <img src={Firstbank} alt="sponsor_logo" /> */}
          {/* <img src={Airtel} alt="sponsor_logo" /> */}
        </div>
      </SectionFour>
      <Footer>
        <img src={RoundLogo} alt="" className="footer_icon" />
        <ul className="footer_nav">
          <li>
            <Link className="link" to="/">
              home
            </Link>
          </li>
          <li>
            <Link className="link" to="/about">
              about
            </Link>
          </li>
          <li>
            <Link className="link" to="/contact">
              contact
            </Link>
          </li>
        </ul>
        <div className="underline">&nbsq;</div>
        <div className="footer_socials">
          <p className="copyright">
            &copy; {currentYear} Hotel Listing App. all rights reserved
          </p>
          <div className="socials">
            <a href={SitesURl.instagram} target="_blank" rel="noreferrer">
              <FaInstagram color="white" className="icon" />
            </a>
            <a href={SitesURl.twitter} target="_blank" rel="noreferrer">
              <FaTwitter color="white" className="icon" />
            </a>
            <a href={SitesURl.youtube} target="_blank" rel="noreferrer">
              <FaYoutube color="white" className="icon" />
            </a>
          </div>
        </div>
      </Footer>
    </>
  );
};

export default GetStarted;
