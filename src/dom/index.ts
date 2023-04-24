import { getAllCookies } from "./get-all";
import { getCookie } from "./get";
import { setCookie } from "./set";

export const domCookie = {
  getAll: getAllCookies,
  get: getCookie,
  set: setCookie
};