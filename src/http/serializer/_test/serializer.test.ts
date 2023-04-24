import { describe, expect, it } from "vitest";
import { cookie, cookieString } from "./serializer.mock";
import { serializeCookie } from "../serializer";

describe("serializeCookie", () => {
  it("should return a string with only the cookie name and value when no options are provided", () => {
    expect(serializeCookie(cookie)).toBe(cookieString);
  });

  it("should include 'Max-Age' when provided in the options", () => {
    const result = serializeCookie(cookie, {
      maxAge: 3600
    });

    expect(result).toBe(`${cookieString}; Max-Age=3600`);
  });

  it("should include 'Expires' when provided in the options", () => {
    const result = serializeCookie(cookie, {
      expires: new Date("2023-04-23T23:59:59Z")
    });

    expect(result).toBe(`${cookieString}; Expires=Sun, 23 Apr 2023 23:59:59 GMT`);
  });

  it("should include 'Domain' when provided in the options", () => {
    const result = serializeCookie(cookie, {
      domain: "example.com"
    });

    expect(result).toBe(`${cookieString}; Domain=example.com`);
  });

  it("should include 'Path' when provided in the options", () => {
    const result = serializeCookie(cookie, {
      path: "/path"
    });

    expect(result).toBe(`${cookieString}; Path=/path`);
  });

  it("should include 'Secure' when provided in the options", () => {
    const result = serializeCookie(cookie, {
      secure: true
    });

    expect(result).toBe(`${cookieString}; Secure`);
  });

  it("should include 'HttpOnly' when provided in the options", () => {
    const result = serializeCookie(cookie, {
      httpOnly: true
    });

    expect(result).toBe(`${cookieString}; HttpOnly`);
  });

  it("should include 'SameSite' when provided in the options", () => {
    const result = serializeCookie(cookie, {
      sameSite: "Lax"
    });

    expect(result).toBe(`${cookieString}; SameSite=Lax`);
  });

  it("should include all options when provided", () => {
    const result = serializeCookie(cookie, {
      maxAge: 3600,
      expires: new Date("2023-04-23T23:59:59Z"),
      domain: "example.com",
      path: "/path",
      secure: true,
      httpOnly: true,
      sameSite: "Lax"
    });

    const expected = [
      `${cookieString}; Max-Age=3600; Expires=Sun, 23 Apr 2023 23:59:59 GMT;`,
      "Domain=example.com; Path=/path; Secure; HttpOnly; SameSite=Lax"
    ].join(" ");

    expect(result).toBe(expected);
  });
});