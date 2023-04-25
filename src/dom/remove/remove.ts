import type { RemoveDomCookieOptions } from "#/typing/cookie";
import { serializeCookie } from "#/http/serializer";
import { CookieMaxAge } from "#/utils/duration";
import { isCookieEnabled } from "#/utils/cookie";

export function removeCookie(name: string, options?: RemoveDomCookieOptions): void {
  isCookieEnabled();

  document.cookie = serializeCookie(
    { name, value: "" },
    {
      ...options,
      maxAge: CookieMaxAge.Now
    }
  );
}