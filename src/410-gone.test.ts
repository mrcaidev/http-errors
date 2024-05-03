import { describe, expect, test } from "vitest";
import { GoneError } from "./410-gone";

describe("410 Gone", () => {
  test("default behavior", () => {
    const error = new GoneError();
    expect(error.status).toEqual(410);
    expect(error.message).toEqual("Gone");
  });

  test("customized error message", () => {
    const error = new GoneError("Test");
    expect(error.status).toEqual(410);
    expect(error.message).toEqual("Test");
  });
});
