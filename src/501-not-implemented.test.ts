import { describe, expect, it } from "vitest";
import { NotImplementedError } from "./501-not-implemented";

describe("501 Not Implemented", () => {
  it("has correct status code", () => {
    const error = new NotImplementedError();
    expect(error.status).toEqual(501);
  });

  it("has default message", () => {
    const error = new NotImplementedError();
    expect(error.message).toEqual("Not implemented");
  });

  it("can customize message", () => {
    const error = new NotImplementedError("Test");
    expect(error.message).toEqual("Test");
  });
});
