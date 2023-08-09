import { describe, expect, it } from "vitest";
import { NotAcceptableError } from "./406-not-acceptable";

describe("406 Not Acceptable", () => {
  it("has correct status code", () => {
    const error = new NotAcceptableError();
    expect(error.status).toEqual(406);
  });

  it("has default message", () => {
    const error = new NotAcceptableError();
    expect(error.message).toEqual("Not acceptable");
  });

  it("can customize message", () => {
    const error = new NotAcceptableError("Test");
    expect(error.message).toEqual("Test");
  });
});
