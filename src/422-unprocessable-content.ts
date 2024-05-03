import { HttpError } from "./http-error";

/**
 * The 422 (Unprocessable Content) status code indicates that
 * the server understands the content type of the request content (hence a
 * [415 (Unsupported Media Type)](https://www.rfc-editor.org/rfc/rfc9110#status.415)
 * status code is inappropriate), and the syntax of the request content is correct,
 * but it was unable to process the contained instructions.
 * For example, this status code can be sent
 * if an XML request content contains well-formed
 * (i.e., syntactically correct)
 * but semantically erroneous XML instructions.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.422
 */
export class UnprocessableContentError extends HttpError {
  constructor(message = "Unprocessable content") {
    super(422, message);
  }
}
