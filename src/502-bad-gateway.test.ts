import { describe, expect, test } from "vitest";
import { BadGatewayError } from "./502-bad-gateway";

describe("502 Bad Gateway", () => {
  test("default behavior", () => {
    const error = new BadGatewayError();
    expect(error.status).toEqual(502);
    expect(error.message).toEqual("Bad Gateway");
  });

  test("custom error message", () => {
    const error = new BadGatewayError("Test");
    expect(error.status).toEqual(502);
    expect(error.message).toEqual("Test");
  });
});
