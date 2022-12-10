import React from "react";
import InputStyle from "./InputStyle";

interface IInput {
  htmlFor: string;
  labelName: string;
  type: string;
  name: string;
  placeholder: string;
  className: string;
  onChange?: (e?: React.ChangeEvent<HTMLInputElement>) => void;
  value?: undefined | string;
}

const Input = ({
  htmlFor,
  labelName,
  type,
  name,
  placeholder,
  onChange,
  className,
  value,
}: IInput): JSX.Element => {
  return (
    <InputStyle>
      <label htmlFor={htmlFor}>{labelName}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className={className}
        value={value}
      ></input>
    </InputStyle>
  );
};

export default Input;
