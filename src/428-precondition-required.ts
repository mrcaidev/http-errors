import { HttpError } from "./http-error";

/**
 * The 428 status code indicates that
 * the origin server requires the request to be conditional.
 *
 * Its typical use is to avoid the "lost update" problem,
 * where a client GETs a resource's state, modifies it,
 * and PUTs it back to the server, when meanwhile
 * a third party has modified the state on the server, leading to a conflict.
 * By requiring requests to be conditional, the server can assure that
 * clients are working with the correct copies.
 *
 * Responses using this status code SHOULD explain
 * how to resubmit the request successfully.
 *
 * Responses with the 428 status code MUST NOT be stored by a cache.
 *
 * @see https://www.rfc-editor.org/rfc/rfc6585#section-3
 */
export class PreconditionRequiredError extends HttpError {
  constructor(message?: string) {
    super(428, message);
  }
}
