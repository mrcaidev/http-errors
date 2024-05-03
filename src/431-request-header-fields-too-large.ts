import { HttpError } from "./http-error";

/**
 * The 431 status code indicates that
 * the server is unwilling to process the request
 * because its header fields are too large.
 * The request MAY be resubmitted
 * after reducing the size of the request header fields.
 *
 * It can be used both when the set of request header fields in total
 * is too large, and when a single header field is at fault.
 * In the latter case, the response representation SHOULD specify
 * which header field was too large.
 *
 * @see https://www.rfc-editor.org/rfc/rfc6585#section-5
 */
export class RequestHeaderFieldsTooLargeError extends HttpError {
  constructor(message = "Request header fields too large") {
    super(431, message);
  }
}
