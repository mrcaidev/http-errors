import { HttpError } from "./http-error";

/**
 * The server, while acting as a gateway or proxy,
 * received an invalid response from an inbound server it accessed
 * while attempting to fulfill the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.6.3
 */
export class BadGatewayError extends HttpError {
  constructor(message = "Bad gateway") {
    super(502, message);
  }
}
