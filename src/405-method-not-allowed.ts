import { HttpError } from "./http-error";

/**
 * The method received in the request-line is known by the origin server
 * but not supported by the target resource.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.6
 */
export class MethodNotAllowedError extends HttpError {
  constructor(message = "Method not allowed") {
    super(405, message);
  }
}
