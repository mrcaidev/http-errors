import { HttpError } from "./http-error";

/**
 * The server cannot or will not process the request
 * due to something that is perceived to be a client error.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.1
 */
export class BadRequestError extends HttpError {
  constructor(message = "Bad request") {
    super(400, message);
  }
}
