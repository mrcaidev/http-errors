import { HttpError } from "./http-error";

/**
 * The source or destination resource of a method is locked.
 *
 * @see https://www.rfc-editor.org/rfc/rfc4918#section-11.3
 */
export class LockedError extends HttpError {
  constructor(message = "Locked") {
    super(423, message);
  }
}
