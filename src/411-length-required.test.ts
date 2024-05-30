import { describe, expect, test } from "vitest";
import { LengthRequiredError } from "./411-length-required";

describe("411 Length Required", () => {
  test("default behavior", () => {
    const error = new LengthRequiredError();
    expect(error.status).toEqual(411);
    expect(error.message).toEqual("Length Required");
  });

  test("custom error message", () => {
    const error = new LengthRequiredError("Test");
    expect(error.status).toEqual(411);
    expect(error.message).toEqual("Test");
  });
});
