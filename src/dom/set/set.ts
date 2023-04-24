import type { Cookie, CookieOptions } from "#/typing/cookie";
import { serializeCookie } from "#/http/serializer";

export function setCookie(cookie: Cookie, options: CookieOptions = {}): void {
  document.cookie = serializeCookie(cookie, options);
}