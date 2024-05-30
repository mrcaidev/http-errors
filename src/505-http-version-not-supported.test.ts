import { describe, expect, test } from "vitest";
import { HttpVersionNotSupportedError } from "./505-http-version-not-supported";

describe("505 HTTP Version Not Supported", () => {
  test("default behavior", () => {
    const error = new HttpVersionNotSupportedError();
    expect(error.status).toEqual(505);
    expect(error.message).toEqual("HTTP Version Not Supported");
  });

  test("custom error message", () => {
    const error = new HttpVersionNotSupportedError("Test");
    expect(error.status).toEqual(505);
    expect(error.message).toEqual("Test");
  });
});
