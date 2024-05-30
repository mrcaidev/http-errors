import { describe, expect, test } from "vitest";
import { RequestTimeoutError } from "./408-request-timeout";

describe("408 Request Timeout", () => {
  test("default behavior", () => {
    const error = new RequestTimeoutError();
    expect(error.status).toEqual(408);
    expect(error.message).toEqual("Request Timeout");
  });

  test("custom error message", () => {
    const error = new RequestTimeoutError("Test");
    expect(error.status).toEqual(408);
    expect(error.message).toEqual("Test");
  });
});
