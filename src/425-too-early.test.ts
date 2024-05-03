import { describe, expect, test } from "vitest";
import { TooEarlyError } from "./425-too-early";

describe("425 Too Early", () => {
  test("default behavior", () => {
    const error = new TooEarlyError();
    expect(error.status).toEqual(425);
    expect(error.message).toEqual("Too Early");
  });

  test("customized error message", () => {
    const error = new TooEarlyError("Test");
    expect(error.status).toEqual(425);
    expect(error.message).toEqual("Test");
  });
});
