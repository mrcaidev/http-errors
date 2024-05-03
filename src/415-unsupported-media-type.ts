import { HttpError } from "./http-error";

/**
 * The 415 (Unsupported Media Type) status code indicates that
 * the origin server is refusing to service the request
 * because the content is in a format not supported by this method on the
 * [target resource](https://www.rfc-editor.org/rfc/rfc9110#target.resource).
 *
 * The format problem might be due to the request's indicated
 * [Content-Type](https://www.rfc-editor.org/rfc/rfc9110#field.content-type)
 * or
 * [Content-Encoding](https://www.rfc-editor.org/rfc/rfc9110#field.content-encoding),
 * or as a result of inspecting the data directly.
 *
 * If the problem was caused by an unsupported content coding, the
 * [Accept-Encoding](https://www.rfc-editor.org/rfc/rfc9110#field.accept-encoding)
 * response header field ought to be used to indicate
 * which (if any) content codings would have been accepted in the request.
 *
 * On the other hand, if the cause was an unsupported media type, the
 * [Accept](https://www.rfc-editor.org/rfc/rfc9110#field.accept)
 * response header field can be used to indicate
 * which media types would have been accepted in the request.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#status.415
 */
export class UnsupportedMediaTypeError extends HttpError {
  constructor(message = "Unsupported media type") {
    super(415, message);
  }
}
