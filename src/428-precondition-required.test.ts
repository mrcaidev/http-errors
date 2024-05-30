import { describe, expect, test } from "vitest";
import { PreconditionRequiredError } from "./428-precondition-required";

describe("428 Precondition Required", () => {
  test("default behavior", () => {
    const error = new PreconditionRequiredError();
    expect(error.status).toEqual(428);
    expect(error.message).toEqual("Precondition Required");
  });

  test("custom error message", () => {
    const error = new PreconditionRequiredError("Test");
    expect(error.status).toEqual(428);
    expect(error.message).toEqual("Test");
  });
});
