import { describe, expect, test } from "vitest";
import { ProxyAuthenticationRequiredError } from "./407-proxy-authentication-required";

describe("407 Proxy Authentication Required", () => {
  test("default behavior", () => {
    const error = new ProxyAuthenticationRequiredError();
    expect(error.status).toEqual(407);
    expect(error.message).toEqual("Proxy Authentication Required");
  });

  test("customized error message", () => {
    const error = new ProxyAuthenticationRequiredError("Test");
    expect(error.status).toEqual(407);
    expect(error.message).toEqual("Test");
  });
});
