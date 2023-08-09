import { describe, expect, it } from "vitest";
import { ServiceUnavailableError } from "./503-service-unavailable";

describe("503 Service Unavailable", () => {
  it("has correct status code", () => {
    const error = new ServiceUnavailableError();
    expect(error.status).toEqual(503);
  });

  it("has default message", () => {
    const error = new ServiceUnavailableError();
    expect(error.message).toEqual("Service unavailable");
  });

  it("can customize message", () => {
    const error = new ServiceUnavailableError("Test");
    expect(error.message).toEqual("Test");
  });
});
