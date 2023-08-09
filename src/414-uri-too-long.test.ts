import { describe, expect, it } from "vitest";
import { UriTooLongError } from "./414-uri-too-long";

describe("414 Uri Too Long", () => {
  it("has correct status code", () => {
    const error = new UriTooLongError();
    expect(error.status).toEqual(414);
  });

  it("has default message", () => {
    const error = new UriTooLongError();
    expect(error.message).toEqual("URI too long");
  });

  it("can customize message", () => {
    const error = new UriTooLongError("Test");
    expect(error.message).toEqual("Test");
  });
});
