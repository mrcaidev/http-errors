import { describe, expect, it } from "vitest";
import { LockedError } from "./423-locked";

describe("423 Locked", () => {
  it("has correct status code", () => {
    const error = new LockedError();
    expect(error.status).toEqual(423);
  });

  it("has default message", () => {
    const error = new LockedError();
    expect(error.message).toEqual("Locked");
  });

  it("can customize message", () => {
    const error = new LockedError("Test");
    expect(error.message).toEqual("Test");
  });
});
