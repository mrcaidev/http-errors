import { HttpError } from "./http-error";

/**
 * The 407 (Proxy Authentication Required) status code is similar to
 * [401 (Unauthorized)](https://www.rfc-editor.org/rfc/rfc9110#status.401),
 * but it indicates that the client needs to authenticate itself
 * in order to use a proxy for this request.
 * The proxy MUST send a
 * [Proxy-Authenticate](https://www.rfc-editor.org/rfc/rfc9110#field.proxy-authenticate)
 * header field containing a challenge applicable to that proxy for the request.
 * The client MAY repeat the request with a new or replaced
 * [Proxy-Authorization](https://www.rfc-editor.org/rfc/rfc9110#field.proxy-authorization)
 * header field.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.407
 */
export class ProxyAuthenticationRequiredError extends HttpError {
  constructor(message?: string) {
    super(407, message);
  }
}
