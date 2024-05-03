import { HttpError } from "./http-error";

/**
 * The 400 (Bad Request) status code indicates that
 * the server cannot or will not process the request
 * due to something that is perceived to be a client error
 * (e.g., malformed request syntax, invalid request message framing,
 * or deceptive request routing).
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.400
 */
export class BadRequestError extends HttpError {
  constructor(message = "Bad request") {
    super(400, message);
  }
}
