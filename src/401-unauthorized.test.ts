import { describe, expect, it } from "vitest";
import { UnauthorizedError } from "./401-unauthorized";

describe("401 Unauthorized", () => {
  it("has correct status code", () => {
    const error = new UnauthorizedError();
    expect(error.status).toEqual(401);
  });

  it("has default message", () => {
    const error = new UnauthorizedError();
    expect(error.message).toEqual("Unauthorized");
  });

  it("can customize message", () => {
    const error = new UnauthorizedError("Test");
    expect(error.message).toEqual("Test");
  });
});
