import { describe, expect, it } from "vitest";
import { MisdirectedRequestError } from "./421-misdirected-request";

describe("421 Misdirected Request", () => {
  it("has correct status code", () => {
    const error = new MisdirectedRequestError();
    expect(error.status).toEqual(421);
  });

  it("has default message", () => {
    const error = new MisdirectedRequestError();
    expect(error.message).toEqual("Misdirected request");
  });

  it("can customize message", () => {
    const error = new MisdirectedRequestError("Test");
    expect(error.message).toEqual("Test");
  });
});
