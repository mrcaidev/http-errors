import { HttpError } from "./http-error";

/**
 * The 423 (Locked) status code means
 * the source or destination resource of a method is locked.
 * This response SHOULD contain
 * an appropriate precondition or postcondition code, such as
 * "lock-token-submitted" or "no-conflicting-lock".
 *
 * @see https://www.rfc-editor.org/rfc/rfc4918#section-11.3
 */
export class LockedError extends HttpError {
  constructor(message = "Locked") {
    super(423, message);
  }
}
