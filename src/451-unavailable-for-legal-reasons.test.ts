import { describe, expect, it } from "vitest";
import { UnavailableForLegalReasonsError } from "./451-unavailable-for-legal-reasons";

describe("451 Unavailable For Legal Reasons", () => {
  it("has correct status code", () => {
    const error = new UnavailableForLegalReasonsError();
    expect(error.status).toEqual(451);
  });

  it("has default message", () => {
    const error = new UnavailableForLegalReasonsError();
    expect(error.message).toEqual("Unavailable for legal reasons");
  });

  it("can customize message", () => {
    const error = new UnavailableForLegalReasonsError("Test");
    expect(error.message).toEqual("Test");
  });
});
