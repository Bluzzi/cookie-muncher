import type { Cookie } from "#/typing/cookie";

/**
 * Parse cookies from a string separated with semicolon.
 */
export const parseCookies = (cookies: string): Cookie[] => {
  if (!cookies) return [];

  return cookies
    .split(";")
    .filter(str => (/^\s*([\w!#$%&'*+\-.^_`|~]+)\s*=\s*([^;]*)\s*$/u).test(str))
    .map((cookie) => {
      const [rawName, rawValue] = cookie.split("=");

      if (typeof rawName === "undefined" || typeof rawValue === "undefined") {
        throw Error("Invalid cookie format (this should not reachable, open an issue)");
      }

      const name = rawName.trim();
      const value = decodeURIComponent(rawValue.trim());

      return { name, value };
    });
};
