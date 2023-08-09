import { describe, expect, it } from "vitest";
import { UpgradeRequiredError } from "./426-upgrade-required";

describe("426 Upgrade Required", () => {
  it("has correct status code", () => {
    const error = new UpgradeRequiredError();
    expect(error.status).toEqual(426);
  });

  it("has default message", () => {
    const error = new UpgradeRequiredError();
    expect(error.message).toEqual("Upgrade required");
  });

  it("can customize message", () => {
    const error = new UpgradeRequiredError("Test");
    expect(error.message).toEqual("Test");
  });
});
