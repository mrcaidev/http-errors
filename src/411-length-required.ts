import { HttpError } from "./http-error";

/**
 * The server refuses to accept the request without a defined `Content-Length`.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.12
 */
export class LengthRequiredError extends HttpError {
  constructor(message = "Length required") {
    super(411, message);
  }
}
