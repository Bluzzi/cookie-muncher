import { afterEach, describe, expect, it } from "vitest";
import { getAllCookies } from "./get-all";
import { setCookie } from "./set";
import { getCookie } from "./get";
import { removeCookie } from "./remove";

describe("domCookie functions", () => {
  afterEach(() => {
    // Remove all cookies after each tests:
    const cookies = getAllCookies();

    for (const cookie of cookies) {
      removeCookie(cookie.name);
    }
  });

  it("must return an empty array by default", () => {
    expect(getAllCookies()).toEqual([]);
  });

  it("must be able to create a cookie", () => {
    setCookie({ name: "foo", value: "bar" });

    expect(getCookie("foo")).toEqual({ name: "foo", value: "bar" });
  });

  it("must be able to remove a cookie", () => {
    setCookie({ name: "foo", value: "bar" });
    removeCookie("foo");

    expect(getCookie("foo")).toBeNull();
  });

  it("must be able to create multiple cookies and get it", () => {
    setCookie({ name: "foo", value: "bar" });
    setCookie({ name: "bar", value: "foo" });

    expect(getAllCookies()).toEqual([
      { name: "foo", value: "bar" },
      { name: "bar", value: "foo" },
    ]);
  });

  it("must throw an error when setting a cookie of more than 4096 bytes", () => {
    // 4096 bytes: large=a*4082; Path=/
    expect(() => {
      setCookie({ name: "large", value: "a".repeat(4082) });
    }).not.toThrowError(
      "The size of this cookie is greater than 4096 bytes, most browsers limit the number of cookies to this size",
    );

    // 4097 bytes: large=a*4083; Path=/
    expect(() => {
      setCookie({ name: "large", value: "a".repeat(4083) });
    }).toThrowError(
      "The size of this cookie is greater than 4096 bytes, most browsers limit the number of cookies to this size",
    );
  });

  it("should throw an error when there are more than 50 cookies", () => {
    // Create 49 cookies:
    for (let i = 0; i < 49; i += 1) setCookie({ name: `cookie${String(i)}`, value: String(i) });

    // 50th cookie:
    expect(() => {
      setCookie({ name: "bar", value: "foo" });
    }).not.toThrowError(
      "You have more than 50 cookies, most browsers limit the number of cookies to 50",
    );

    // 51th cookie:
    expect(() => {
      setCookie({ name: "foo", value: "bar" });
    }).toThrowError(
      "You have more than 50 cookies, most browsers limit the number of cookies to 50",
    );
  });
});
