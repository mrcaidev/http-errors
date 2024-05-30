import { describe, expect, test } from "vitest";
import { RangeNotSatisfiableError } from "./416-range-not-satisfiable";

describe("416 Range Not Satisfiable", () => {
  test("default behavior", () => {
    const error = new RangeNotSatisfiableError();
    expect(error.status).toEqual(416);
    expect(error.message).toEqual("Range Not Satisfiable");
  });

  test("custom error message", () => {
    const error = new RangeNotSatisfiableError("Test");
    expect(error.status).toEqual(416);
    expect(error.message).toEqual("Test");
  });
});
