import { HttpError } from "./http-error";

/**
 * The method could not be performed on the resource
 * because the requested action depended on another action
 * and that action failed.
 *
 * @see https://www.rfc-editor.org/rfc/rfc4918#section-11.4
 */
export class FailedDependencyError extends HttpError {
  constructor(message = "Failed dependency") {
    super(424, message);
  }
}
