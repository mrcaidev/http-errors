import { HttpError } from "./http-error";

/**
 * The 503 (Service Unavailable) status code indicates that
 * the server is currently unable to handle the request
 * due to a temporary overload or scheduled maintenance,
 * which will likely be alleviated after some delay.
 * The server MAY send a
 * [Retry-After](https://www.rfc-editor.org/rfc/rfc9110#field.retry-after)
 * header field to suggest an appropriate amount of time
 * for the client to wait before retrying the request.
 *
 * @note
 *
 * The existence of the 503 status code does not imply that
 * a server has to use it when becoming overloaded.
 * Some servers might simply refuse the connection.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.503
 */
export class ServiceUnavailableError extends HttpError {
  constructor(message = "Service unavailable") {
    super(503, message);
  }
}
