import sum from "./sum"; // could not import with Jest
import { describe, expect, it, test } from "vitest";

describe("sum", () => {
  it("returns 0 with no numbers", () => {
    expect(sum()).toBe(0);
  });
});

describe("sum 1, 2, 3, 4, 5 to be 15", () => {
  it("returns 0 with no numbers", () => {
    expect(sum(1, 2, 3, 4, 5)).toBe(15);
  });
});
