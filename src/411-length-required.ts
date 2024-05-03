import { HttpError } from "./http-error";

/**
 * The 411 (Length Required) status code indicates that
 * the server refuses to accept the request without a defined
 * [Content-Length](https://www.rfc-editor.org/rfc/rfc9110#field.content-length).
 * The client MAY repeat the request
 * if it adds a valid Content-Length header field
 * containing the length of the request content.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.411
 */
export class LengthRequiredError extends HttpError {
  constructor(message = "Length required") {
    super(411, message);
  }
}
