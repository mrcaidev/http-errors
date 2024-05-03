import { HttpError } from "./http-error";

/**
 * The 402 (Payment Required) status code is reserved for future use.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.402
 */
export class PaymentRequiredError extends HttpError {
  constructor(message?: string) {
    super(402, message);
  }
}
