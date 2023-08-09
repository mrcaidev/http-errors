import { HttpError } from "./http-error";

/**
 * The method could not be performed on the resource
 * because the server is unable to store the representation
 * needed to successfully complete the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc4918#section-11.5
 */
export class InsufficientStorageError extends HttpError {
  constructor(message = "Insufficient storage") {
    super(507, message);
  }
}
