import { describe, expect, test } from "vitest";
import { ContentTooLargeError } from "./413-content-too-large";

describe("413 Content Too Large", () => {
  test("default behavior", () => {
    const error = new ContentTooLargeError();
    expect(error.status).toEqual(413);
    expect(error.message).toEqual("Content Too Large");
  });

  test("customized error message", () => {
    const error = new ContentTooLargeError("Test");
    expect(error.status).toEqual(413);
    expect(error.message).toEqual("Test");
  });
});
