import { HttpError } from "./http-error";

/**
 * The 500 (Internal Server Error) status code indicates that
 * the server encountered an unexpected condition
 * that prevented it from fulfilling the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.500
 */
export class InternalServerError extends HttpError {
  constructor(message = "Internal server error") {
    super(500, message);
  }
}
