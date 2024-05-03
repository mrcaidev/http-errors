import { HttpError } from "./http-error";

/**
 * The 414 (URI Too Long) status code indicates that
 * the server is refusing to service the request
 * because the target URI is longer than the server is willing to interpret.
 * This rare condition is only likely to occur
 * when a client has improperly converted a POST request
 * to a GET request with long query information,
 * when the client has descended into an infinite loop of redirection
 * (e.g., a redirected URI prefix that points to a suffix of itself)
 * or when the server is under attack by a client
 * attempting to exploit potential security holes.
 *
 * A 414 response is heuristically cacheable;
 * i.e., unless otherwise indicated by the method definition or explicit
 * [cache controls](https://www.rfc-editor.org/rfc/rfc9111#heuristic.freshness).
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.414
 */
export class UriTooLongError extends HttpError {
  constructor(message = "URI too long") {
    super(414, message);
  }
}
