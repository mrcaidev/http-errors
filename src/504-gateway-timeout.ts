import { HttpError } from "./http-error";

/**
 * The 504 (Gateway Timeout) status code indicates that
 * the server, while acting as a gateway or proxy,
 * did not receive a timely response from an upstream server
 * it needed to access in order to complete the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.504
 */
export class GatewayTimeoutError extends HttpError {
  constructor(message = "Gateway timeout") {
    super(504, message);
  }
}
