import type { Cookie } from "#/typing/cookie";
import { parseCookies } from "#/http/parser";
import { isCookieEnabled } from "#/utils/cookie";

export function getAllCookies(): Cookie[] {
  isCookieEnabled();

  return parseCookies(document.cookie);
}
