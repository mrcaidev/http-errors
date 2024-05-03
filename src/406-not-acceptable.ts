import { HttpError } from "./http-error";

/**
 * The 406 (Not Acceptable) status code indicates that the
 * [target resource](https://www.rfc-editor.org/rfc/rfc9110#target.resource)
 * does not have a current representation
 * that would be acceptable to the user agent, according to the
 * [proactive negotiation](https://www.rfc-editor.org/rfc/rfc9110#proactive.negotiation)
 * header fields received in the request, and the server
 * is unwilling to supply a default representation.
 *
 * The server SHOULD generate content containing a list of
 * available representation characteristics and corresponding resource identifiers
 * from which the user or user agent can choose the one most appropriate.
 * A user agent MAY automatically select the most appropriate choice
 * from that list. However, this specification does not define any standard
 * for such automatic selection, as described in
 * [300 (Multiple Choices)](https://www.rfc-editor.org/rfc/rfc9110#status.300).
 *
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.406
 */
export class NotAcceptableError extends HttpError {
  constructor(message?: string) {
    super(406, message);
  }
}
