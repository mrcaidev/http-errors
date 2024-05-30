import { describe, expect, test } from "vitest";
import { LoopDetectedError } from "./508-loop-detected";

describe("508 Loop Detected", () => {
  test("default behavior", () => {
    const error = new LoopDetectedError();
    expect(error.status).toEqual(508);
    expect(error.message).toEqual("Loop Detected");
  });

  test("custom error message", () => {
    const error = new LoopDetectedError("Test");
    expect(error.status).toEqual(508);
    expect(error.message).toEqual("Test");
  });
});
