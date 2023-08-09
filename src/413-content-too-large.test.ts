import { describe, expect, it } from "vitest";
import { ContentTooLargeError } from "./413-content-too-large";

describe("413 Content Too Large", () => {
  it("has correct status code", () => {
    const error = new ContentTooLargeError();
    expect(error.status).toEqual(413);
  });

  it("has default message", () => {
    const error = new ContentTooLargeError();
    expect(error.message).toEqual("Content too large");
  });

  it("can customize message", () => {
    const error = new ContentTooLargeError("Test");
    expect(error.message).toEqual("Test");
  });
});
