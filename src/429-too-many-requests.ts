import { HttpError } from "./http-error";

/**
 * The 429 status code indicates that
 * the user has sent too many requests
 * in a given amount of time ("rate limiting").
 *
 * The response representations SHOULD include details
 * explaining the condition, and MAY include a Retry-After header
 * indicating how long to wait before making a new request.
 *
 * Responses with the 429 status code MUST NOT be stored by a cache.
 *
 * @note
 *
 * This specification does not define
 * how the origin server identifies the user,
 * nor how it counts requests. For example, an origin server
 * that is limiting request rates can do so
 * based upon counts of requests on a per-resource basis,
 * across the entire server, or even among a set of servers.
 * Likewise, it might identify the user by its authentication credentials,
 * or a stateful cookie.
 *
 * @see https://www.rfc-editor.org/rfc/rfc6585#section-4
 */
export class TooManyRequestsError extends HttpError {
  constructor(message?: string) {
    super(429, message);
  }
}
