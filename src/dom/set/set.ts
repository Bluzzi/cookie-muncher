import type { Cookie, DomCookieOptions } from "#/typing/cookie";
import { serializeCookie } from "#/http/serializer";

export function setCookie(cookie: Cookie, options: DomCookieOptions = {}): void {
  document.cookie = serializeCookie(cookie, options);
}