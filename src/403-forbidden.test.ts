import { describe, expect, it } from "vitest";
import { ForbiddenError } from "./403-forbidden";

describe("403 Forbidden", () => {
  it("has correct status code", () => {
    const error = new ForbiddenError();
    expect(error.status).toEqual(403);
  });

  it("has default message", () => {
    const error = new ForbiddenError();
    expect(error.message).toEqual("Forbidden");
  });

  it("can customize message", () => {
    const error = new ForbiddenError("Test");
    expect(error.message).toEqual("Test");
  });
});
