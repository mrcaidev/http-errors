import { describe, expect, test } from "vitest";
import { UnavailableForLegalReasonsError } from "./451-unavailable-for-legal-reasons";

describe("451 Unavailable For Legal Reasons", () => {
  test("default behavior", () => {
    const error = new UnavailableForLegalReasonsError();
    expect(error.status).toEqual(451);
    expect(error.message).toEqual("Unavailable For Legal Reasons");
  });

  test("custom error message", () => {
    const error = new UnavailableForLegalReasonsError("Test");
    expect(error.status).toEqual(451);
    expect(error.message).toEqual("Test");
  });
});
