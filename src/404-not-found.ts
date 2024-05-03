import { HttpError } from "./http-error";

/**
 * The 404 (Not Found) status code indicates that
 * the origin server did not find a current representation for the
 * [target resource](https://www.rfc-editor.org/rfc/rfc9110#target.resource)
 * or is not willing to disclose that one exists.
 * A 404 status code does not indicate
 * whether this lack of representationis temporary or permanent; the
 * [410 (Gone)](https://www.rfc-editor.org/rfc/rfc9110#status.410)
 * status code is preferred over 404 if the origin server knows,
 * presumably through some configurable means,
 * that the condition is likely to be permanent.
 *
 * A 404 response is heuristically cacheable;
 * i.e., unless otherwise indicated by the method definition or explicit
 * [cache controls](https://www.rfc-editor.org/rfc/rfc9111#heuristic.freshness).
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.404
 */
export class NotFoundError extends HttpError {
  constructor(message?: string) {
    super(404, message);
  }
}
