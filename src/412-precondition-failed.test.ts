import { describe, expect, test } from "vitest";
import { PreconditionFailedError } from "./412-precondition-failed";

describe("412 Precondition Failed", () => {
  test("default behavior", () => {
    const error = new PreconditionFailedError();
    expect(error.status).toEqual(412);
    expect(error.message).toEqual("Precondition Failed");
  });

  test("customized error message", () => {
    const error = new PreconditionFailedError("Test");
    expect(error.status).toEqual(412);
    expect(error.message).toEqual("Test");
  });
});
