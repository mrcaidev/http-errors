import { HttpError } from "./http-error";

/**
 * The server terminated an operation because it encountered
 * an infinite loop while processing a request with "Depth: infinity".
 *
 * @see https://www.rfc-editor.org/rfc/rfc5842#section-7.2
 */
export class LoopDetectedError extends HttpError {
  constructor(message = "Loop detected") {
    super(508, message);
  }
}
