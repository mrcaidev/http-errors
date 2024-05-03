import { describe, expect, test } from "vitest";
import { NotExtendedError } from "./510-not-extended";

describe("510 Not Extended", () => {
  test("default behavior", () => {
    const error = new NotExtendedError();
    expect(error.status).toEqual(510);
    expect(error.message).toEqual("Not Extended");
  });

  test("customized error message", () => {
    const error = new NotExtendedError("Test");
    expect(error.status).toEqual(510);
    expect(error.message).toEqual("Test");
  });
});
