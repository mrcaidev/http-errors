import { HttpError } from "./http-error";

/**
 * The server understands the content type of the request content
 * (hence a 415 (Unsupported Media Type) status code is inappropriate),
 * and the syntax of the request content is correct,
 * but it was unable to process the contained instructions.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.21
 */
export class UnprocessableContentError extends HttpError {
  constructor(message = "Unprocessable content") {
    super(422, message);
  }
}
