import { describe, expect, test } from "vitest";
import { TooManyRequestsError } from "./429-too-many-requests";

describe("429 Too Many Requests", () => {
  test("default behavior", () => {
    const error = new TooManyRequestsError();
    expect(error.status).toEqual(429);
    expect(error.message).toEqual("Too Many Requests");
  });

  test("custom error message", () => {
    const error = new TooManyRequestsError("Test");
    expect(error.status).toEqual(429);
    expect(error.message).toEqual("Test");
  });
});
