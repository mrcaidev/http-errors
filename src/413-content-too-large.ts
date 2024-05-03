import { HttpError } from "./http-error";

/**
 * The 413 (Content Too Large) status code indicates that
 * the server is refusing to process a request
 * because the request content is larger than
 * the server is willing or able to process.
 * The server MAY terminate the request,
 * if the protocol version in use allows it;
 * otherwise, the server MAY close the connection.
 *
 * If the condition is temporary, the server SHOULD generate a
 * [Retry-After](https://www.rfc-editor.org/rfc/rfc9110#field.retry-after)
 * header field to indicate that it is temporary
 * and after what time the client MAY try again.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.413
 */
export class ContentTooLargeError extends HttpError {
  constructor(message = "Content too large") {
    super(413, message);
  }
}
