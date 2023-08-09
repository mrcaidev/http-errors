import { HttpError } from "./http-error";

/**
 * The target resource does not have a current representation
 * that would be acceptable to the user agent,
 * according to the proactive negotiation header fields
 * received in the request, and the server is unwilling to
 * supply a default representation.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.7
 */
export class NotAcceptableError extends HttpError {
  constructor(message = "Not acceptable") {
    super(406, message);
  }
}
