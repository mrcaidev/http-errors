import { HttpError } from "./http-error";

/**
 * This status code indicates that
 * the server is denying access to the resource
 * as a consequence of a legal demand.
 *
 * The server in question might not be an origin server.
 * This type of legal demand typically most directly
 * affects the operations of ISPs and search engines.
 *
 * Responses using this status code SHOULD include an explanation,
 * in the response body, of the details of the legal demand:
 * the party making it, the applicable legislation or regulation,
 * and what classes of person and resource it applies to.
 *
 * The use of the 451 status code implies neither the existence
 * nor nonexistence of the resource named in the request.
 * That is to say, it is possible that if the legal demands were removed,
 * a request for the resource still might not succeed.
 *
 * A 451 response is cacheable by default;
 * i.e., unless otherwise indicated by the method definition or explicit
 * [cache controls](https://www.rfc-editor.org/rfc/rfc9111#heuristic.freshness).
 *
 * @note
 *
 * In many cases clients can still access the denied resource
 * by using technical countermeasures such as a VPN or the Tor network.
 *
 * @see https://www.rfc-editor.org/rfc/rfc7725#section-3
 */
export class UnavailableForLegalReasonsError extends HttpError {
  constructor(message?: string) {
    super(451, message);
  }
}
