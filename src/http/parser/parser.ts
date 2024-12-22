import type { Cookie } from "#/typing/cookie";

/**
 * Parse cookies from a string separated with semicolon.
 */
export function parseCookies(cookies: string): Cookie[] {
  if (!cookies) return [];

  return cookies
    .split(";")
    .filter(str => (/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+=[\x21\x23-\x2B\x2D\x2E\x30-\x39\x41-\x5A\x5E-\x7E]+$/).test(str))
    .map(cookie => {
      const [rawName, rawValue] = cookie.split("=");

      const name = rawName.trim();
      const value = decodeURIComponent(rawValue.trim());

      return { name, value };
    });
}