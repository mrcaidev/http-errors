import { describe, expect, test } from "vitest";
import { LockedError } from "./423-locked";

describe("423 Locked", () => {
  test("default behavior", () => {
    const error = new LockedError();
    expect(error.status).toEqual(423);
    expect(error.message).toEqual("Locked");
  });

  test("custom error message", () => {
    const error = new LockedError("Test");
    expect(error.status).toEqual(423);
    expect(error.message).toEqual("Test");
  });
});
