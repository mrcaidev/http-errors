import { HttpError } from "./http-error";

/**
 * The policy for accessing the resource has not been met in the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc2774#section-7
 */
export class NotExtendedError extends HttpError {
  constructor(message = "Not extended") {
    super(510, message);
  }
}
