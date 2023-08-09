import { describe, expect, it } from "vitest";
import { ExpectationFailedError } from "./417-expectation-failed";

describe("417 Expectation Failed", () => {
  it("has correct status code", () => {
    const error = new ExpectationFailedError();
    expect(error.status).toEqual(417);
  });

  it("has default message", () => {
    const error = new ExpectationFailedError();
    expect(error.message).toEqual("Expectation failed");
  });

  it("can customize message", () => {
    const error = new ExpectationFailedError("Test");
    expect(error.message).toEqual("Test");
  });
});
