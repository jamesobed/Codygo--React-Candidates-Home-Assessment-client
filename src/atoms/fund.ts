import { atom } from "recoil";

export const fundModalState = atom({
  key: "fundModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
