import { describe, expect, test } from "vitest";
import { NotImplementedError } from "./501-not-implemented";

describe("501 Not Implemented", () => {
  test("default behavior", () => {
    const error = new NotImplementedError();
    expect(error.status).toEqual(501);
    expect(error.message).toEqual("Not Implemented");
  });

  test("customized error message", () => {
    const error = new NotImplementedError("Test");
    expect(error.status).toEqual(501);
    expect(error.message).toEqual("Test");
  });
});
