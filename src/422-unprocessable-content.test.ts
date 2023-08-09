import { describe, expect, it } from "vitest";
import { UnprocessableContentError } from "./422-unprocessable-content";

describe("422 Unprocessable Content", () => {
  it("has correct status code", () => {
    const error = new UnprocessableContentError();
    expect(error.status).toEqual(422);
  });

  it("has default message", () => {
    const error = new UnprocessableContentError();
    expect(error.message).toEqual("Unprocessable content");
  });

  it("can customize message", () => {
    const error = new UnprocessableContentError("Test");
    expect(error.message).toEqual("Test");
  });
});
