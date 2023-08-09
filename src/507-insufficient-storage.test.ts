import { describe, expect, it } from "vitest";
import { InsufficientStorageError } from "./507-insufficient-storage";

describe("507 Insufficient Storage", () => {
  it("has correct status code", () => {
    const error = new InsufficientStorageError();
    expect(error.status).toEqual(507);
  });

  it("has default message", () => {
    const error = new InsufficientStorageError();
    expect(error.message).toEqual("Insufficient storage");
  });

  it("can customize message", () => {
    const error = new InsufficientStorageError("Test");
    expect(error.message).toEqual("Test");
  });
});
