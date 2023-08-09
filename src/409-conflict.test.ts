import { describe, expect, it } from "vitest";
import { ConflictError } from "./409-conflict";

describe("409 Conflict", () => {
  it("has correct status code", () => {
    const error = new ConflictError();
    expect(error.status).toEqual(409);
  });

  it("has default message", () => {
    const error = new ConflictError();
    expect(error.message).toEqual("Conflict");
  });

  it("can customize message", () => {
    const error = new ConflictError("Test");
    expect(error.message).toEqual("Test");
  });
});
