import { HttpError } from "./http-error";

/**
 * The server has an internal configuration error:
 * the chosen variant resource is configured to
 * engage in transparent content negotiation itself,
 * and is therefore not a proper end point in the negotiation process.
 *
 * @see https://www.rfc-editor.org/rfc/rfc2295#section-8.1
 */
export class VariantAlsoNegotiatesError extends HttpError {
  constructor(message = "Variant also negotiates") {
    super(506, message);
  }
}
