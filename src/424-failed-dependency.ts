import { HttpError } from "./http-error";

/**
 * The 424 (Failed Dependency) status code means that
 * the method could not be performed on the resource
 * because the requested action depended on another action
 * and that action failed. For example, if a command
 * in a PROPPATCH method fails, then, at minimum, the rest of the commands
 * will also fail with 424 (Failed Dependency).
 *
 * @see https://www.rfc-editor.org/rfc/rfc4918#section-11.4
 */
export class FailedDependencyError extends HttpError {
  constructor(message = "Failed dependency") {
    super(424, message);
  }
}
