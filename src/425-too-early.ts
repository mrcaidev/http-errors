import { HttpError } from "./http-error";

/**
 * The server is unwilling to risk processing a request that might be replayed.
 *
 * @see https://www.rfc-editor.org/rfc/rfc8470#section-5.2
 */
export class TooEarlyError extends HttpError {
  constructor(message = "Too early") {
    super(425, message);
  }
}
