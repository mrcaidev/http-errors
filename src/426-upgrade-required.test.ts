import { describe, expect, test } from "vitest";
import { UpgradeRequiredError } from "./426-upgrade-required";

describe("426 Upgrade Required", () => {
  test("default behavior", () => {
    const error = new UpgradeRequiredError();
    expect(error.status).toEqual(426);
    expect(error.message).toEqual("Upgrade Required");
  });

  test("customized error message", () => {
    const error = new UpgradeRequiredError("Test");
    expect(error.status).toEqual(426);
    expect(error.message).toEqual("Test");
  });
});
