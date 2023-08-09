import { HttpError } from "./http-error";

/**
 * The server understood the request but refuses to fulfill it.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.4
 */
export class ForbiddenError extends HttpError {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}
