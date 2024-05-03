import { HttpError } from "./http-error";

/**
 * The 412 (Precondition Failed) status code indicates that
 * one or more conditions given in the request header fields
 * evaluated to false when tested on the server
 * ([Conditional Requests](https://www.rfc-editor.org/rfc/rfc9110#conditional.requests)).
 * This response status code allows the client to place preconditions
 * on the current resource state (its current representations and metadata)
 * and, thus, prevent the request method from being applied
 * if the target resource is in an unexpected state.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.412
 */
export class PreconditionFailedError extends HttpError {
  constructor(message?: string) {
    super(412, message);
  }
}
