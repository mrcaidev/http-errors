import { describe, expect, it } from "vitest";
import { GoneError } from "./410-gone";

describe("410 Gone", () => {
  it("has correct status code", () => {
    const error = new GoneError();
    expect(error.status).toEqual(410);
  });

  it("has default message", () => {
    const error = new GoneError();
    expect(error.message).toEqual("Gone");
  });

  it("can customize message", () => {
    const error = new GoneError("Test");
    expect(error.message).toEqual("Test");
  });
});
