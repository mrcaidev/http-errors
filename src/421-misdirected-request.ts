import { HttpError } from "./http-error";

/**
 * The 421 (Misdirected Request) status code indicates that
 * the request was directed at a server that is unable or unwilling
 * to produce an authoritative response for the target URI.
 * An origin server (or gateway acting on behalf of the origin server)
 * sends 421 to reject a target URI that does not match an
 * [origin](https://www.rfc-editor.org/rfc/rfc9110#origin)
 * for which the server has been configured
 * or does not match the connection context
 * over which the request was received
 * ([Rejecting Misdirected Requests](https://www.rfc-editor.org/rfc/rfc9110#routing.reject)).
 *
 * A client that receives a 421 (Misdirected Request) response
 * MAY retry the request, whether or not the request method is idempotent,
 * over a different connection, such as a fresh connection
 * specific to the target resource's origin, or via an
 * [alternative service](https://www.rfc-editor.org/rfc/rfc7838).
 *
 * A proxy MUST NOT generate a 421 response.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.421
 */
export class MisdirectedRequestError extends HttpError {
  constructor(message?: string) {
    super(421, message);
  }
}
