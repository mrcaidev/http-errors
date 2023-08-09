import { describe, expect, it } from "vitest";
import { TooEarlyError } from "./425-too-early";

describe("425 Too Early", () => {
  it("has correct status code", () => {
    const error = new TooEarlyError();
    expect(error.status).toEqual(425);
  });

  it("has default message", () => {
    const error = new TooEarlyError();
    expect(error.message).toEqual("Too early");
  });

  it("can customize message", () => {
    const error = new TooEarlyError("Test");
    expect(error.message).toEqual("Test");
  });
});
