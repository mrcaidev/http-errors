import { describe, expect, test } from "vitest";
import { MethodNotAllowedError } from "./405-method-not-allowed";

describe("405 Method Not Allowed", () => {
  test("default behavior", () => {
    const error = new MethodNotAllowedError();
    expect(error.status).toEqual(405);
    expect(error.message).toEqual("Method Not Allowed");
  });

  test("customized error message", () => {
    const error = new MethodNotAllowedError("Test");
    expect(error.status).toEqual(405);
    expect(error.message).toEqual("Test");
  });
});
