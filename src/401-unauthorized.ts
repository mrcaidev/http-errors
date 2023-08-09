import { HttpError } from "./http-error";

/**
 * The request has not been applied because it lacks
 * valid authentication credentials for the target resource.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.2
 */
export class UnauthorizedError extends HttpError {
  constructor(message = "Unauthorized") {
    super(401, message);
  }
}
