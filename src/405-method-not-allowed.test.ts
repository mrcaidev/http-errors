import { describe, expect, it } from "vitest";
import { MethodNotAllowedError } from "./405-method-not-allowed";

describe("405 Method Not Allowed", () => {
  it("has correct status code", () => {
    const error = new MethodNotAllowedError();
    expect(error.status).toEqual(405);
  });

  it("has default message", () => {
    const error = new MethodNotAllowedError();
    expect(error.message).toEqual("Method not allowed");
  });

  it("can customize message", () => {
    const error = new MethodNotAllowedError("Test");
    expect(error.message).toEqual("Test");
  });
});
