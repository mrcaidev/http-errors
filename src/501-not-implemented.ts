import { HttpError } from "./http-error";

/**
 * The 501 (Not Implemented) status code indicates that
 * the server does not support the functionality
 * required to fulfill the request. This is the appropriate response
 * when the server does not recognize the request method
 * and is not capable of supporting it for any resource.
 *
 * A 501 response is heuristically cacheable;
 * i.e., unless otherwise indicated by the method definition or explicit
 * [cache controls](https://www.rfc-editor.org/rfc/rfc9111#heuristic.freshness).
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.501
 */
export class NotImplementedError extends HttpError {
  constructor(message?: string) {
    super(501, message);
  }
}
