import { HttpError } from "./http-error";

/**
 * The server is refusing to service the request because the target URI
 * is longer than the server is willing to interpret.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.15
 */
export class UriTooLongError extends HttpError {
  constructor(message = "URI too long") {
    super(414, message);
  }
}
