import { HttpError } from "./http-error";

/**
 * A 425 (Too Early) status code indicates that
 * the server is unwilling to risk processing a request
 * that might be replayed.
 *
 * User agents that send a request in early data are expected to
 * retry the request when receiving a 425 (Too Early) response status code.
 * A user agent SHOULD retry automatically,
 * but any retries MUST NOT be sent in early data.
 *
 * In all cases, an intermediary can forward a 425 (Too Early) status code.
 * Intermediaries MUST forward a 425 (Too Early) status code
 * if the request that it received and forwarded
 * contained an Early-Data header field.
 * Otherwise, an intermediary that receives a request in early data
 * MAY automatically retry that request
 * in response to a 425 (Too Early) status code,
 * but it MUST wait for the TLS handshake to complete
 * on the connection where it received the request.
 *
 * The server cannot assume that a client is able to retry a request
 * unless the request is received in early data
 * or the Early-Data header field is set to "1".
 * A server SHOULD NOT emit the 425 status code
 * unless one of these conditions is met.
 *
 * The 425 (Too Early) status code is not cacheable by default.
 * Its payload is not the representation of any identified resource.
 *
 * @see https://www.rfc-editor.org/rfc/rfc8470#section-5.2
 */
export class TooEarlyError extends HttpError {
  constructor(message = "Too early") {
    super(425, message);
  }
}
