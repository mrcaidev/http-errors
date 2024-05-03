import { describe, expect, test } from "vitest";
import { UnauthorizedError } from "./401-unauthorized";

describe("401 Unauthorized", () => {
  test("default behavior", () => {
    const error = new UnauthorizedError();
    expect(error.status).toEqual(401);
    expect(error.message).toEqual("Unauthorized");
  });

  test("customized error message", () => {
    const error = new UnauthorizedError("Test");
    expect(error.status).toEqual(401);
    expect(error.message).toEqual("Test");
  });
});
