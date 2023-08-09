import { HttpError } from "./http-error";

/**
 * The origin server did not find a current representation
 * for the target resource or is not willing to disclose that one exists.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.5
 */
export class NotFoundError extends HttpError {
  constructor(message = "Not found") {
    super(404, message);
  }
}
