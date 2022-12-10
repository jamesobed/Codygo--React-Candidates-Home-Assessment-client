import { atom } from "recoil";

export const withdrawModalState = atom({
  key: "withdrawModalState", // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});
