import { HttpError } from "./http-error";

/**
 * Reserved for future use.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.3
 */
export class PaymentRequiredError extends HttpError {
  constructor(message = "Payment required") {
    super(402, message);
  }
}
