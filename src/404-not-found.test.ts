import { describe, expect, test } from "vitest";
import { NotFoundError } from "./404-not-found";

describe("404 Not Found", () => {
  test("default behavior", () => {
    const error = new NotFoundError();
    expect(error.status).toEqual(404);
    expect(error.message).toEqual("Not Found");
  });

  test("customized error message", () => {
    const error = new NotFoundError("Test");
    expect(error.status).toEqual(404);
    expect(error.message).toEqual("Test");
  });
});
