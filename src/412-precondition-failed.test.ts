import { describe, expect, it } from "vitest";
import { PreconditionFailedError } from "./412-precondition-failed";

describe("412 Precondition Failed", () => {
  it("has correct status code", () => {
    const error = new PreconditionFailedError();
    expect(error.status).toEqual(412);
  });

  it("has default message", () => {
    const error = new PreconditionFailedError();
    expect(error.message).toEqual("Precondition failed");
  });

  it("can customize message", () => {
    const error = new PreconditionFailedError("Test");
    expect(error.message).toEqual("Test");
  });
});
