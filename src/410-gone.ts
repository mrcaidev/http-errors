import { HttpError } from "./http-error";

/**
 * Access to the target resource is no longer available at the origin server
 * and that this condition is likely to be permanent.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.11
 */
export class GoneError extends HttpError {
  constructor(message = "Gone") {
    super(410, message);
  }
}
