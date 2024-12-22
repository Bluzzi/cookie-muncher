import type { Cookie } from "#/typing/cookie";

/**
 * Parse cookies from a string separated with semicolon.
 */
export function parseCookies(cookies: string): Cookie[] {
  if (!cookies) return [];

  return cookies
    .split(";")
    .filter(str => (/^\s*([\w!#$%&'*+\-.^_`|~]+)\s*=\s*([^;]*)\s*$/).test(str) === true)
    .map(cookie => {
      const [rawName, rawValue] = cookie.split("=");

      const name = rawName.trim();
      const value = decodeURIComponent(rawValue.trim());

      return { name, value };
    });
}