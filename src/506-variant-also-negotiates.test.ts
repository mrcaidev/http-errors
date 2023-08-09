import { describe, expect, it } from "vitest";
import { VariantAlsoNegotiatesError } from "./506-variant-also-negotiates";

describe("506 Variant Also Negotiates", () => {
  it("has correct status code", () => {
    const error = new VariantAlsoNegotiatesError();
    expect(error.status).toEqual(506);
  });

  it("has default message", () => {
    const error = new VariantAlsoNegotiatesError();
    expect(error.message).toEqual("Variant also negotiates");
  });

  it("can customize message", () => {
    const error = new VariantAlsoNegotiatesError("Test");
    expect(error.message).toEqual("Test");
  });
});
