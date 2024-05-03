import { describe, expect, test } from "vitest";
import { ServiceUnavailableError } from "./503-service-unavailable";

describe("503 Service Unavailable", () => {
  test("default behavior", () => {
    const error = new ServiceUnavailableError();
    expect(error.status).toEqual(503);
    expect(error.message).toEqual("Service Unavailable");
  });

  test("customized error message", () => {
    const error = new ServiceUnavailableError("Test");
    expect(error.status).toEqual(503);
    expect(error.message).toEqual("Test");
  });
});
