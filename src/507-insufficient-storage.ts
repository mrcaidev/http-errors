import { HttpError } from "./http-error";

/**
 * The 507 (Insufficient Storage) status code means
 * the method could not be performed on the resource
 * because the server is unable to store the representation
 * needed to successfully complete the request.
 * This condition is considered to be temporary.
 * If the request that received this status code
 * was the result of a user action, the request MUST NOT be repeated
 * until it is requested by a separate user action.
 *
 * @see https://www.rfc-editor.org/rfc/rfc4918#section-11.5
 */
export class InsufficientStorageError extends HttpError {
  constructor(message = "Insufficient storage") {
    super(507, message);
  }
}
