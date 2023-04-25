import type { Cookie, DomCookieOptions } from "#/typing/cookie";
import { serializeCookie } from "#/http/serializer";
import { getByteSize } from "#/utils/string";
import { cookieMaxByteSize } from "#/utils/cookie";

export function setCookie(cookie: Cookie, options: DomCookieOptions = {}): void {
  const cookiesCount = document.cookie.split(";").length;

  if (cookiesCount > 50) {
    throw Error("You have more than 50 cookies, most browsers limit the number of cookies to 50");
  }

  const newCookie = serializeCookie(cookie, options);

  if (getByteSize(newCookie) > cookieMaxByteSize) {
    throw Error(`The size of this cookie is greater than ${cookieMaxByteSize} bytes, most browsers limit the number of cookies to this size.`);
  }

  document.cookie = serializeCookie(cookie, options);
}