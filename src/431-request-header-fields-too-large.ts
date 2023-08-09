import { HttpError } from "./http-error";

/**
 * The server is unwilling to process the request
 * because its header fields are too large.
 *
 * @see https://www.rfc-editor.org/rfc/rfc6585#section-5
 */
export class RequestHeaderFieldsTooLargeError extends HttpError {
  constructor(message = "Request header fields too large") {
    super(431, message);
  }
}
