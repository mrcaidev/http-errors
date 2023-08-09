import { HttpError } from "./http-error";

/**
 * The server is denying access to the resource
 * as a consequence of a legal demand.
 *
 * @see https://www.rfc-editor.org/rfc/rfc7725#section-3
 */
export class UnavailableForLegalReasonsError extends HttpError {
  constructor(message = "Unavailable for legal reasons") {
    super(451, message);
  }
}
