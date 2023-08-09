import { HttpError } from "./http-error";

/**
 * The set of ranges in the request's `Range` header field has been rejected
 * either because none of the requested ranges are satisfiable
 * or because the client has requested an excessive number of
 * small or overlapping ranges (a potential denial of service attack).
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.17
 */
export class RangeNotSatisfiableError extends HttpError {
  constructor(message = "Range not satisfiable") {
    super(416, message);
  }
}
