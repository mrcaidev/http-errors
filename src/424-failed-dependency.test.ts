import { describe, expect, it } from "vitest";
import { FailedDependencyError } from "./424-failed-dependency";

describe("424 Failed Dependency", () => {
  it("has correct status code", () => {
    const error = new FailedDependencyError();
    expect(error.status).toEqual(424);
  });

  it("has default message", () => {
    const error = new FailedDependencyError();
    expect(error.message).toEqual("Failed dependency");
  });

  it("can customize message", () => {
    const error = new FailedDependencyError("Test");
    expect(error.message).toEqual("Test");
  });
});
