import { describe, expect, test } from "vitest";
import { ExpectationFailedError } from "./417-expectation-failed";

describe("417 Expectation Failed", () => {
  test("default behavior", () => {
    const error = new ExpectationFailedError();
    expect(error.status).toEqual(417);
    expect(error.message).toEqual("Expectation Failed");
  });

  test("custom error message", () => {
    const error = new ExpectationFailedError("Test");
    expect(error.status).toEqual(417);
    expect(error.message).toEqual("Test");
  });
});
