import { describe, expect, it } from "vitest";
import { BadRequestError } from "./400-bad-request";

describe("400 Bad Request", () => {
  it("has correct status code", () => {
    const error = new BadRequestError();
    expect(error.status).toEqual(400);
  });

  it("has default message", () => {
    const error = new BadRequestError();
    expect(error.message).toEqual("Bad request");
  });

  it("can customize message", () => {
    const error = new BadRequestError("Test");
    expect(error.message).toEqual("Test");
  });
});
