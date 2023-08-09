import { describe, expect, it } from "vitest";
import { HttpError } from "./http-error";

describe("HTTP error", () => {
  it("accepts status and message", () => {
    const error = new HttpError(400, "Test");
    expect(error.status).toEqual(400);
    expect(error.message).toEqual("Test");
  });
});
