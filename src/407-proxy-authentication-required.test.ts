import { describe, expect, it } from "vitest";
import { ProxyAuthenticationRequiredError } from "./407-proxy-authentication-required";

describe("407 Proxy Authentication Required", () => {
  it("has correct status code", () => {
    const error = new ProxyAuthenticationRequiredError();
    expect(error.status).toEqual(407);
  });

  it("has default message", () => {
    const error = new ProxyAuthenticationRequiredError();
    expect(error.message).toEqual("Proxy authentication required");
  });

  it("can customize message", () => {
    const error = new ProxyAuthenticationRequiredError("Test");
    expect(error.message).toEqual("Test");
  });
});
