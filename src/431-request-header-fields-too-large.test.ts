import { describe, expect, it } from "vitest";
import { RequestHeaderFieldsTooLargeError } from "./431-request-header-fields-too-large";

describe("431 Request Header Fields Too Large", () => {
  it("has correct status code", () => {
    const error = new RequestHeaderFieldsTooLargeError();
    expect(error.status).toEqual(431);
  });

  it("has default message", () => {
    const error = new RequestHeaderFieldsTooLargeError();
    expect(error.message).toEqual("Request header fields too large");
  });

  it("can customize message", () => {
    const error = new RequestHeaderFieldsTooLargeError("Test");
    expect(error.message).toEqual("Test");
  });
});
