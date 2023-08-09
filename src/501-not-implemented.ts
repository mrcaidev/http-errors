import { HttpError } from "./http-error";

/**
 * The server does not support the functionality
 * required to fulfill the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.6.2
 */
export class NotImplementedError extends HttpError {
  constructor(message = "Not implemented") {
    super(501, message);
  }
}
