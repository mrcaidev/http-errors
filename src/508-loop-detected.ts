import { HttpError } from "./http-error";

/**
 * The 508 (Loop Detected) status code indicates that
 * the server terminated an operation
 * because it encountered an infinite loop
 * while processing a request with "Depth: infinity".
 * This status indicates that the entire operation failed.
 *
 * @see https://www.rfc-editor.org/rfc/rfc5842#section-7.2
 */
export class LoopDetectedError extends HttpError {
  constructor(message?: string) {
    super(508, message);
  }
}
