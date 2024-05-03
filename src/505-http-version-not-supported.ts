import { HttpError } from "./http-error";

/**
 * The 505 (HTTP Version Not Supported) status code indicates that
 * the server does not support, or refuses to support,
 * the major version of HTTP that was used in the request message.
 * The server is indicating that it is unable or unwilling
 * to complete the request using the same major version as the client,
 * as described in
 * [Protocol Version](https://www.rfc-editor.org/rfc/rfc9110#protocol.version),
 * other than with this error message.
 * The server SHOULD generate a representation for the 505 response
 * that describes why that version is not supported
 * and what other protocols are supported by that server.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.505
 */
export class HttpVersionNotSupportedError extends HttpError {
  constructor(message = "HTTP version not supported") {
    super(505, message);
  }
}
