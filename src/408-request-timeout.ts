import { HttpError } from "./http-error";

/**
 * The 408 (Request Timeout) status code indicates that
 * the server did not receive a complete request message
 * within the time that it was prepared to wait.
 *
 * If the client has an outstanding request in transit,
 * it MAY repeat that request. If the current connection is not usable
 * (e.g., as it would be in HTTP/1.1 because request delimitation is lost),
 * a new connection will be used.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.408
 */
export class RequestTimeoutError extends HttpError {
  constructor(message = "Request timeout") {
    super(408, message);
  }
}
