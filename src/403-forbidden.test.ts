import { describe, expect, test } from "vitest";
import { ForbiddenError } from "./403-forbidden";

describe("403 Forbidden", () => {
  test("default behavior", () => {
    const error = new ForbiddenError();
    expect(error.status).toEqual(403);
    expect(error.message).toEqual("Forbidden");
  });

  test("custom error message", () => {
    const error = new ForbiddenError("Test");
    expect(error.status).toEqual(403);
    expect(error.message).toEqual("Test");
  });
});
