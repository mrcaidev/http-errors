import { HttpError } from "./http-error";

/**
 * The user has sent too many requests in a given amount of time.
 *
 * @see https://www.rfc-editor.org/rfc/rfc6585#section-4
 */
export class TooManyRequestsError extends HttpError {
  constructor(message = "Too many requests") {
    super(429, message);
  }
}
