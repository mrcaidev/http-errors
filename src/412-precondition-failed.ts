import { HttpError } from "./http-error";

/**
 * One or more conditions given in the request header fields
 * evaluated to false when tested on the server.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.13
 */
export class PreconditionFailedError extends HttpError {
  constructor(message = "Precondition failed") {
    super(412, message);
  }
}
