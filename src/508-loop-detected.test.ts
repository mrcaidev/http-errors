import { describe, expect, it } from "vitest";
import { LoopDetectedError } from "./508-loop-detected";

describe("508 Loop Detected", () => {
  it("has correct status code", () => {
    const error = new LoopDetectedError();
    expect(error.status).toEqual(508);
  });

  it("has default message", () => {
    const error = new LoopDetectedError();
    expect(error.message).toEqual("Loop detected");
  });

  it("can customize message", () => {
    const error = new LoopDetectedError("Test");
    expect(error.message).toEqual("Test");
  });
});
