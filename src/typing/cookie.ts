export type Cookie = {
  name: string;
  value: string;
}

/**
 * @property {number} maxAge - The maximum age of the cookie in seconds
 * @property {Date} expires - The expiration date of the cookie
 * @property {string} domain - The domain for which the cookie is valid
 * @property {string} path - The path for which the cookie is valid
 * @property {boolean} secure - Whether the cookie should only be sent over HTTPS
 * @property {boolean} httpOnly - Whether the cookie should only be accessible via HTTP
 * @property {"strict" | "lax" | "none"} sameSite - The same-site policy for the cookie
 */
type CookieOptions = {
  maxAge?: number;
  expires?: Date;
  domain?: string;
  path?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: "strict" | "lax" | "none";
}

export type DomCookieOptions = Omit<CookieOptions, "httpOnly">;
export type HttpCookieOptions = CookieOptions;

export type RemoveDomCookieOptions = Pick<CookieOptions, "domain" | "path" | "sameSite">;