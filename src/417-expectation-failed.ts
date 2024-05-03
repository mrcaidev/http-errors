import { HttpError } from "./http-error";

/**
 * The 417 (Expectation Failed) status code indicates that
 * the expectation given in the request's
 * [Expect](https://www.rfc-editor.org/rfc/rfc9110#field.expect)
 * header field could not be met
 * by at least one of the inbound servers.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.417
 */
export class ExpectationFailedError extends HttpError {
  constructor(message = "Expectation failed") {
    super(417, message);
  }
}
