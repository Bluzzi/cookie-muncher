import { describe, expect, it } from "vitest";
import { capitalizeFirstLetter, getByteSize } from "./string.util";

describe("capitalizeFirstLetter", () => {
  it("must capitalize the first letter of a word", () => {
    expect(capitalizeFirstLetter("hello")).toBe("Hello");
  });

  it("must capitalize the first letter of a word when there are several words", () => {
    expect(capitalizeFirstLetter("hello world!")).toBe("Hello world!");
  });

  it("must not change the other letters", () => {
    expect(capitalizeFirstLetter("HellO WOrLD")).toBe("HellO WOrLD");
  });

  it("return an empty string", () => {
    expect(capitalizeFirstLetter("")).toBe("");
  });
});

describe("getByteSize", () => {
  it("should return the correct size", () => {
    expect(getByteSize("I love to eat cookies!")).toBe(22);
  });

  it("should return the correct size of the special characters", () => {
    expect(getByteSize("🔥🌊🌟🌞🌝~!@#$%^&*()-_=+[]{};:'|,.<>?/☠️🦋🐙🐊🕷️🦉%ç_'-~^&$£€¥₽¤+=><@€¡¿")).toBe(112);
  });

  it("should return 0 for empty string", () => {
    expect(getByteSize("")).toBe(0);
  });
});
