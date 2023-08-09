import { describe, expect, it } from "vitest";
import { PaymentRequiredError } from "./402-payment-required";

describe("402 Payment Required", () => {
  it("has correct status code", () => {
    const error = new PaymentRequiredError();
    expect(error.status).toEqual(402);
  });

  it("has default message", () => {
    const error = new PaymentRequiredError();
    expect(error.message).toEqual("Payment required");
  });

  it("can customize message", () => {
    const error = new PaymentRequiredError("Test");
    expect(error.message).toEqual("Test");
  });
});
