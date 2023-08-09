import { HttpError } from "./http-error";

/**
 * The server does not support, or refuses to support,
 * the major version of HTTP that was used in the request message.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.6.6
 */
export class HttpVersionNotSupportedError extends HttpError {
  constructor(message = "HTTP version not supported") {
    super(505, message);
  }
}
