import { describe, expect, test } from "vitest";
import { FailedDependencyError } from "./424-failed-dependency";

describe("424 Failed Dependency", () => {
  test("default behavior", () => {
    const error = new FailedDependencyError();
    expect(error.status).toEqual(424);
    expect(error.message).toEqual("Failed Dependency");
  });

  test("custom error message", () => {
    const error = new FailedDependencyError("Test");
    expect(error.status).toEqual(424);
    expect(error.message).toEqual("Test");
  });
});
