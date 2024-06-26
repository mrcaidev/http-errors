import { HttpError } from "./http-error";

/**
 * The policy for accessing the resource has not been met in the request.
 * The server should send back all the information
 * necessary for the client to issue an extended request.
 * It is outside the scope of this specification
 * to specify how the extensions inform the client.
 *
 * If the 510 response contains information about extensions
 * that were not present in the initial request
 * then the client MAY repeat the request
 * if it has reason to believe it can fulfill the extension policy
 * by modifying the request according to the information
 * provided in the 510 response.
 * Otherwise the client MAY present any entity included in the 510 response
 * to the user, since that entity may include relevant diagnostic information.
 *
 * @see https://www.rfc-editor.org/rfc/rfc2774#section-7
 *
 * @deprecated https://datatracker.ietf.org/doc/status-change-http-experiments-to-historic/
 */
export class NotExtendedError extends HttpError {
  constructor(message?: string) {
    super(510, message);
  }
}
