import { HttpError } from "./http-error";

/**
 * The client needs to authenticate itself
 * in order to use a proxy for this request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.8
 */
export class ProxyAuthenticationRequiredError extends HttpError {
  constructor(message = "Proxy authentication required") {
    super(407, message);
  }
}
