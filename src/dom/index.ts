import { getAllCookies } from "./get-all";
import { getCookie } from "./get";

export const domCookie = {
  getAll: getAllCookies,
  get: getCookie
};