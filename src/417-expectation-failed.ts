import { HttpError } from "./http-error";

/**
 * The expectation given in the request's `Expect` header field
 * could not be met by at least one of the inbound servers.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.18
 */
export class ExpectationFailedError extends HttpError {
  constructor(message = "Expectation failed") {
    super(417, message);
  }
}
