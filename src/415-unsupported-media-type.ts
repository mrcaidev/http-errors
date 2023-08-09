import { HttpError } from "./http-error";

/**
 * The origin server is refusing to service the request because the content
 * is in a format not supported by this method on the target resource.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.16
 */
export class UnsupportedMediaTypeError extends HttpError {
  constructor(message = "Unsupported media type") {
    super(415, message);
  }
}
