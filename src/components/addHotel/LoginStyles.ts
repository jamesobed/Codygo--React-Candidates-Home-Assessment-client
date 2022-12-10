import styled from "styled-components";

export const LoginStyles = styled.div`
  padding: 2% 25% 6% 25%;
  width: 100%;
  background: #f5f5f5;
  font-family: "Inter";
  font-style: normal;

  .logo {
    display: flex;
    justify-content: center;
    gap: 1%;
    margin-bottom: 4%;
    // width: 188px;
    height: 70px;
  }
  .forgotpassword {
    color: #1570ef;
  }
  #label {
    font-family: Ariel;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
  }
  .logo img {
    width: 188px;
    height: 49px;
  }

  .logo h2 {
    font-weight: 500;
    font-size: 24px;
    color: #55a630;
    margin-top: 8px;
  }

  .login {
    /* border: 2px solid blue; */
    padding: 8% 14%;
    background: #ffffff;
  }

  .login h3 {
    font-weight: 600;
    font-size: 18px;
    color: #21334f;
    margin-bottom: 6%;
  }

  form input {
    width: 100%;
    height: 7vh;
    margin: 2% 0%;
    border: 1px solid #ccc;
    text-indent: 1.2rem;
    font-size: 12px;
  }
  form select {
    width: 100%;
    height: 7vh;
    margin: 2% 0%;
    border: 1px solid #ccc;
    text-indent: 1.2rem;
    font-size: 12px;
  }

  form label {
    font-weight: 400;
    font-size: 12px;
    color: #21334f;
  }

  ::-webkit-input-placeholder {
    /* Edge */
    color: red;
  }

  :-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #c4c4c4;
  }

  input::placeholder {
    color: #c4c4c4;
    padding-left: 7px;
    // border:5px solid red
  }
  input {
    padding-left: 10px;
  }
  #link {
    text-decoration: none;
    font-size: 12px;
    color: #21334f;
  }

  #login-btn {
    background: #6938ef;
    color: #fff;
    font-size: 12px;
    height: 7vh;
    border: 1px solid #ccc;
    cursor: pointer;
  }

  .or {
    display: flex;
    justify-content: center;
    gap: 4%;
    margin: 4% 0%;
  }

  .or p {
    font-size: 12px;
  }

  #line {
    width: 44.5%;
  }

  .account {
    display: flex;
    justify-content: center;
    gap: 1%;
  }

  #first-paragraph {
    font-weight: 400;
    font-size: 12px;
    color: #21334f;
  }

  #second-paragraph {
    color: #6938ef;
    font-size: 12px;
  }

  .error {
    display: flex;
    justify-content: center;
    color: red;
    font-size: 14px;
  }
  @media screen and (max-width: 412px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .login {
      width: 170%;
    }
  }
  @media screen and (max-width: 810px) {
    .fields > .icon {
      position: absolute;
      margin-top: -7px;
      left: 6px;
      // background:red
    }
  }
  //signup
  .fields {
    position: relative;
    width: 100%;
  }
  .fields > .icon {
    position: absolute;
    top: 28px;
    left: 6px;
  }
  .loading2 {
    margin-left: 50%;
    margin-right: 40%
  }
  .loading4{
    height:  20px;
     margin-left: 50%;
    margin-right: 50%
  }
  }
`;
