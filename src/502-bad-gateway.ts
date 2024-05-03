import { HttpError } from "./http-error";

/**
 * The 502 (Bad Gateway) status code indicates that
 * the server, while acting as a gateway or proxy, received an invalid response
 * from an inbound server it accessed while attempting to fulfill the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.502
 */
export class BadGatewayError extends HttpError {
  constructor(message?: string) {
    super(502, message);
  }
}
