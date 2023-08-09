import { HttpError } from "./http-error";

/**
 * The server, while acting as a gateway or proxy,
 * did not receive a timely response from an upstream server
 * it needed to access in order to complete the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.6.5
 */
export class GatewayTimeoutError extends HttpError {
  constructor(message = "Gateway timeout") {
    super(504, message);
  }
}
