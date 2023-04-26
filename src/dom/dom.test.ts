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
      { name: "bar", value: "foo" }
    ]);
  });
});