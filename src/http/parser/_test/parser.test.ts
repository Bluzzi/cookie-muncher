import { describe, expect, it } from "vitest";
import { parseCookies } from "../parser";
import { encodedCookies, multipleCookies, singleCookie, whitespaceCookies } from "./parser.mock";

describe("parseCookies", () => {
  it("should return an empty array for an empty string", () => {
    expect(parseCookies("")).toEqual([]);
  });

  it("should parse a single cookie correctly", () => {
    expect(parseCookies(singleCookie.string)).toEqual(singleCookie.object);
  });

  it("should parse multiple cookies correctly", () => {
    expect(parseCookies(multipleCookies.string)).toEqual(multipleCookies.object);
  });

  it("should handle whitespace correctly", () => {
    expect(parseCookies(whitespaceCookies.string)).toEqual(whitespaceCookies.object);
  });

  it("decodes encoded cookie values", () => {
    expect(parseCookies(encodedCookies.string)).toEqual(encodedCookies.object);
  });
});