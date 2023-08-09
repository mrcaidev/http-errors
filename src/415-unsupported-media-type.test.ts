import { describe, expect, it } from "vitest";
import { UnsupportedMediaTypeError } from "./415-unsupported-media-type";

describe("415 Unsupported Media Type", () => {
  it("has correct status code", () => {
    const error = new UnsupportedMediaTypeError();
    expect(error.status).toEqual(415);
  });

  it("has default message", () => {
    const error = new UnsupportedMediaTypeError();
    expect(error.message).toEqual("Unsupported media type");
  });

  it("can customize message", () => {
    const error = new UnsupportedMediaTypeError("Test");
    expect(error.message).toEqual("Test");
  });
});
