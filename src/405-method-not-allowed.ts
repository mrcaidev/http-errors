import { HttpError } from "./http-error";

/**
 * The 405 (Method Not Allowed) status code indicates that
 * the method received in the request-line is known by the origin server
 * but not supported by the
 * [target resource](https://www.rfc-editor.org/rfc/rfc9110#target.resource).
 * The origin server MUST generate an
 * [Allow](https://www.rfc-editor.org/rfc/rfc9110#field.allow)
 * header field in a 405 response containing a list of
 * the target resource's currently supported methods.
 *
 * A 405 response is heuristically cacheable;
 * i.e., unless otherwise indicated by the method definition or explicit
 * [cache controls](https://www.rfc-editor.org/rfc/rfc9111#heuristic.freshness).
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.405
 */
export class MethodNotAllowedError extends HttpError {
  constructor(message?: string) {
    super(405, message);
  }
}
