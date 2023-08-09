import { HttpError } from "./http-error";

/**
 * The server is currently unable to handle the request
 * due to a temporary overload or scheduled maintenance,
 * which will likely be alleviated after some delay.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.6.4
 */
export class ServiceUnavailableError extends HttpError {
  constructor(message = "Service unavailable") {
    super(503, message);
  }
}
