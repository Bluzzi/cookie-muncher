import { getAllCookies } from "./get-all";
import { getCookie } from "./get";
import { setCookie } from "./set";
import { removeCookie } from "./remove";

export const domCookie = {
  getAll: getAllCookies,
  get: getCookie,
  set: setCookie,
  remove: removeCookie,
};
