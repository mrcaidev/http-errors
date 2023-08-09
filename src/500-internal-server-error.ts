import { HttpError } from "./http-error";

/**
 * The server encountered an unexpected condition
 * that prevented it from fulfilling the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.6.1
 */
export class InternalServerError extends HttpError {
  constructor(message = "Internal server error") {
    super(500, message);
  }
}
