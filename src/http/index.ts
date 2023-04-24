import { parseCookies } from "./parser";
import { serializeCookie } from "./serializer";

export const httpCookie = {
  parse: parseCookies,
  serialize: serializeCookie
};

export { CookieMaxAge } from "./serializer";