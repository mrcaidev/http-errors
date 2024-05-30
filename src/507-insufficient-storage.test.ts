import { describe, expect, test } from "vitest";
import { InsufficientStorageError } from "./507-insufficient-storage";

describe("507 Insufficient Storage", () => {
  test("default behavior", () => {
    const error = new InsufficientStorageError();
    expect(error.status).toEqual(507);
    expect(error.message).toEqual("Insufficient Storage");
  });

  test("custom error message", () => {
    const error = new InsufficientStorageError("Test");
    expect(error.status).toEqual(507);
    expect(error.message).toEqual("Test");
  });
});
