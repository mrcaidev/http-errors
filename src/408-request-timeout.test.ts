import { describe, expect, it } from "vitest";
import { RequestTimeoutError } from "./408-request-timeout";

describe("408 Request Timeout", () => {
  it("has correct status code", () => {
    const error = new RequestTimeoutError();
    expect(error.status).toEqual(408);
  });

  it("has default message", () => {
    const error = new RequestTimeoutError();
    expect(error.message).toEqual("Request timeout");
  });

  it("can customize message", () => {
    const error = new RequestTimeoutError("Test");
    expect(error.message).toEqual("Test");
  });
});
