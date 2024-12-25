import type { Cookie, DomCookieOptions } from "#/typing/cookie";
import { serializeCookie } from "#/http/serializer";
import { getByteSize } from "#/utils/string";
import { cookieMaxByteSize, cookieMaxCount, isCookieEnabled } from "#/utils/cookie";

export const setCookie = (cookie: Cookie, options: DomCookieOptions = {}): void => {
  isCookieEnabled();

  const cookiesCount = document.cookie.split(";").length;

  if (cookiesCount >= cookieMaxCount) {
    throw new Error("You have more than 50 cookies, most browsers limit the number of cookies to 50");
  }

  const newCookie = serializeCookie(cookie, options);

  if (getByteSize(newCookie) > cookieMaxByteSize) {
    throw new Error("The size of this cookie is greater than 4096 bytes, most browsers limit the number of cookies to this size");
  }

  document.cookie = serializeCookie(cookie, options);
};
