import { describe, expect, it } from "vitest";
import { NetworkAuthenticationRequiredError } from "./511-network-authentication-required";

describe("511 Network Authentication Required", () => {
  it("has correct status code", () => {
    const error = new NetworkAuthenticationRequiredError();
    expect(error.status).toEqual(511);
  });

  it("has default message", () => {
    const error = new NetworkAuthenticationRequiredError();
    expect(error.message).toEqual("Network authentication required");
  });

  it("can customize message", () => {
    const error = new NetworkAuthenticationRequiredError("Test");
    expect(error.message).toEqual("Test");
  });
});
