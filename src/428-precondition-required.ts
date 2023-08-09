import { HttpError } from "./http-error";

/**
 * The origin server requires the request to be conditional.
 *
 * @see https://www.rfc-editor.org/rfc/rfc6585#section-3
 */
export class PreconditionRequiredError extends HttpError {
  constructor(message = "Precondition required") {
    super(428, message);
  }
}
