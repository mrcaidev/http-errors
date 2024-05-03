import { HttpError } from "./http-error";

/**
 * The 426 (Upgrade Required) status code indicates that
 * the server refuses to perform the request using the current protocol
 * but might be willing to do so
 * after the client upgrades to a different protocol.
 * The server MUST send an
 * [Upgrade](https://www.rfc-editor.org/rfc/rfc9110#field.upgrade)
 * header field in a 426 response to indicate the required protocol(s).
 *
 * @example
 *
 * ```txt
 * HTTP/1.1 426 Upgrade Required
 * Upgrade: HTTP/3.0
 * Connection: Upgrade
 * Content-Length: 53
 * Content-Type: text/plain
 *
 * This service requires use of the HTTP/3.0 protocol.
 * ```
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.426
 */
export class UpgradeRequiredError extends HttpError {
  constructor(message = "Upgrade required") {
    super(426, message);
  }
}
