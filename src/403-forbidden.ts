import { HttpError } from "./http-error";

/**
 * The 403 (Forbidden) status code indicates that
 * the server understood the request but refuses to fulfill it.
 * A server that wishes to make public why the request has been forbidden
 * can describe that reason in the response content (if any).
 *
 * If authentication credentials were provided in the request,
 * the server considers them insufficient to grant access.
 * The client SHOULD NOT automatically repeat the request
 * with the same credentials. The client MAY repeat the request
 * with new or different credentials. However, a request
 * might be forbidden for reasons unrelated to the credentials.
 *
 * An origin server that wishes to "hide" the current existence of a forbidden
 * [target resource](https://www.rfc-editor.org/rfc/rfc9110#target.resource)
 * MAY instead respond with a status code of
 * [404 (Not Found)](https://www.rfc-editor.org/rfc/rfc9110#status.404).
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.403
 */
export class ForbiddenError extends HttpError {
  constructor(message = "Forbidden") {
    super(403, message);
  }
}
