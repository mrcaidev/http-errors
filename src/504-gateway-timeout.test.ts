import { describe, expect, test } from "vitest";
import { GatewayTimeoutError } from "./504-gateway-timeout";

describe("504 Gateway Timeout", () => {
  test("default behavior", () => {
    const error = new GatewayTimeoutError();
    expect(error.status).toEqual(504);
    expect(error.message).toEqual("Gateway Timeout");
  });

  test("custom error message", () => {
    const error = new GatewayTimeoutError("Test");
    expect(error.status).toEqual(504);
    expect(error.message).toEqual("Test");
  });
});
