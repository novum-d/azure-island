import { atom } from "recoil";
import { Island } from "../../model/Island";

const size = 40;
const column = 5;
const row = size / column;

export const islandList = atom({
  key: "islandList",
  default: Array.from({ length: row }, () => Array.from({ length: column }, () => new Island())),
});
