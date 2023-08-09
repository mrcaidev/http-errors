import { describe, expect, it } from "vitest";
import { RangeNotSatisfiableError } from "./416-range-not-satisfiable";

describe("416 Range Not Satisfiable", () => {
  it("has correct status code", () => {
    const error = new RangeNotSatisfiableError();
    expect(error.status).toEqual(416);
  });

  it("has default message", () => {
    const error = new RangeNotSatisfiableError();
    expect(error.message).toEqual("Range not satisfiable");
  });

  it("can customize message", () => {
    const error = new RangeNotSatisfiableError("Test");
    expect(error.message).toEqual("Test");
  });
});
