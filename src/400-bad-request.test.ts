import { describe, expect, test } from "vitest";
import { BadRequestError } from "./400-bad-request";

describe("400 Bad Request", () => {
  test("default behavior", () => {
    const error = new BadRequestError();
    expect(error.status).toEqual(400);
    expect(error.message).toEqual("Bad Request");
  });

  test("custom error message", () => {
    const error = new BadRequestError("Test");
    expect(error.status).toEqual(400);
    expect(error.message).toEqual("Test");
  });
});
