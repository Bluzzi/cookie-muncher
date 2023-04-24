import { CookieMaxAge, serializeCookie } from "#/http/serializer";

export function removeCookie(name: string): void {
  document.cookie = serializeCookie(
    { name, value: "" },
    { maxAge: CookieMaxAge.Now }
  );
}