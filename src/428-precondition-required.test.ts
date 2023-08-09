import { describe, expect, it } from "vitest";
import { PreconditionRequiredError } from "./428-precondition-required";

describe("428 Precondition Required", () => {
  it("has correct status code", () => {
    const error = new PreconditionRequiredError();
    expect(error.status).toEqual(428);
  });

  it("has default message", () => {
    const error = new PreconditionRequiredError();
    expect(error.message).toEqual("Precondition required");
  });

  it("can customize message", () => {
    const error = new PreconditionRequiredError("Test");
    expect(error.message).toEqual("Test");
  });
});
