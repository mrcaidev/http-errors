import { HttpError } from "./http-error";

/**
 * The request was directed at a server that is unable or unwilling to
 * produce an authoritative response for the target URI.
 *
 * @see https://www.rfc-editor.org/rfc/rfc9110#section-15.5.20
 */
export class MisdirectedRequestError extends HttpError {
  constructor(message = "Misdirected request") {
    super(421, message);
  }
}
