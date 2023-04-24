import type { Cookie } from "#/typing/cookie";
import { parseCookies } from "#/http/parser";

export function getCookie(name: string): Cookie | null {
  return parseCookies(document.cookie).find(cookie => cookie.name === name) || null;
}