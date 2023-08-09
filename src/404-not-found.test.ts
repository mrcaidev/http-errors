import { describe, expect, it } from "vitest";
import { NotFoundError } from "./404-not-found";

describe("404 Not Found", () => {
  it("has correct status code", () => {
    const error = new NotFoundError();
    expect(error.status).toEqual(404);
  });

  it("has default message", () => {
    const error = new NotFoundError();
    expect(error.message).toEqual("Not found");
  });

  it("can customize message", () => {
    const error = new NotFoundError("Test");
    expect(error.message).toEqual("Test");
  });
});
