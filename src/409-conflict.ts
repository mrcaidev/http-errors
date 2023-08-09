import { HttpError } from "./http-error";

/**
 * The request could not be completed due to a conflict
 * with the current state of the target resource.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.10
 */
export class ConflictError extends HttpError {
  constructor(message = "Conflict") {
    super(409, message);
  }
}
