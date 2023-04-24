import type { Cookie } from "#/typing/cookie";
import { parseCookies } from "#/http/parser";

export function getAllCookies(): Cookie[] {
  return parseCookies(document.cookie);
}