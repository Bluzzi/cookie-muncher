import type { Cookie } from "#/typing/cookie";

/**
 * Parse cookies from a string separated with semicolon.
 */
export function parseCookies(cookies: string): Cookie[] {
  if (!cookies) return [];

  return cookies.split(";").map(cookie => {
    const [rawName, rawValue] = cookie.split("=");

    const name = rawName.trim();
    const value = decodeURIComponent(rawValue.trim());

    return { name, value };
  });
}