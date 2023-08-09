import { HttpError } from "./http-error";

/**
 * The server is refusing to process a request because the request content
 * is larger than the server is willing or able to process.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.14
 */
export class ContentTooLargeError extends HttpError {
  constructor(message = "Content too large") {
    super(413, message);
  }
}
