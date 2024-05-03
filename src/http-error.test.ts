import { describe, expect, test } from "vitest";
import { HttpError } from "./http-error";

describe("HTTP error", () => {
  test("default behavior", () => {
    const error = new HttpError(400);
    expect(error.status).toEqual(400);
    expect(error.message).toEqual("Bad Request");
  });

  test("customized error message", () => {
    const error = new HttpError(400, "Test");
    expect(error.status).toEqual(400);
    expect(error.message).toEqual("Test");
  });
});
