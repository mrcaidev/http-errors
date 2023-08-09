import { HttpError } from "./http-error";

/**
 * The server did not receive a complete request message
 * within the time that it was prepared to wait.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.9
 */
export class RequestTimeoutError extends HttpError {
  constructor(message = "Request timeout") {
    super(408, message);
  }
}
