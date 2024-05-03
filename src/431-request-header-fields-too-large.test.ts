import { describe, expect, test } from "vitest";
import { RequestHeaderFieldsTooLargeError } from "./431-request-header-fields-too-large";

describe("431 Request Header Fields Too Large", () => {
  test("default behavior", () => {
    const error = new RequestHeaderFieldsTooLargeError();
    expect(error.status).toEqual(431);
    expect(error.message).toEqual("Request Header Fields Too Large");
  });

  test("customized error message", () => {
    const error = new RequestHeaderFieldsTooLargeError("Test");
    expect(error.status).toEqual(431);
    expect(error.message).toEqual("Test");
  });
});
