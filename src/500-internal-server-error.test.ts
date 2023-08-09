import { describe, expect, it } from "vitest";
import { InternalServerError } from "./500-internal-server-error";

describe("500 Internal Server Error", () => {
  it("has correct status code", () => {
    const error = new InternalServerError();
    expect(error.status).toEqual(500);
  });

  it("has default message", () => {
    const error = new InternalServerError();
    expect(error.message).toEqual("Internal server error");
  });

  it("can customize message", () => {
    const error = new InternalServerError("Test");
    expect(error.message).toEqual("Test");
  });
});
