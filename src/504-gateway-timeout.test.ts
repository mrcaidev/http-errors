import { describe, expect, it } from "vitest";
import { GatewayTimeoutError } from "./504-gateway-timeout";

describe("504 Gateway Timeout", () => {
  it("has correct status code", () => {
    const error = new GatewayTimeoutError();
    expect(error.status).toEqual(504);
  });

  it("has default message", () => {
    const error = new GatewayTimeoutError();
    expect(error.message).toEqual("Gateway timeout");
  });

  it("can customize message", () => {
    const error = new GatewayTimeoutError("Test");
    expect(error.message).toEqual("Test");
  });
});
