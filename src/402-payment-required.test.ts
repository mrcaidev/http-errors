import { describe, expect, test } from "vitest";
import { PaymentRequiredError } from "./402-payment-required";

describe("402 Payment Required", () => {
  test("default behavior", () => {
    const error = new PaymentRequiredError();
    expect(error.status).toEqual(402);
    expect(error.message).toEqual("Payment Required");
  });

  test("custom error message", () => {
    const error = new PaymentRequiredError("Test");
    expect(error.status).toEqual(402);
    expect(error.message).toEqual("Test");
  });
});
