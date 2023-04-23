import { serializeCookie } from "../serializer";
import { describe, expect, test } from "vitest";
import { cookie } from "./serializer.mock";
import type { CookieOptions } from "#/types/cookie";

describe("serializeCookie", () => {
  test("should return a string with only the cookie name and value when no options are provided", () => {
    const expected = "myCookie=myValue";
    const result = serializeCookie(cookie, {});
    expect(result).toEqual(expected);
  });

  test("should include Max-Age when provided in the options", () => {
    const options: CookieOptions = {
      maxAge: 3600
    };
    const expected = "myCookie=myValue; Max-Age=3600";
    const result = serializeCookie(cookie, options);
    expect(result).toEqual(expected);
  });

  test("should include Expires when provided in the options", () => {
    const options: CookieOptions = {
      expires: new Date("2023-04-23T23:59:59Z")
    };
    const expected = "myCookie=myValue; Expires=Sat, 23 Apr 2023 23:59:59 GMT";
    const result = serializeCookie(cookie, options);
    expect(result).toEqual(expected);
  });

  test("should include Domain when provided in the options", () => {
    const options: CookieOptions = {
      domain: "example.com"
    };
    const expected = "myCookie=myValue; Domain=example.com";
    const result = serializeCookie(cookie, options);
    expect(result).toEqual(expected);
  });

  test("should include Path when provided in the options", () => {
    const options: CookieOptions = {
      path: "/path"
    };
    const expected = "myCookie=myValue; Path=/path";
    const result = serializeCookie(cookie, options);
    expect(result).toEqual(expected);
  });

  test("should include Secure when provided in the options", () => {
    const options: CookieOptions = {
      secure: true
    };
    const expected = "myCookie=myValue; Secure";
    const result = serializeCookie(cookie, options);
    expect(result).toEqual(expected);
  });

  test("should include HttpOnly when provided in the options", () => {
    const options: CookieOptions = {
      httpOnly: true
    };
    const expected = "myCookie=myValue; HttpOnly";
    const result = serializeCookie(cookie, options);
    expect(result).toEqual(expected);
  });

  test("should include SameSite when provided in the options", () => {
    const options: CookieOptions = {
      sameSite: "Lax"
    };
    const expected = "myCookie=myValue; SameSite=Lax";
    const result = serializeCookie(cookie, options);
    expect(result).toEqual(expected);
  });

  test("should include all options when provided", () => {
    const options: CookieOptions = {
      maxAge: 3600,
      expires: new Date("2023-04-23T23:59:59Z"),
      domain: "example.com",
      path: "/path",
      secure: true,
      httpOnly: true,
      sameSite: "Lax"
    };
    const expected = [
      "myCookie=myValue; Max-Age=3600; Expires=Sat, 23 Apr 2023 23:59:59 GMT;",
      "Domain=example.com; Path=/path; Secure; HttpOnly; SameSite=Lax"
    ].join(" ");

    const result = serializeCookie(cookie, options);
    expect(result).toEqual(expected);
  });
});