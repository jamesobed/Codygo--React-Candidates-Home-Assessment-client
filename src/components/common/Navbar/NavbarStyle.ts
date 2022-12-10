import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  left: 0px;
  top: 0px;
  z-index: 333;
  width: 100%;
  height: 92px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(33, 33, 33, 0.08);
  padding: 0px 100px;
  box-sizing: border-box;
  @media (max-width: 43rem) {
    padding: 0px 20px;
    /* width: 50%; */
  }
`;
export const LeftContent = styled.div`
  display: flex;
  .logo_text {
    display: flex;
    flex-direction: column;
  }
`;
export const RightContent = styled.div`
  & .list_items {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style-type: none;
    width: 30rem;
    text-transform: capitalize;
    & .item {
      width: 75px;
      height: 20px;
      font-family: "Inter";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      flex: none;
      flex-grow: 0;
      & > .link {
        color: #000;
        text-decoration: none;
        &:hover {
          cursor: pointer;
        }
        &:last-child:hover {
          color: blue;
        }
      }
      &:last-child {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 12px 18px;
        gap: 6px;
        width: 128px;
        height: 46px;
        background: #6938ef;
        border-radius: 5px;
        flex: none;
        flex-grow: 0;
        font-family: "Inter";
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 140%;
        text-align: center;
        letter-spacing: 0.15px;
        color: #f8fafc;
        &:hover {
          cursor: pointer;
          color: #000;
          background-color: #f8fafc;
        }
      }
    }
  }
  @media (max-width: 43rem) {
    display: none;
  }
`;

export const ShowNavbar = styled.div`
  position: absolute;
  top: 5.75rem;
  left: -10rem;
  background-color: #fff;
  padding: 1rem;
  padding-left: -3rem;
  box-sizing: border-box;
  border-bottom-right-radius: 1rem;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.75);
  transition: all 0.5s ease-in;
  .list_items {
    list-style-type: none;
    & > .item {
      margin-top: 0.7rem;
      text-transform: capitalize;
      & .link {
        text-decoration: none;
        color: #6938ef;
        &:hover {
          color: navy;
        }
      }
    }
  }
  &.show_navbar {
    left: 0rem;
    padding-right: 3rem;
    transition: all 0.5s ease-in;
  }
`;
export const HamburgerContainer = styled.div`
  display: none;
  .Hamburger {
    font-size: 2rem;
    &:hover {
      color: #6938ef;
      cursor: pointer;
    }
  }
  @media (max-width: 43rem) {
    display: block;
  }
`;
