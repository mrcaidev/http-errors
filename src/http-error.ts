import { defaultMessages } from "./default-messages";

export type HttpErrorStatus = keyof typeof defaultMessages;

export class HttpError extends Error {
  constructor(
    public status: HttpErrorStatus,
    message: string = defaultMessages[status],
  ) {
    super(message);
  }
}
