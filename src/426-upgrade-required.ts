import { HttpError } from "./http-error";

/**
 * The server refuses to perform the request using the current protocol
 * but might be willing to do so after the client upgrades
 * to a different protocol.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.22
 */
export class UpgradeRequiredError extends HttpError {
  constructor(message = "Upgrade required") {
    super(426, message);
  }
}
