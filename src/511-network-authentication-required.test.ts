import { describe, expect, test } from "vitest";
import { NetworkAuthenticationRequiredError } from "./511-network-authentication-required";

describe("511 Network Authentication Required", () => {
  test("default behavior", () => {
    const error = new NetworkAuthenticationRequiredError();
    expect(error.status).toEqual(511);
    expect(error.message).toEqual("Network Authentication Required");
  });

  test("custom error message", () => {
    const error = new NetworkAuthenticationRequiredError("Test");
    expect(error.status).toEqual(511);
    expect(error.message).toEqual("Test");
  });
});
