import { describe, expect, test } from "vitest";
import { InternalServerError } from "./500-internal-server-error";

describe("500 Internal Server Error", () => {
  test("default behavior", () => {
    const error = new InternalServerError();
    expect(error.status).toEqual(500);
    expect(error.message).toEqual("Internal Server Error");
  });

  test("custom error message", () => {
    const error = new InternalServerError("Test");
    expect(error.status).toEqual(500);
    expect(error.message).toEqual("Test");
  });
});
