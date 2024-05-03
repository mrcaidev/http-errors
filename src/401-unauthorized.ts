import { HttpError } from "./http-error";

/**
 * The 401 (Unauthorized) status code indicates that
 * the request has not been applied because it lacks
 * valid authentication credentials for the target resource.
 * The server generating a 401 response MUST send a
 * [WWW-Authenticate](https://www.rfc-editor.org/rfc/rfc9110#field.www-authenticate)
 * header field containing at least one challenge
 * applicable to the target resource.
 *
 * If the request included authentication credentials,
 * then the 401 response indicates that authorization
 * has been refused for those credentials. The user agent
 * MAY repeat the request with a new or replaced
 * [Authorization](https://www.rfc-editor.org/rfc/rfc9110#field.authorization)
 * header field. If the 401 response contains the same challenge
 * as the prior response, and the user agent has already
 * attempted authentication at least once, then the user agent
 * SHOULD present the enclosed representation to the user,
 * since it usually contains relevant diagnostic information.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.401
 */
export class UnauthorizedError extends HttpError {
  constructor(message?: string) {
    super(401, message);
  }
}
