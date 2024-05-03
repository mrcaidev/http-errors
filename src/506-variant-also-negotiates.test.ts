import { describe, expect, test } from "vitest";
import { VariantAlsoNegotiatesError } from "./506-variant-also-negotiates";

describe("506 Variant Also Negotiates", () => {
  test("default behavior", () => {
    const error = new VariantAlsoNegotiatesError();
    expect(error.status).toEqual(506);
    expect(error.message).toEqual("Variant Also Negotiates");
  });

  test("customized error message", () => {
    const error = new VariantAlsoNegotiatesError("Test");
    expect(error.status).toEqual(506);
    expect(error.message).toEqual("Test");
  });
});
