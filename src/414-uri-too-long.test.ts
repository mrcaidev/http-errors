import { describe, expect, test } from "vitest";
import { UriTooLongError } from "./414-uri-too-long";

describe("414 URI Too Long", () => {
  test("default behavior", () => {
    const error = new UriTooLongError();
    expect(error.status).toEqual(414);
    expect(error.message).toEqual("URI Too Long");
  });

  test("custom error message", () => {
    const error = new UriTooLongError("Test");
    expect(error.status).toEqual(414);
    expect(error.message).toEqual("Test");
  });
});
