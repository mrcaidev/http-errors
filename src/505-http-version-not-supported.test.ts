import { describe, expect, it } from "vitest";
import { HttpVersionNotSupportedError } from "./505-http-version-not-supported";

describe("505 Http Version Not Supported", () => {
  it("has correct status code", () => {
    const error = new HttpVersionNotSupportedError();
    expect(error.status).toEqual(505);
  });

  it("has default message", () => {
    const error = new HttpVersionNotSupportedError();
    expect(error.message).toEqual("HTTP version not supported");
  });

  it("can customize message", () => {
    const error = new HttpVersionNotSupportedError("Test");
    expect(error.message).toEqual("Test");
  });
});
