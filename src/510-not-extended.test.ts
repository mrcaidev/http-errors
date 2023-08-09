import { describe, expect, it } from "vitest";
import { NotExtendedError } from "./510-not-extended";

describe("510 Not Extended", () => {
  it("has correct status code", () => {
    const error = new NotExtendedError();
    expect(error.status).toEqual(510);
  });

  it("has default message", () => {
    const error = new NotExtendedError();
    expect(error.message).toEqual("Not extended");
  });

  it("can customize message", () => {
    const error = new NotExtendedError("Test");
    expect(error.message).toEqual("Test");
  });
});
