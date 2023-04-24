import type { Cookie, CookieOptions } from "#/typing/cookie";

/**
 * Format a string representing a cookie, useful to be able to set a cookie in a HTTP Set-Cookie header.
 */
export function serializeCookie(cookie: Cookie, options: CookieOptions = {}): string {
  const parts: string[] = [`${cookie.name}=${cookie.value}`];

  if (options.maxAge) parts.push(`Max-Age=${options.maxAge}`);
  if (options.expires) parts.push(`Expires=${options.expires.toUTCString()}`);
  if (options.domain) parts.push(`Domain=${options.domain}`);
  parts.push(`Path=${options.path || "/"}`);
  if (options.secure) parts.push("Secure");
  if (options.httpOnly) parts.push("HttpOnly");
  if (options.sameSite) parts.push(`SameSite=${options.sameSite}`);

  return parts.join("; ");
}