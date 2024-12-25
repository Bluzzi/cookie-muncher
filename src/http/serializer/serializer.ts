import type { Cookie, HttpCookieOptions } from "#/typing/cookie";
import { capitalizeFirstLetter } from "#/utils/string";

/**
 * Format a string representing a cookie, useful to be able to set a cookie in a HTTP Set-Cookie header.
 */
export const serializeCookie = (cookie: Cookie, options: HttpCookieOptions = {}): string => {
  const parts: string[] = [`${cookie.name}=${encodeURIComponent(cookie.value)}`];

  if (typeof options.maxAge !== "undefined") parts.push(`Max-Age=${String(options.maxAge)}`);
  if (typeof options.expires !== "undefined") parts.push(`Expires=${options.expires.toUTCString()}`);
  if (typeof options.domain !== "undefined") parts.push(`Domain=${encodeURIComponent(options.domain)}`);
  parts.push(`Path=${options.path ?? "/"}`);
  if (typeof options.secure !== "undefined") parts.push("Secure");
  if (typeof options.httpOnly !== "undefined") parts.push("HttpOnly");
  if (typeof options.sameSite !== "undefined") parts.push(`SameSite=${capitalizeFirstLetter(options.sameSite)}`);

  return parts.join("; ");
};
