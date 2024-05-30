import { describe, expect, test } from "vitest";
import { MisdirectedRequestError } from "./421-misdirected-request";

describe("421 Misdirected Request", () => {
  test("default behavior", () => {
    const error = new MisdirectedRequestError();
    expect(error.status).toEqual(421);
    expect(error.message).toEqual("Misdirected Request");
  });

  test("custom error message", () => {
    const error = new MisdirectedRequestError("Test");
    expect(error.status).toEqual(421);
    expect(error.message).toEqual("Test");
  });
});
