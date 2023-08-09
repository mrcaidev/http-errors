import { HttpError } from "./http-error";

/**
 * The client needs to authenticate to gain network access.
 *
 * @see https://www.rfc-editor.org/rfc/rfc6585#section-6
 */
export class NetworkAuthenticationRequiredError extends HttpError {
  constructor(message = "Network authentication required") {
    super(511, message);
  }
}
