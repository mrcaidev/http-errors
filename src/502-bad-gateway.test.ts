import { describe, expect, it } from "vitest";
import { BadGatewayError } from "./502-bad-gateway";

describe("502 Bad Gateway", () => {
  it("has correct status code", () => {
    const error = new BadGatewayError();
    expect(error.status).toEqual(502);
  });

  it("has default message", () => {
    const error = new BadGatewayError();
    expect(error.message).toEqual("Bad gateway");
  });

  it("can customize message", () => {
    const error = new BadGatewayError("Test");
    expect(error.message).toEqual("Test");
  });
});
