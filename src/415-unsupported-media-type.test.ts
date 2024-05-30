import { describe, expect, test } from "vitest";
import { UnsupportedMediaTypeError } from "./415-unsupported-media-type";

describe("415 Unsupported Media Type", () => {
  test("default behavior", () => {
    const error = new UnsupportedMediaTypeError();
    expect(error.status).toEqual(415);
    expect(error.message).toEqual("Unsupported Media Type");
  });

  test("custom error message", () => {
    const error = new UnsupportedMediaTypeError("Test");
    expect(error.status).toEqual(415);
    expect(error.message).toEqual("Test");
  });
});
