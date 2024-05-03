import { describe, expect, test } from "vitest";
import { NotAcceptableError } from "./406-not-acceptable";

describe("406 Not Acceptable", () => {
  test("default behavior", () => {
    const error = new NotAcceptableError();
    expect(error.status).toEqual(406);
    expect(error.message).toEqual("Not Acceptable");
  });

  test("customized error message", () => {
    const error = new NotAcceptableError("Test");
    expect(error.status).toEqual(406);
    expect(error.message).toEqual("Test");
  });
});
