import { describe, expect, it } from "vitest";
import { TooManyRequestsError } from "./429-too-many-requests";

describe("429 Too Many Requests", () => {
  it("has correct status code", () => {
    const error = new TooManyRequestsError();
    expect(error.status).toEqual(429);
  });

  it("has default message", () => {
    const error = new TooManyRequestsError();
    expect(error.message).toEqual("Too many requests");
  });

  it("can customize message", () => {
    const error = new TooManyRequestsError("Test");
    expect(error.message).toEqual("Test");
  });
});
