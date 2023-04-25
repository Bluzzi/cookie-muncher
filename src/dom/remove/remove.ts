import type { DomCookieOptions } from "#/typing/cookie";
import { serializeCookie } from "#/http/serializer";
import { CookieMaxAge } from "#/utils/duration";

export function removeCookie(name: string, options?: Omit<DomCookieOptions, "maxAge">): void {
  document.cookie = serializeCookie(
    { name, value: "" },
    {
      ...options,
      maxAge: CookieMaxAge.Now
    }
  );
}