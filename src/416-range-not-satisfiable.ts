import { HttpError } from "./http-error";

/**
 * The 416 (Range Not Satisfiable) status code indicates that
 * the set of ranges in the request's
 * [Range](https://www.rfc-editor.org/rfc/rfc9110#field.range)
 * header field has been rejected either because none of the requested ranges
 * are satisfiable or because the client has requested
 * an excessive number of small or overlapping ranges
 * (a potential denial of service attack).
 *
 * Each range unit defines what is required
 * for its own range sets to be satisfiable. For example,
 * [Byte Ranges](https://www.rfc-editor.org/rfc/rfc9110#byte.ranges)
 * defines what makes a bytes range set satisfiable.
 *
 * A server that generates a 416 response
 * to a byte-range request SHOULD generate a
 * [Content-Range](https://www.rfc-editor.org/rfc/rfc9110#field.content-range)
 * header field specifying the current length of the selected representation.
 *
 * @example
 *
 * ```txt
 * HTTP/1.1 416 Range Not Satisfiable
 * Date: Fri, 20 Jan 2012 15:41:54 GMT
 * Content-Range: bytes 0-99/47022
 * ```
 *
 * @note
 *
 * Because servers are free to ignore
 * [Range](https://www.rfc-editor.org/rfc/rfc9110#field.range),
 * many implementations will respond
 * with the entire selected representation in a
 * [200 (OK)](https://www.rfc-editor.org/rfc/rfc9110#status.200)
 * response. That is partly because most clients are prepared to receive a
 * [200 (OK)](https://www.rfc-editor.org/rfc/rfc9110#status.200)
 * to complete the task (albeit less efficiently) and partly because
 * clients might not stop making an invalid range request
 * until they have received a complete representation.
 * Thus, clients cannot depend on receiving a 416 response
 * even when it is most appropriate.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.416
 */
export class RangeNotSatisfiableError extends HttpError {
  constructor(message?: string) {
    super(416, message);
  }
}
