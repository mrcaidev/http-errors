import { describe, expect, it } from "vitest";
import { LengthRequiredError } from "./411-length-required";

describe("411 Length Required", () => {
  it("has correct status code", () => {
    const error = new LengthRequiredError();
    expect(error.status).toEqual(411);
  });

  it("has default message", () => {
    const error = new LengthRequiredError();
    expect(error.message).toEqual("Length required");
  });

  it("can customize message", () => {
    const error = new LengthRequiredError("Test");
    expect(error.message).toEqual("Test");
  });
});
