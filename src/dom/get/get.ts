import type { Cookie } from "#/typing/cookie";
import { parseCookies } from "#/http/parser";
import { isCookieEnabled } from "#/utils/cookie";

export const getCookie = (name: string): Cookie | null => {
  isCookieEnabled();

  return parseCookies(document.cookie).find(cookie => cookie.name === name) ?? null;
};
