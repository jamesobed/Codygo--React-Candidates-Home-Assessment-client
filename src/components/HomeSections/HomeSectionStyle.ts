import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 92px;
  z-index: 1;
  width: 100%;
  /* height: 600px; */
  background: #f4f3ff;
  padding: 0px 100px;
  box-sizing: border-box;
  @media (max-width: 43rem) {
    flex-direction: column;
    padding: 0px 30px;
  }
  @media (max-width: 33rem) {
    flex-direction: column;
    padding: 0px 20px;
  }
  @media (max-width: 29rem) {
    flex-direction: column;
    padding: 0px 10px;
  }
`;

export const RightArticle = styled.article`
  align-self: flex-end;
  @media (max-width: 1068px) {
    position: absolute;
    z-index: 30;
    .photoImgi {
      display: none;
    }
  }
`;

export const Steps = styled.div`
  margin-top: 5%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  padding: 0px 100px;
  box-sizing: border-box;
  @media (max-width: 1012px) {
    grid-template-columns: repeat(2, 1fr);
    align-items: space-between;
    gap: 1rem;
    /* padding: 0px 50px; */
    margin-top: 150px;
    box-sizing: border-box;
  }
  @media (max-width: 839px) {
    grid-template-columns: repeat(1, 1fr);

    box-sizing: border-box;
    margin: 0 auto;
    text-align: center;
  }
  @media (max-width: 451px) {
    width: 100%;
    /* margin-left: 12rem; */
  }
  @media (max-width: 360px) {
    width: 100%;
    /* margin-left: 12rem; */
  }
`;
export const Each = styled.div`
  width: 90%;
  height: 240px;
  background: #ffffff;
  border-radius: 16px;
  padding: 24px;
  margin: 5%;
  box-sizing: border-box;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.25);
  .iconBtn {
    width: 100%;
    cursor: pointer;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
  }
  @media (max-width: 800px) {
    height: max-content;
    border-radius: 16px;
    padding: 24px;
    /* margin: 0 auto; */
    text-align: center;
  }
  @media (max-width: 560px) {
    /* width: 100%; */
    height: max-content;
    border-radius: 10px;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    /* margin-left: -10rem; */
    .icon {
      width: 10px;
    }
  }
  @media (max-width: 360px) {
    .icon {
      width: 0.2px;
      /* height: px; */
    }
  }

  &:hover {
    box-shadow: 0px 1px 3px 2px rgba(0, 0, 0, 0.25), 0px -1px -3px -2px #fff;
    transform: scale(1.02);
  }
  .icon {
    display: flex;
    align-items: left;
    width: 30px;
    bottom: 3%;
  }
  .instruction {
    display: flex;
    align-items: left;
    text-transform: capitalize;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    color: #6938ef;
    flex: none;
    order: 0;
    flex-grow: 0;
    text-align: left;
    @media (max-width: 29rem) {
      font-weight: 400;
      font-size: 20px;
    }
  }
  .context {
    display: flex;
    align-items: center;
    text-align: left;
    width: 100%;
    flex-wrap: wrap;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    color: #101828;
    flex: none;
    order: 1;
    flex-grow: 0;
    @media (max-width: 29rem) {
      width: 100%;
      font-weight: 400;
      font-size: 10px;
    }
  }
`;
export const HowItWorks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  .title {
    width: 253px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    letter-spacing: 0.25px;
    color: #101828;
    flex: none;
    order: 0;
    flex-grow: 0;
    text-align: center;
    box-sizing: border-box;
    &::first-letter {
      text-transform: capitalize;
    }
  }
  .content {
    width: 229px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-align: center;
    color: #012a4a;
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-top: -1.5rem;
    margin-bottom: 1.5rem;
    &::first-letter {
      text-transform: capitalize;
    }
  }
`;
export const SectionTwo = styled.section`
  position: relative;
  margin-top: 100px;
  width: 100%;
  box-sizing: border-box;
  .banner {
    width: 100%;
    @media (max-width: 43rem) {
      width: 100%;
      /* height: 50vh; */
    }
  }
  .content_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    .left_content {
      box-sizing: border-box;
      @media (max-width: 43rem) {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -25%);
        z-index: 55;
      }
      @media (max-width: 29rem) {
        margin: 0 auto;
      }
      .heading {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        width: 450px;
        /* height: 96px; */
        font-family: "Inter";
        font-style: normal;
        font-weight: 700;
        font-size: 40px;
        /* line-height: 48px; */
        color: #ffffff;
        flex: none;
        order: 0;
        flex-grow: 0;
        box-sizing: border-box;
        @media (max-width: 39rem) {
          margin: 5rem auto 0rem;
          text-align: center;
          font-weight: 500;
          font-size: 20px;
        }
        @media (max-width: 29rem) {
          margin: 3rem auto 0rem;
          text-align: center;
          font-weight: 400;
          font-size: 20px;
          /* line-height: 38px; */
        }
      }
      .textContent {
        display: flex;
        justify-content: flex-start;
        text-align: left;
        flex-wrap: wrap;
        width: 100%;
        /* height: 48px; */
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #ffffff;
        flex: none;
        order: 1;
        flex-grow: 0;
        box-sizing: border-box;
      }

      .start_btn {
        position: relative;
        border: none;
        margin-right: auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        width: 154px;
        height: 37px;
        background: #ffffff;
        border-radius: 4px;
        flex: none;
        order: 1;
        flex-grow: 0;
        font-family: "Inter";
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 17px;
        color: #6938ef;
        text-transform: capitalize;
        box-sizing: border-box;
        text-decoration: none;
        @media (max-width: 29rem) {
          margin: 0 auto;
          text-align: center;
        }
        & > .link {
          text-decoration: none;
          color: #6938ef;
          &:hover {
            color: #fff;
          }
        }

        &:hover {
          background-color: #6938ef;
          color: #fff;
          cursor: pointer;
        }
      }
    }
    .right_content {
      position: relative;
      box-sizing: border-box;
      & > .image {
        width: 200%;
        @media (max-width: 688px) {
          width: 100%;
        }
        @media (max-width: 688px) {
          position: relative;
          width: 400px;
          padding-right: 10rem;
          bottom: -2.35rem;
          z-index: 50;
        }
        @media (max-width: 550px) {
          position: relative;
          width: 400px;
          padding-right: 12.5rem;
          bottom: -1.2rem;
          z-index: 50;
        }

        @media (max-width: 470px) {
          display: none;
          position: relative;
          width: 280px;
          padding-right: 30rem;
          bottom: -0.5rem;
          z-index: 50;
          display: none;
          box-sizing: border-box;
        }
      }
    }
  }
`;

export const SectionThree = styled.section`
  display: flex;
  align-items: center;
  padding: 100px;
  box-sizing: border-box;
  width: 100%;
  height: 786px;
  background: #f9fafb;
  @media (max-width: 43rem) {
    flex-direction: column;
    margin-top: -5rem;
    margin-bottom: -5rem;
    height: 700px;
  }

  @media (max-width: 1140px) {
    .imageUno {
      display: none;
    }
  }

  @media (max-width: 33rem) {
    /* height: 600px; */
  }
  .left_content {
    @media (max-width: 43rem) {
      margin: 0 auto;
    }
    .heading {
      text-align: left;
      width: 100%;
      height: 168px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 40px;
      /* line-height: 140%; */
      letter-spacing: 0.25px;
      color: #6938ef;
      flex: none;
      order: 0;
      flex-grow: 0;
      @media (max-width: 630px) {
        display: flex;
        place-content: center;
        width: 100%;
        font-family: "Inter";
        font-style: normal;
        font-weight: 400;
        font-size: 1rem;
        /* line-height: 100px; */
        /* letter-spacing: 0.18px; */
        text-align: center;
        box-sizing: border-box;
        /* margin-left: -4rem; */
      }
    }
    .list_items {
      list-style-type: none;
      text-align: left;
      & > .item {
        text-align: left;
        display: flex;
        width: 13rem;
        .text {
          /* margin-left: 1.14rem; */
          box-sizing: border-box;
          b {
            color: #6938ef;
          }
        }
      }
    }
  }
  .right_content {
    position: relative;
    box-sizing: border-box;
    @media (max-width: 43rem) {
      display: none;
    }
    .imageUno {
      box-sizing: border-box;
      z-index: 33;
      position: relative;
      width: 400px;
      height: 498px;
      left: 0px;
      top: 12rem;
      border: 8px solid #ffffff;
      border-radius: 16px;
    }
    .imageDeux {
      position: relative;
      z-index: 32;
      width: 300px;
      height: 498px;
      left: 283px;
      top: -13rem;
      border-radius: 16px;
    }
  }
`;
export const SectionFour = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  height: 250px;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  @media (max-width: 33rem) {
    height: 200px;
    display: grid;
    place-content: center;
    margin-top: 2rem;
  }
  .title {
    width: 204px;
    height: 45px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 140%;
    letter-spacing: 0.25px;
    color: #101828;
    flex: none;
    order: 0;
    flex-grow: 0;
    text-transform: capitalize;
    margin: 0 auto;
    @media (max-width: 43rem) {
      line-height: 3.5rem;
      font-size: 1.7rem;
    }
  }
  .sponsors {
    display: flex;
    width: 90%;
    margin-left: 5%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    box-sizing: border-box;
    @media (max-width: 43rem) {
      width: 100%;
      padding: 0 1rem;
      box-sizing: border-box;
    }

    & > img {
      @media (max-width: 43rem) {
        width: 4.3rem;
      }
      @media (max-width: 33rem) {
        width: 3.3rem;
      }
    }
  }
`;
export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  box-sizing: border-box;
  position: static;
  width: 100%;
  height: 340px;
  left: 0px;
  top: 2645px;
  background: #000000;
  box-sizing: border-box;
  @media (max-width: 43rem) {
    height: 300px;
  }
  .footer_nav {
    display: flex;
    justify-content: space-between;
    width: 25rem;
    list-style-type: none;
    margin: 3rem 0;
    box-sizing: border-box;
    & li > .link {
      text-transform: capitalize;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 26px;
      font-feature-settings: "liga" off;
      color: #f2f2f2;
      flex: none;
      order: 0;
      flex-grow: 0;
      transition: 1s ease-in linear;
      text-decoration: none;
      &:hover {
        cursor: pointer;
        color: blue;
      }
    }
  }
  .underline {
    width: 100%;
    height: 1px;
    background: #ffffff;
    opacity: 0.2;
    flex: none;
    order: 0;
    flex-grow: 0;
  }
  .footer_socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 2rem 0;
    @media (max-width: 43rem) {
      width: 100%;
      flex-direction: column-reverse;
    }
    .copyright {
      color: #fff;
      text-transform: capitalize;
    }
    .socials {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 127px;
      & a > .icon {
        cursor: pointer;
        &:hover {
          fill: blue;
        }
      }
    }
  }
`;
