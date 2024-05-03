import { describe, expect, test } from "vitest";
import { ConflictError } from "./409-conflict";

describe("409 Conflict", () => {
  test("default behavior", () => {
    const error = new ConflictError();
    expect(error.status).toEqual(409);
    expect(error.message).toEqual("Conflict");
  });

  test("customized error message", () => {
    const error = new ConflictError("Test");
    expect(error.status).toEqual(409);
    expect(error.message).toEqual("Test");
  });
});
