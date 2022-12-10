import { atom } from "recoil";

export const selectedTeacherId = atom({
  key: "selectedTeacherId",
  default: "",
});

export const selectedTeacherName = atom({
  key: "selectedTeacherName",
  default: "",
});
