import { describe, expect, test } from "vitest";
import { UnprocessableContentError } from "./422-unprocessable-content";

describe("422 Unprocessable Content", () => {
  test("default behavior", () => {
    const error = new UnprocessableContentError();
    expect(error.status).toEqual(422);
    expect(error.message).toEqual("Unprocessable Content");
  });

  test("customized error message", () => {
    const error = new UnprocessableContentError("Test");
    expect(error.status).toEqual(422);
    expect(error.message).toEqual("Test");
  });
});
