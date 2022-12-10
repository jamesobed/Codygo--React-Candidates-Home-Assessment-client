import { atom } from "recoil";

export const fundSuccessModalState = atom({
  key: "fundSuccessModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
